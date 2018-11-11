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

        $items = $this->model
            ->withTrashed()
            ->with(['type', 'fields.field_type'])
            ->limit($limit)
            ->offset(($page - 1) * $limit);

        return $items->get();
    }

    public function get($id)
    {
        $item = $this->model
            ->withTrashed()
            ->with(['type', 'fields.field_type'])
            ->find($id);

        if (!$item) throw new \Exception('Person not found');
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
        if (!$item) throw new \Exception('Person not found');
        $item->update($data);
        return $this->get($id);

    }

    public function delete($id)
    {
        $item = $this->model->find($id);
        if ($item === NULL) return false;

        return $item->delete();
    }

    public function restore($id)
    {
        $item = $this->model->withTrashed()->find($id);
        if ($item === NULL) return false;

        return $item->restore();
    }

    public function trash($id)
    {
        $item = $this->model->withTrashed()->find($id);
        if ($item === NULL) return false;

        return $item->forceDelete();
    }

    public function trashAll()
    {
        return $this->model->history()->forceDelete();
    }
}