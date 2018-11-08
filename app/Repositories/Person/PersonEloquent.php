<?php

namespace App\Repositories\Person;

use App\Model\Person;
use App\Repositories\Person\PersonRepository;

class PersonEloquent implements PersonRepository
{
    private $model;

    public function __construct(Person $model)
    {
        $this->model = $model;
    }

    public function all(array $params)
    {
        $page = $params['page'] ?? 1;
        $limit = $params['limit'] ?? 10;

        $items = $this->model->with('type')->limit($limit)->offset(($page - 1) * $limit);
        return $items->get();
    }

    public function get($id)
    {
        $item = $this->model->with('type')->find($id);
        if(!$item) throw new \Exception('Person not found');
        return $item;
    }

    public function create(array $data)
    {
        $item = $this->model->create($data);
        return $this->get($item['id']);
    }

    public function update($id, array $data)
    {
        $item = $this->model->find($id);
        if(!$item) throw new \Exception('Person not found');
        $item->update($data);
        return $this->get($id);

    }

    public function delete($id)
    {
        $product = $this->model->find($id);
        if ($product === NULL) return false;

        return $product->delete();
    }

}