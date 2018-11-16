<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $fillable = ['title', 'description', 'link', 'creator_id', 'category_id', 'on_index', 'views'];
    /*
    * Get comments models
    * @return boolean
    */
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
