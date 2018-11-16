<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\VideoCreateRequest;
use App\Http\Requests\VideoUpdateRequest;
use App\Repositories\Video\VideoRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VideoController extends Controller
{
    private $model;

    public function __construct(VideoRepository $model)
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

    public function store(VideoCreateRequest $request)
    {
        try {
            $data = $request->only(['title', 'description', 'link', 'category_id', 'onIndex']);
            $data['creatorId'] = Auth::user()->id;

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

    public function update(VideoUpdateRequest $request, $id)
    {
        try {
            $data = $request->only(['title', 'description', 'link', 'category_id', 'onIndex']);

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
