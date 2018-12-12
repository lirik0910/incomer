<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $table = 'comments';

    protected $fillable = [
        'value', 'creator_id', 'commentable_id', 'commentable_type'
    ];
    /*
     * Get news model
     * @return boolean
     */
/*    public function news()
    {
        return $this->morphTo();
    }*/

    public function news()
    {
        return $this->belongsTo(News::class);
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
