<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Person extends Model
{
    use SoftDeletes;

    protected $table = 'persons';

    protected $fillable=[
        'name', 'typeId'
    ];

    public function type()
    {
        return $this->belongsTo('App\Model\PersonType', 'typeId');
    }

    public function fields()
    {
        return $this->hasMany('App\Model\PersonFieldContent', 'personId');
    }

    /*
     * Get tags models
     * @return boolean
     */
    public function tags()
    {
        return $this->hasMany(Tag::class);
    }
}
