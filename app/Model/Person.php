<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Person extends Model
{
    use SoftDeletes;

    protected $table = 'persons';

    protected $fillable=[
        'name', 'type_id'
    ];

    public function type()
    {
        return $this->belongsTo('App\Model\PersonType', 'type_id');
    }

    public function fields()
    {
        return $this->hasMany('App\Model\PersonFieldContent', 'person_id');
    }

    /*
     * Get tags models
     * @return boolean
     */
    public function tags()
    {
        return $this->hasMany(Tag::class);
    }

    /*
 * Get Rss news models
 * @return boolean
 */
    public function rss()
    {
        return $this->hasManyThrough(RssNews::class, PersonRssCollection::class);
    }
}
