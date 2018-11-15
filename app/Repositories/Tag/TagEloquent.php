<?php

namespace App\Repositories\Tag;

use App\Model\Tag;
use App\Model\TagNewsCollection;
use App\Model\TagRssCollection;
use App\Repositories\Tag\TagRepository;

class TagEloquent implements TagRepository
{
    private $model;

    public function __construct(Tag $model)
    {
        $this->model = $model;
    }

    public function all(array $params)
    {
        $page = $params['page'] ?? 1;
        $limit = $params['limit'] ?? 10;
        $string = $params['string'] ?? '';

        if(!$string){
            $res = $this->model->with('person')->limit($limit)->offset(($page - 1) * $limit);
        } else{
            $res = $this->model->where('value', 'LIKE', "%$string%")->with('person');
        }

        return $res->get();
    }

    public function one($id)
    {
        $res = $this->model->with(['person', 'news', 'rss'])->find($id);

        if (!$res){
            throw new \Exception('Tags was not found');
        }

        return $res;
    }

    public function create(array $data)
    {
        $res = $this->model->create($data);

        return $this->one($res['id']);
    }

    public function update($id, array $data)
    {
        $res = $this->model->find($id);

        if (!$res){
            throw new \Exception('Tags was not found');
        }

        $res->update($data);

        return $this->one($id);
    }

    public function delete($id)
    {
        $res = $this->model->find($id);

        if (!$res){
            return false;
        }

        return $res->delete();
    }
}
