<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class News extends Model
{
    use SoftDeletes;

    protected $table = 'news';

    protected $fillable=[
        'category_id', 'section_id', 'related_id', 'creator_id', 'title', 'subtitle', 'description', 'introtext', 'preview_pattern', 'type', 'preview_pattern', 'editor_id', 'publisher_id', 'published', 'publish_date'
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
     * Get user model
     * @return boolean
     */
    public function creator()
    {
        return $this->belongsTo(User::class);
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
        return $this->belongsToMany(Image::class, 'image_news_collections')->withPivot('type');
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
