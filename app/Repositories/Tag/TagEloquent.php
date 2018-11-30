<?php

namespace App\Repositories\Tag;

use App\Model\Tag;
use App\Model\TagRssCollection;
use App\Repositories\Tag\TagRepository;

class TagEloquent implements TagRepository
{
    private $model;

    public function __construct(Tag $model)
    {
        $this->model = $model;
    }

    public function all(array $params)
    {
        $page = $params['page'] ?? 1;
        $limit = $params['limit'] ?? 10;
        $string = $params['string'] ?? FALSE;

        $items = $this->model
            ->with('person')
            ->limit($limit)
            ->withTrashed()
            ->offset(($page - 1) * $limit);

        if($string){
            $items = $items->where('value', 'LIKE', "%$string%");
        }

        if (!empty($params['sort_column']) && !empty($params['sort_direction'])) {
            switch ($params['sort_column']) {
                case 'person':
                    $items = $items
                        ->join('persons', 'persons.id', '=', 'tags.person_id')
                        ->orderBy('persons.name', $params['sort_direction']);
                    break;



                default:
                    $items = $items->orderBy($params['sort_column'], $params['sort_direction']);
                    break;
            }
        }
        $items->orderBy('id', 'asc');

        return ['data' => $items->get(), 'total' => $items->count()];
    }

    public function one($id)
    {
        $res = $this->model->with(['person'])->withTrashed()->find($id);

        if (!$res){
            throw new \Exception('Tags was not found');
        }

        return $res;
    }

    public function create(array $data)
    {
        $res = $this->model->create($data);

        return $this->one($res['id']);
    }

    public function update($id, array $data)
    {
        $res = $this->model->withTrashed()->find($id);

        if (!$res){
            throw new \Exception('Tags was not found');
        }

        $res->update($data);

        return $this->one($id);
    }

    public function delete($id)
    {
        $res = $this->model->find($id);

        if (!$res){
            return false;
        }

        return $res->delete();
    }

    public function restore($id)
    {
        $item = $this->model->withTrashed()->find($id);
        if ($item === NULL) return false;

        return $item->restore();
    }

    public function trash($id)
    {
        $item = $this->model->withTrashed()->find($id);
        if ($item === NULL) return false;

        return $item->forceDelete();
    }

    public function trashAll()
    {
        return $this->model->history()->forceDelete();
    }
}
