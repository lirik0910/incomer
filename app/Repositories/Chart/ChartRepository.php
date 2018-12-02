<?php


namespace App\Repositories\Chart;

interface ChartRepository
{
    public function all(array $ids);

    public function get(array $params);
}
