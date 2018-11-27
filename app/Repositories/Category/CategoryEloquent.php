<?php

namespace App\Repositories\Category;

use App\Model\Category;

class CategoryEloquent implements CategoryRepository
{
    private $model;

    public function __construct(Category $model)
    {
        $this->model = $model;
    }

    public function all(array $params)
    {

        $items = $this->model;
        return $items->get();
    }


    public function get($id)
    {
        $item = $this->model->find($id);
        if (!$item) throw new \Exception('Category not found');
        return $item;
    }

    public function create(array $data)
    {
        if ($this->model->where(['title' => $data['title']])->first()) {
            throw new \Exception('Category already exists');
        }
        $item = $this->model->create($data);
        return $this->get($item['id']);
    }

    public function update($id, array $data)
    {
        $item = $this->model->find($id);
        if (!$item) throw new \Exception('Category not found');

        $item->update($data);
        return $this->get($id);

    }

    public function delete($id)
    {
        $item = $this->model->find($id);
        if ($item === NULL) return false;

        return $item->delete();
    }

}