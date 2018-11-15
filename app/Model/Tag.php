<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tag extends Model
{
    use SoftDeletes;

    protected $table = 'tags';

    protected $fillable=[
        'personId', 'value'
    ];

    /*
     * Get Rss news models
     * @return boolean
     */
    public function rss()
    {
        return $this->hasManyThrough(RssNews::class, TagRssCollection::class);
    }

    /*
    * Get news models
    * @return boolean
    */
    public function news()
    {
        return $this->hasManyThrough(News::class, TagNewsCollection::class);
    }

    /*
     * Get person model
     * @return boolean
     */
    public function person()
    {
        return $this->belongsTo(Person::class);
    }
}
