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
        $data['value'] = $request->get('content');
        $data['commentable_type'] = 'news';

        var_dump($_SERVER); die;

        $data['creator_id'] = Auth::user()->id;

        $comment = $this->model->store($data);

        return $comment;
    }
}
