<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tag extends Model
{
    use SoftDeletes;

    protected $table = 'tags';

    protected $fillable=[
        'person_id', 'value'
    ];



    /*
    * Get news models
    * @return boolean
    */
    public function news()
    {
        return $this->belongsToMany(News::class, 'tag_news_collections');
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
