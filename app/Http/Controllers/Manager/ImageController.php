<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\ImageCreateRequest;
use App\Http\Requests\ImageUpdateRequest;
use App\Repositories\Image\ImageRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ImageController extends Controller
{
    private $model;

    public function __construct(ImageRepository $model)
    {
        $this->model = $model;
    }

    public function index(Request $request)
    {
        try {
            $params = $request->only(['page', 'limit']);
            $res = $this->model->all($params);

            return response()->json($res);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function store(ImageCreateRequest $request)
    {
        try {
            $data = $request->only(['title', 'description']);

            $data['creator_id'] = Auth::user()->id;
            $data['url'] = basename($request->file('image')->store('public/images'));

            $res = $this->model->create($data);

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

    public function update(ImageUpdateRequest $request, $id)
    {
        try {
            $data = $request->only(['title', 'description']);
            if($request->file('image')){
                $data['url'] = basename($request->file('image')->store('public/images'));
            }

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
}
