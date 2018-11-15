<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class News extends Model
{
    use SoftDeletes;

    protected $table = 'news';

    protected $fillable=[
        'categoryId', 'relatedId', 'title', 'description', 'introtext', 'onIndex', 'indexPosition', 'editorId', 'publisherId'
    ];

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

    /*
     * Get comments models
     * @return boolean
     */
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    /*
    * Get tags models
    * @return boolean
    */
    public function tags()
    {
        return $this->hasManyThrough(Tag::class, TagNewsCollection::class);
    }
}
