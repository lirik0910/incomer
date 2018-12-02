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

    public function get(array $params)
    {
        $period = $params['period'] ?? '1minute';
        $whereParams = ['person_id' => $params['company']];
        $items = $this->model->where($whereParams);

        switch ($period) {
            case '1minute':
                $items
                    ->limit(100)
                    ->orderBy('date', 'desc')
                    ->orderBy('minute', 'desc');
                break;
            case '5minute':
                $items
                    ->limit(100)
                    ->whereRaw('(date_part(\'minute\', minute))::integer % 5  = 0')
                    ->orderBy('date', 'desc')
                    ->orderBy('minute', 'desc');
                break;
            case '10minute':
                $items
                    ->limit(100)
                    ->whereRaw('(date_part(\'minute\', minute))::integer % 10  = 0')
                    ->orderBy('date', 'desc')
                    ->orderBy('minute', 'desc');
                break;
            case '1day':
                $items
                    ->limit(100)
                    ->whereRaw('(date_part(\'hour\', minute))::integer   = 0')
                    ->orderBy('date', 'desc');
                break;
            case '1week':
                $items
                    ->limit(100)
                    ->whereRaw('(date_part(\'hour\', minute))::integer = 0')
                    ->whereRaw('(date_part(\'dow\', date))::integer % 7 = 5')
                    ->orderBy('date', 'desc');
                break;
            case '1month':
                $items
                    ->select(
                        \DB::raw("DISTINCT on (date_trunc('month', date)) date_trunc('month', date) as moy, *")
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
