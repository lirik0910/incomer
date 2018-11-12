<?php


namespace App\Repositories\Image;

interface ImageRepository
{
    public function all(array $params);

    public function get($id);

    public function create(array $data);

    public function update($id, array $data);

    public function delete($id);
}