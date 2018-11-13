<?php


namespace App\Repositories\News;


interface NewsRepository
{
    public function all(array $params);

    public function one($id);

    public function update($id, array $data);

    public function create(array $data);

    public function delete($id);
}
