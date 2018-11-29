<?php


namespace App\Repositories\PersonType;

interface PersonTypeRepository
{
    public function all(array $params);

    public function get($id);
}
