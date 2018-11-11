<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';

    public function actions() {
        return $this->belongsToMany('App\Model\Action', 'roles_actions', 'role_id', 'action_id');

    }
}
