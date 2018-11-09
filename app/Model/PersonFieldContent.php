<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PersonFieldContent extends Model
{
    public function field_type()
    {
        return $this->belongsTo('App\Model\PersonTypeField', 'fieldId');
    }
}
