<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /*
     * Get news model
     * @return boolean
     */
    public function commentable()
    {
        return $this->morphTo();
    }


}
