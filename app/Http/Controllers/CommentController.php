<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\Comment\CommentRepository;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    private $model;

    public function __construct(CommentRepository $model)
    {
        $this->model = $model;
    }

    public function create(Request $request)
    {
        $data['value'] = $request->get('value');
        $data['commentable_id'] = $request->get('commentable_id');
        $data['commentable_type'] = 'news';



        $data['creator_id'] = Auth::user()->id;

        var_dump($data); die;

        $comment = $this->model->store($data);

        return $comment;
    }
}
