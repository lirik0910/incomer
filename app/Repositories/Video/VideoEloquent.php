<?php

namespace App\Repositories\Video;

use App\Model\Video;

class VideoEloquent implements VideoRepository
{
    private $model;

    public function __construct(Video $model)
    {
        $this->model = $model;
    }

    public function all(array $params)
    {
        $page = $params['page'] ?? 1;
        $limit = $params['limit'] ?? 10;

        $items = $this->model->limit($limit)->offset(($page - 1) * $limit);
        return $items->get();
    }

    public function get($id)
    {
        $item = $this->model->find($id);
        if (!$item) throw new \Exception('Video not found');
        return $item;
    }

    public function create(array $data)
    {
        if ($this->model->where(['link' => $data['link']])->first()) {
            throw new \Exception('Video already exists');
        }
        $item = $this->model->create($data);
        return $this->get($item['id']);
    }

    public function update($id, array $data)
    {
        $item = $this->model->find($id);
        if (!$item) throw new \Exception('Video not found');

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