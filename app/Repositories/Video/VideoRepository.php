<?php


namespace App\Repositories\Video;

interface VideoRepository
{
    public function all(array $params);

    public function index();

    public function get($id);

    public function create(array $data);

    public function update($id, array $data);

    public function delete($id);
}
