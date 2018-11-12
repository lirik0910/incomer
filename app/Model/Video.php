<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $fillable = ['title', 'description', 'url', 'creator_id'];
    /*
    * Get comments models
    * @return boolean
    */
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
