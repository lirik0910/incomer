<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $fillable = ['title', 'description', 'link', 'creatorId', 'categoryId', 'onIndex', 'views'];
    /*
    * Get comments models
    * @return boolean
    */
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
