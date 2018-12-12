<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /*
     * Get news model
     * @return boolean
     */
    public function news()
    {
        return $this->morphTo();
    }

    /*
    * Get news model
    * @return boolean
    */
    public function videos()
    {
        return $this->morphedByMany(News::class, 'commentable');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }
}
