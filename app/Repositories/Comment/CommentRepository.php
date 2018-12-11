<?php

namespace App\Repositories\Comment;

interface CommentRepository
{
    public function store(array $data);

    public function delete($id);

    public function all($postId);

    public function one($id);
}
