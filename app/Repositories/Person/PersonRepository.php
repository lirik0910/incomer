<?php


namespace App\Repositories\Person;

interface PersonRepository
{
    public function all(array $params);

    public function get($id);

    public function create(array $data);

    public function update($id, array $data);

    public function sortList(array $params);

    public function search(array $params);

    public function delete($id);

    public function restore($id);

    public function trash($id);

    public function trashAll();
}
