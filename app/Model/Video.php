<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    /*
    * Get comments models
    * @return boolean
    */
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
