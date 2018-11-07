<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ContentContent extends Model
{
    /*
     * Get content model
     * @return boolean
     */
    public function content()
    {
        return $this->belongsTo(Content::class);
    }

    /*
    * Get content model
    * @return boolean
    */
    public function contentField()
    {
        return $this->belongsTo(ContentField::class);
    }
}
