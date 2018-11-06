<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
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
     * Get content type model
     * @return boolean
     */
    public function type()
    {
        return $this->belongsTo(ContentType::class);
    }

    /*
     * Get content content model
     * @return boolean
     */
    public function contents()
    {
        return $this->hasMany(ContentContent::class);
    }

    /*
     * Get comments model
     * @return boolean
     */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
