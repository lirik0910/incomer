<?php

namespace App\Http\Controllers\Manager;

use Illuminate\Http\Request;
use App\Repositories\Tag\TagRepository;
use App\Http\Controllers\Controller;
use App\Http\Requests\TagCreateRequest;
use App\Http\Requests\TagUpdateRequest;

class TagController extends Controller
{
    private $model;

    public function __construct(TagRepository $model)
    {
        $this->model = $model;
    }

    public function index(Request $request)
    {
        try {
            $params = $request->only(['page', 'filter', 'sort_column', 'sort_direction', 'query', 'limit']);
            $result = $this->model->all($params);

            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function forContent(Request $request)
    {
        try {
            $params['string'] = $request->only(['tagVal']);
            $params['limit'] = 100;
            $result = $this->model->all($params);

            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function store(TagCreateRequest $request)
    {
        try {
            $data = $request->only(['person_id', 'value']);

            $result = $this->model->create($data);

            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function show($id)
    {
        try {
            $result = $this->model->one($id);

            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function update(TagUpdateRequest $request, $id)
    {
        try {
            $data = $request->only(['person_id', 'value']);

            $result = $this->model->update($id, $data);

            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function destroy($id)
    {
        try {
            $result = $this->model->delete($id);

            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function restore($id)
    {
        try {
            $res = $this->model->restore($id);

            return response()->json($res);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function trash($id)
    {
        try {
            $res = $this->model->trash($id);

            return response()->json($res);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }
}
