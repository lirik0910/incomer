<?php

namespace App\Repositories\Person;

use App\Model\Person;
use App\Model\PersonFieldContent;
use App\Model\PersonType;
use App\Model\PersonTypeField;
use App\Repositories\Person\PersonRepository;

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
            ->withTrashed()
            ->with(['type', 'fields.field_type'])
            ->limit($limit)
            ->offset(($page - 1) * $limit);

        return $items->get();
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

    public function create(array $data)
    {
        $fields = json_decode($data['fields'], true);
        unset($data['fields']);

        $item = $this->model->create($data);
        foreach ($fields as $key => $field){
            $fields[$key]['person_id'] = $item['id'];
        }
        $this->fields->insert($fields);

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
            $this->fields
                ->where(['person_id' => $id, 'field_id' => $field['field_id']])
                ->update(['value' => $field['value']]);
        }

        return $this->get($id);

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
