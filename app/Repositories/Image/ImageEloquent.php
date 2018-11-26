<?php

namespace App\Repositories\Image;

use App\Model\Image;

class ImageEloquent implements ImageRepository
{
    private $model;

    public function __construct(Image $model)
    {
        $this->model = $model;
    }

    public function all(array $params)
    {
        $page = $params['page'] ?? 1;
        $limit = $params['limit'] ?? 10;

        $items = $this->model->limit($limit)->offset(($page - 1) * $limit);

        return ['data'=> $items->get(), 'total' => $this->model->count()];
    }

    public function get($id)
    {
        $item = $this->model->find($id);
        if(!$item) throw new \Exception('Image not found');
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
        if(!$item) throw new \Exception('Image not found');

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