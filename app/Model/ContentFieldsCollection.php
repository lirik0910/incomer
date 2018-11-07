<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ContentFieldsCollection extends Model
{
    /*
     * Get content fields model
     * @return
     */
    public function contentField()
    {
        return $this->belongsTo(ContentField::class);
    }

    /*
    * Get content fields model
    * @return
    */
    public function contentType()
    {
        return $this->belongsTo(ContentType::class);
    }
}
