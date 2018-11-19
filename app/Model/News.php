<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class News extends Model
{
    use SoftDeletes;

    protected $table = 'news';

    protected $fillable=[
        'category_id', 'section_id', 'related_id', 'creator_id', 'title', 'description', 'introtext', 'on_index_top', 'index_top_position', 'editor_id', 'publisher_id'
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
    * Get section model
    * @return boolean
    */
    public function section()
    {
        return $this->belongsTo(Section::class);
    }

    /*
    * Get videos models
    * @return boolean
    */
    public function videos()
    {
        return $this->belongsToMany(Video::class, 'video_news_collections');
    }

    /*
    * Get images models
    * @return boolean
    */
    public function images()
    {
        return $this->belongsToMany(Image::class, 'image_news_collections');
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
        return $this->belongsToMany(Tag::class, 'tag_news_collections');
    }
}
