<?php

namespace App\Repositories\User;

use App\Model\User;
use Illuminate\Support\Facades\Hash;

class UserEloquent implements UserRepository
{
    private $model;

    public function __construct(User $model)
    {
        $this->model = $model;
    }

    public function all(array $params)
    {
        $page = $params['page'] ?? 1;
        $limit = $params['limit'] ?? 10;

        $items = $this->model
            ->limit($limit)
            ->withTrashed()
            ->offset(($page - 1) * $limit)
            ->where("type", '!=', 'admin');
        $total = $this->model->count();

        if(!empty($params['sort_column']) && !empty($params['sort_direction'])){
            $items = $items->orderBy($params['sort_column'], $params['sort_direction']);
        }
        $items->orderBy('id', 'desc');

        return ['data' => $items->get(), 'total' => $total];
    }

    public function get($id)
    {
        $item = $this->model->find($id);
        if(!$item) throw new \Exception('User not found');
        return $item;
    }

    public function create(array $data)
    {
        $user = $this->model->where(['email' => $data['email']])->first();
        if($user) throw new \Exception('Email already exists');

        $data['password'] = Hash::make($data['password']);
        $item = $this->model->create($data);
        return $this->get($item['id']);
    }

    public function update($id, array $data)
    {
        $item = $this->model->find($id);
        if(!$item) throw new \Exception('User not found');
        if(!empty($data['password'])) $data['password'] = Hash::make($data['password']);

        $item->update($data);
        return $this->get($id);

    }

    public function restore(int $id)
    {
        $item = $this->model->withTrashed()->find($id);
        if ($item === NULL) return false;

        return $item->restore();
    }

    public function trash(int $id)
    {
        $item = $this->model->withTrashed()->find($id);
        if ($item === NULL) return false;

        return $item->forceDelete();
    }

    public function delete($id)
    {
        $product = $this->model->find($id);
        if ($product === NULL) return false;

        return $product->delete();
    }

}