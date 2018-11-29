<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PersonFieldContent extends Model
{
    protected $fillable=['person_id', 'field_id', 'value'];

    public function field_type()
    {
        return $this->belongsTo('App\Model\PersonTypeField', 'field_id');
    }
}
