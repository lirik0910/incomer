<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Repositories\User\UserRepository;
use Illuminate\Http\Request;

class USerController extends Controller
{
    private $model;

    public function __construct(UserRepository $model)
    {
        $this->model = $model;
    }

    public function index(Request $request)
    {
        try {
            $params = $request->only(['page', 'limit', 'sort_column', 'sort_direction', 'query']);
            $res = $this->model->all($params);

            return response()->json($res);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function store(UserCreateRequest $request)
    {
        try {
            $data = $request->only(['username', 'patronymic', 'password', 'email', 'first_name', 'last_name', 'phone', 'country', 'type']);
            $data['type'] = !empty($data['type']) ? $data['type'] : 'manager';

            $res = $this->model->create($data);
            $res->createToken('MyApp');

            return response()->json($res);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function show($id)
    {
        try {
            $res = $this->model->get($id);

            return response()->json($res);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function update(UserUpdateRequest $request, $id)
    {
        try {
            $data = $request->only(['password', 'type', 'patronymic', 'username', 'first_name', 'last_name', 'phone', 'country']);
            $res = $this->model->update($id, $data);

            return response()->json($res);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function destroy($id)
    {
        try {
            $res = $this->model->delete($id);

            return response()->json($res);
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
