<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PersonType extends Model
{
    public function fields()
    {
        return $this->hasMany('App\Model\PersonTypeField', 'type_id');
    }
}
