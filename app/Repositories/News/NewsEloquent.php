<?php

namespace App\Repositories\News;

use App\Model\News;
use App\Repositories\News\NewsRepository;

class NewsEloquent implements NewsRepository
{
    private $model;

    public function __construct(News $model)
    {
        $this->model = $model;
    }

    public function all(array $params)
    {
        $page = $params['page'] ?? 1;
        $limit = $params['limit'] ?? 10;

        $news = $this->model->with('category')->withCount('comments')->limit($limit)->offset(($page - 1) * $limit);
        return $news->get();
    }

    public function one($id)
    {
        $news = $this->model->with(['category', 'videos', 'images', 'comments'])->find($id);

        if (!$news){
            throw new \Exception('News was not found');
        }

        return $news;
    }

    public function create(array $data)
    {
        $news = $this->model->create($data);

        return $this->one($news['id']);
    }

    public function update($id, array $data)
    {
        $news = $this->model->find($id);

        if (!$news){
            throw new \Exception('News was not found');
        }

        $news->update($data);

        return $this->one($id);
    }

    public function delete($id)
    {
        $news = $this->model->find($id);

        if (!$news){
            return false;
        }

        return $news->delete();
    }
}
