<?php


namespace App\Repositories\Chart;

interface ChartRepository
{
    public function lastPrice($id);

    public function beforeLastPrice($id);

    public function lastPrices(array $ids);

    public function all(array $ids);

    public function get(array $params);
}
