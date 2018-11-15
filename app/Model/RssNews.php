<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class RssNews extends Model
{
    /*
     * Get tags models
     * @return boolean
     */
    public function tags()
    {
        return $this->hasManyThrough(Tag::class, TagRssCollection::class);
    }
}
