<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ImageNewsCollection extends Model
{
    protected $fillable = ['type', 'image_id', 'news_id'];

}
