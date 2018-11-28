<?php


namespace App\Repositories\RSSNews;

interface RSSNewsRepository
{
    public function all(array $params);

    public function get($id);

    public function create(array $data);

    public function update($id, array $data);

    public function delete($id);
}
