<?php

namespace App\Repositories\Comment;

use App\Model\Comment;

class CommentEloquent implements CommentRepository
{
    private $model;


    public function __construct(Comment $model)
    {
        $this->model = $model;
    }

    public function store(array $data)
    {
        $res = $this->model->create($data);

        return $this->one($res['id']);
    }

    public function one($id)
    {
        $res = $this->model->with(['user'])->find($id);

        if (!$res){
            throw new \Exception('Tags was not found');
        }

        return $res;
    }

    public function delete($id)
    {
        $res = $this->model->find($id);

        if (!$res){
            return false;
        }

        return $res->delete();
    }

    public function all($postId)
    {

    }

}
