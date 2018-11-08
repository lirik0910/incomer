<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
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


}
