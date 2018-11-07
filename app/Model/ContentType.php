<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ContentType extends Model
{
    /*
     * Get contents model
     * @return boolean
     */
    public function contents()
    {
        return $this->hasMany(Content::class);
    }

    /*
     * Get content fields collections model
     * @return
     */
    public function contentFieldCollections()
    {
        return $this->hasMany(ContentFieldsCollection::class);
    }
}
