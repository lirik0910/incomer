<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class TagNewsCollection extends Model
{
    protected $fillable = ['tag_id', 'news_id'];
}
