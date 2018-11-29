<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class RssNews extends Model
{

    protected $fillable = ['is_visible', 'is_used'];
    /*
     * Get tags models
     * @return boolean
     */
    public function persons()
    {
        return $this->hasManyThrough(
            Person::class,
            PersonRssCollection::class,
            'rss_id',
            'id',
            'id',
            'person_id');
    }

}
