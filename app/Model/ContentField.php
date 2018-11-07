<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ContentField extends Model
{
    /*
    * Get content fields collections model
    * @return
    */
    public function contentFieldCollections()
    {
        return $this->hasMany(ContentFieldsCollection::class);
    }
}
