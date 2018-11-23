<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    protected $fillable = ['category_id', 'title', 'description'];


    /*
     * Get category model
     * @return boolean
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /*
     * Get news models
     * @return boolean
     */
    public function news()
    {
        return $this->hasMany(News::class);
    }
}
