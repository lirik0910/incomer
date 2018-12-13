<?php

namespace App\Repositories\Chart;

use App\Model\Chart;

class ChartEloquent implements ChartRepository
{
    private $model;

    public function __construct(Chart $model)
    {
        $this->model = $model;
    }

    public function lastPrice($id){
        $lastPrice = $this->model
            ->select(['close', 'person_id'])
            ->where('person_id', $id)
            ->where('close', '>', 0)
            ->orderBy('date', 'desc')
            ->orderBy('minute', 'desc')
            ->limit(2)
            ->get();

        return $lastPrice;
    }

    public function beforeLastPrice($id){
        $lastPrice = $this->model
            ->select(['close', 'person_id'])
            ->where('person_id', $id)
            ->where('close', '>', 0)
            ->orderBy('date', 'desc')
            ->orderBy('minute', 'desc')
            ->offset(1)
            ->first();

        return $lastPrice;
    }

    public function lastPrices(array $ids = []){
        $lastPrices = $this->model
            ->select(['close', 'person_id'])
            ->whereIn('person_id', $ids)
            ->orderBy('date', 'desc')
            ->orderBy('minute', 'desc')
            ->limit(count($ids))
            ->get();

        return $lastPrices;
    }

    public function all(array $ids = [])
    {

        $items = $this->model
            ->whereIn('person_id', $ids)
            ->whereRaw('(date_part(\'hour\', minute))::integer = 0')
            ->whereRaw('(date_part(\'dow\', date))::integer % 7 = 5')
            ->limit(600)
            ->orderBy('date', 'desc');

        return $items->get();
    }


    public function get(array $params)
    {
        $period = $params['period'] ?? '1minute';
        $whereParams = ['person_id' => $params['company']];
        $items = $this->model->where($whereParams);

        switch ($period) {
            case '1minute':
                $items
                    ->select(['date', 'minute', 'close'])
                    ->limit(100)
                    ->orderBy('date', 'desc')
                    ->orderBy('minute', 'desc');
                break;
            case '5minute':
                $items
                    ->limit(100)
                    ->select(['date', 'minute', 'close'])
                    ->whereRaw('(date_part(\'minute\', minute))::integer % 5  = 0')
                    ->orderBy('date', 'desc')
                    ->orderBy('minute', 'desc');
                break;
            case '10minute':
                $items
                    ->select(['date', 'minute', 'close'])
                    ->limit(100)
                    ->whereRaw('(date_part(\'minute\', minute))::integer % 10  = 0')
                    ->orderBy('date', 'desc')
                    ->orderBy('minute', 'desc');
                break;
            case '1day':
                $items
                    ->select(['date', 'minute', 'close'])
                    ->limit(100)
                    ->whereRaw('(date_part(\'hour\', minute))::integer   = 0')
                    ->orderBy('date', 'desc');
                break;
            case '1week':
                $items
                    ->select(['date', 'minute', 'close'])
                    ->limit(100)
                    ->whereRaw('(date_part(\'hour\', minute))::integer = 0')
                    ->whereRaw('(date_part(\'dow\', date))::integer % 7 = 5')
                    ->orderBy('date', 'desc');
                break;
            case '1month':
                $items
                    ->select(
                        \DB::raw("DISTINCT on (date_trunc('month', date)) date_trunc('month', date) as moy, date, minute, close")
                    )
                    ->limit(100)
                    ->whereRaw('minute = \'00:00:00\'')
                    ->orderBy('moy', 'desc')
                    ->orderBy('date', 'desc');
                break;
        }


        return $items->get();
    }



}
