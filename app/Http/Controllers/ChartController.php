<?php

namespace App\Http\Controllers;

use App\Repositories\Chart\ChartRepository;
use Illuminate\Http\Request;

class ChartController extends Controller
{
    private $chartModel;

    public function __construct(ChartRepository $chartModel)
    {
        $this->chartModel = $chartModel;
    }

    /*
     * Get
     * @param Request $request
     */
    public function index(Request $request, $id)
    {
        $params = $request->only(['period']);
        $params['company'] = $id;


        $chart = $this->chartModel->get($params);

        $filteredChart = [];
        foreach ($chart as $point) {
            $filteredChart[] = [
                strtotime($point['date'].' '.$point['minute'])*1000,
                (float) $point['close']
            ];
        }


//        return response()->json($chart);
        return response()->json($filteredChart);
    }
}
