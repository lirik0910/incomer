<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\User\UserRepository;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    private $model;

    public function __construct(UserRepository $model)
    {
        $this->model = $model;
    }

    public function update(Request $request)
    {
        $data = $request->all();

        if(!Auth::user()){
            abort(404);
        }

        $id = Auth::user()->id;

        $data['birthday'] = date('Y-m-d G:i:s', mktime(0,0,0, (int)$data['month'], (int)$data['day'], (int)$data['year']));

        $user = $this->model->update($id, $data);

        return response()->json($user, 200);
    }

    public function setLogo(Request $request)
    {
        $logo = $request->all();

        var_dump($logo); die;
    }
}
