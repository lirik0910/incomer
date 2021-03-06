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
            $params = $request->only(['page', 'limit', 'search']);
            $res = $this->model->all($params);

            return response()->json($res);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function store(ImageCreateRequest $request)
    {
        try {
            $data = $request->only(['title', 'description', 'path', 'category_id']);
            $data['path'] = '';
//            $data['path'] = $data['path'] ? ltrim(rtrim($data['path'],'/'),'/'): '';
//            $data['path'] = '/' .  $data['path'];
            $data['creator_id'] = Auth::user()->id;
            $data['url'] = '/storage/'.$request->file('image')->store('images/images_content');

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
            $item = $this->model->get($id);

            $data = $request->only(['title', 'description', 'category_id', 'path']);

            if($request->file('image')){
//                $data['path'] = $item['path'] ? ltrim(rtrim($item['path'],'/'),'/'): '';
//                $data['path'] = '/' .  $data['path'];

                $data['url'] = '/storage/'.$request
                        ->file('image')
                        ->storeAs('images/images_content', basename($item['url']));
            } else {
                unset($data['path']);
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
