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

    }

    public function one($id)
    {

    }

    public function delete($id)
    {

    }

    public function all($postId)
    {

    }

}
