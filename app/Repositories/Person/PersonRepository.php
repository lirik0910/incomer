<?php


namespace App\Repositories\Person;

interface PersonRepository
{
    public function all(array $params);

    public function get($id);

    public function create(array $data);

    public function update($id, array $data);

    public function delete($id);
}