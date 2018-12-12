<?php

namespace App\Repositories\Person;

use App\Model\Person;
use App\Model\PersonFieldContent;
use App\Model\PersonType;
use App\Model\PersonTypeField;
use App\Model\Tag;
use App\Repositories\Person\PersonRepository;
use App\Helpers\DateFormatter;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;


class PersonEloquent implements PersonRepository
{
    private $model;
    private $fields;
    private $type;

    public function __construct(Person $model, PersonFieldContent $fields)
    {
        $this->model = $model;
        $this->fields = $fields;
    }

    public function all(array $params)
    {
        $page = $params['page'] ?? 1;
        $limit = $params['limit'] ?? 10;

        $items = $this->model
            ->with(['type', 'fields.field_type'])
            ->withTrashed();

        if (!empty($params['sort_column']) && !empty($params['sort_direction'])) {
            switch ($params['sort_column']) {

                default:
                    $items = $items->orderBy($params['sort_column'], $params['sort_direction']);
                    break;
            }
        } else {
            $items->orderBy('name', 'asc');
        }


        if(!empty($params['type_id'])){
            $items->where(['type_id' => $params['type_id']]);
        }

        return [
            'total' => $items->count(),
            'data' => $items->limit($limit)->offset(($page - 1) * $limit)->get(),
        ];
    }

    public function sortList(array $params)
    {
        $page = $params['page'] ?? 1;
        $limit = $params['limit'] ?? 10;
        $type_id = $params['type_id'] ?? 2;

        $items = $this->model->with(['fields', 'fields.field_type'])
            ->where('type_id', $type_id);

        if (!empty($params['sort_by']) && !empty($params['sort_dir'])){
            $items->orderBy($params['sort_by'], $params['sort_dir']);

//            if($page !== 'all'){
//                $limit = ($page - 1) * $limit;
//                $items->limit($limit);
//            }
        } else{
            $items->orderBy('name', 'ASC')->offset(($page - 1) * $limit);
        }

        //return $items->get();
        return $items->simplePaginate($limit);
    }

    public function get($id)
    {
        $item = $this->model
            ->withTrashed()
            ->with(['type', 'fields.field_type'])
            ->find($id);

        if (!$item) throw new \Exception('Person not found');
        return $item;
    }

    public function getForView($id)
    {
        $item = $this->model
            ->withTrashed()
            ->with(['type', 'fields.field_type'])
            ->find($id);

        if (!$item) throw new \Exception('Person not found');
        return $item;
    }

    public function personNews(int $id, array $params = [])
    {
        $limit = 6;
        $page = $params['page'] ?? 1;

        $person = $this->model->find($id);
        if (!$person) throw new \Exception('Person not found');

        $tags = $person->tags()->get();

        //$news = collect([]);
        foreach ($tags as $tag){
            $news = $tag->news()
                ->where('published', true)
                ->orderBy('publish_date', 'DESC')
                ->limit($limit)->offset(($page - 1) * $limit)
                ->simplePaginate($limit);
        }

        return $news;
    }

    public function personRss(int $id, array $params = [])
    {
        $limit = 24;
        $page = $params['page'] ?? 1;

        $person = $this->model->find($id);
        if (!$person) throw new \Exception('Person not found');

        $rss = $person->rss()
            //->where('is_visible', true)
            ->orderBy('pub_date', 'DESC')
            //->groupBy('pub_date')
            ->limit($limit)
            ->offset(($page - 1) * $limit)
            ->simplePaginate($limit);

        return $rss;
    }

    public function create(array $data)
    {
        $fields = json_decode($data['fields'], true);
        unset($data['fields']);

        $item = $this->model->create($data);

        if(!empty($item)){
            Tag::create([
                'person_id' => $item['id'],
                'value' => strtoupper($item['name'])
            ]);
        }

        $fieldsData = [];
        foreach ($fields as $key => $field){
            $fieldsData[] = [
                'person_id' => $item['id'],
                'field_id' => $field['field_id'],
                'value' => $field['value']
            ];
        }
        $this->fields->insert($fieldsData);

        return $this->get($item['id']);
    }

    public function update($id, array $data)
    {
        $item = $this->model->find($id);
        if (!$item) throw new \Exception('Person not found');
        $item->update($data);

        $fields = json_decode($data['fields'], true);
        unset($data['fields']);

        foreach ($fields as $field){
            $old = $this->fields
                ->where(['person_id' => $id, 'field_id' => $field['field_id']])
                ->first();

            if(!empty($old)){
                $old->update(['value' => $field['value']]);
            } else {
                $this->fields->create([
                    'person_id' => $id,
                    'field_id' => $field['field_id'],
                    'value' => $field['value']
                ]);
            }
        }

        return $this->get($id);
    }

    public function search(array $params)
    {
        $text = $params['searchText'] ?? '';

        $persons = $this->model::where('name', 'ilike', '%' . $text . '%')->with('fields', 'type')->get();

        return $persons;
    }

    public function delete($id)
    {
        $item = $this->model->find($id);
        if ($item === NULL) return false;

        return $item->delete();
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
