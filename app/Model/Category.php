<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /*
     * Get news models
     * @return boolean
     */
    public function news()
    {
        return $this->hasMany(News::class);
    }

    /*
    * Get videos models
    * @return boolean
    */
    public function videos()
    {
        return $this->hasMany(Video::class);
    }

    /*
    * Get images models
    * @return boolean
    */
    public function images()
    {
        return $this->hasMany(Image::class);
    }
}
