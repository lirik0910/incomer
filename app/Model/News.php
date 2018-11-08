<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    /*
     * Get category model
     * @return boolean
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /*
    * Get videos models
    * @return boolean
    */
    public function videos()
    {
        return $this->hasManyThrough(Video::class, VideoNewsCollection::class);
    }

    /*
    * Get images models
    * @return boolean
    */
    public function images()
    {
        return $this->hasManyThrough(Image::class, ImageNewsCollection::class);
    }
}
