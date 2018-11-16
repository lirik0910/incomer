<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = ['title', 'description', 'url', 'path', 'creator_id', 'category_id'];
}
