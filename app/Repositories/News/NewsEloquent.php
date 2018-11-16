<?php

namespace App\Repositories\News;

use App\Model\News;
use App\Model\ImageNewsCollection;
use App\Model\VideoNewsCollection;
use App\Model\TagNewsCollection;
use App\Repositories\News\NewsRepository;

class NewsEloquent implements NewsRepository
{
    private $model;

    public function __construct(News $model)
    {
        $this->model = $model;
    }

    public function all(array $params)
    {
        $page = $params['page'] ?? 1;
        $limit = $params['limit'] ?? 10;

        $news = $this->model->with('category')->withCount('comments')->limit($limit)->offset(($page - 1) * $limit);
        return $news->get();
    }

    public function one($id)
    {
        $news = $this->model->with(['category', 'videos', 'images', 'comments', 'tags'])->find($id);

        if (!$news){
            throw new \Exception('News was not found');
        }

        return $news;
    }

    public function create(array $data)
    {
        $images = $data['images'];
        $videos = $data['videos'];
        $tags = $data['tags'];

        unset($data['images'], $data['videos'], $data['tags']);

        $news = $this->model->create($data);

        if(isset($images) && !empty($images)){
            foreach($images as $image){
                $data = [
                    'image_id' => (int)$image,
                    'news_id' => (int)$news['id']
                ];

                ImageNewsCollection::create($data);
            }
        }

        if(isset($videos) && !empty($videos)){
            foreach($videos as $video){
                $data = [
                    'video_id' => (int)$video,
                    'news_id' => (int)$news['id']
                ];

                ImageNewsCollection::create($data);
            }
        }

        if(isset($tags) && !empty($tags)){
            foreach($tags as $tag){
                $data = [
                    'tag_id' => (int)$tag,
                    'news_id' => (int)$news['id']
                ];

                TagNewsCollection::create($data);
            }
        }

        return $this->one($news['id']);
    }

    public function update($id, array $data)
    {
        $news = $this->model->find($id);

        if (!$news){
            throw new \Exception('News was not found');
        }

        $images = $data['images'];
        $videos = $data['videos'];
        $tags = $data['tags'];

        unset($data['images'], $data['videos'], $data['tags']);

        $news->update($data);

        if(isset($images) && !empty($images)){
            foreach($images as $image){

                $item = ImageNewsCollection::where(['news_id'=> $id, 'image_id' => (int)$image])->first();
                if(!$item){
                    $data = [
                        'image_id' => (int)$image,
                        'news_id' => (int)$news['id']
                    ];

                    ImageNewsCollection::create($data);
                }
            }
        }

        if(isset($videos) && !empty($videos)){
            foreach($videos as $video){

                $item = VideoNewsCollection::where(['news_id'=> $id, 'video_id' => (int)$video])->first();
                if(!$item){
                    $data = [
                        'video_id' => (int)$video,
                        'news_id' => (int)$news['id']
                    ];

                    VideoNewsCollection::create($data);
                }
            }
        }

        if(isset($tags) && !empty($tags)){
            foreach($tags as $tag){

                $item = TagNewsCollection::where(['news_id'=> $id, 'tag_id' => (int)$tag])->first();
                if(!$item){
                    $data = [
                        'tag_id' => (int)$tag,
                        'news_id' => (int)$news['id']
                    ];

                    TagNewsCollection::create($data);
                }
            }
        }

        return $this->one($id);
    }

    public function delete($id)
    {
        $news = $this->model->find($id);

        if (!$news){
            return false;
        }

        return $news->delete();
    }
}
