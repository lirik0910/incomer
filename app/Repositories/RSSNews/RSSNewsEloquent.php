<?php

namespace App\Repositories\RSSNews;

use App\Model\RssNews;

class RSSNewsEloquent implements RSSNewsRepository
{
    private $model;

    public function __construct(RssNews $model)
    {
        $this->model = $model;
    }

    public function all(array $params)
    {
        $page = $params['page'] ?? 1;
        $limit = $params['limit'] ?? 10;

        $items = $this->model
            ->with(['persons'])
            ->limit($limit)
//            ->where(['is_visible' => true])
            ->orderBy('pub_date', 'desc')
            ->offset(($page - 1) * $limit);

        return ['data'=>$items->get(), 'total' => $this->model->count()];
    }


    public function get($id)
    {
        $item = $this->model->find($id);
        if (!$item) throw new \Exception('RSS News not found');
        return $item;
    }

    public function create(array $data)
    {
        if ($this->model->where(['title' => $data['title']])->first()) {
            throw new \Exception('RSS News already exists');
        }
        $item = $this->model->create($data);
        return $this->get($item['id']);
    }

    public function update($id, array $data)
    {
        $item = $this->model->find($id);
        if (!$item) throw new \Exception('RSS News not found');

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
