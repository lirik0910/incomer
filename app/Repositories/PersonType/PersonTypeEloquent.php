<?php

namespace App\Repositories\PersonType;

use App\Model\PersonType;

class PersonTypeEloquent implements PersonTypeRepository
{
    private $model;

    public function __construct(PersonType $model)
    {
        $this->model = $model;
    }

    public function all(array $params)
    {

        $items = $this->model->with(['fields']);
        return $items->get();
    }


    public function get($id)
    {
        $item = $this->model->with(['fields'])->find($id);
        if (!$item) throw new \Exception('Person Type not found');
        return $item;
    }
}
