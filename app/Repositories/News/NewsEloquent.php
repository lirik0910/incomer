<?php

namespace App\Repositories\News;

use App\Model\News;
use App\Model\ImageNewsCollection;
use App\Model\VideoNewsCollection;
use App\Model\TagNewsCollection;
use App\Repositories\News\NewsRepository;
use Carbon\Carbon;

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

        $items = $this->model
            ->with('category', 'section')
            ->withCount('comments')
            ->limit($limit)
            ->offset(($page - 1) * $limit);
        $total = $this->model->count();

        if (!empty($params['sort_column']) && !empty($params['sort_direction'])) {
            switch ($params['sort_column']) {
                case 'category':
                    $items = $items
                        ->join('categories', 'categories.id', '=', 'news.category_id')
                        ->orderBy('categories.title', $params['sort_direction']);
                    break;

                    
                default:
                    $items = $items->orderBy($params['sort_column'], $params['sort_direction']);
                    break;
            }
        }
        $items->orderBy('id', 'desc');

        return ['data' => $items->get(), 'total' => $total];
    }

    public function hot(array $params)
    {
        $page = $params['page'] ?? 1;
        $limit = $params['limit'] ?? 10;


        $news = $this->model::where(['published' => true, 'type' => 'hot'])
            ->with(['images'])
            ->withCount('comments')
            ->offset($limit * ($page - 1))
            //->limit(4)
            ->orderBy('created_at', 'DESC')
            ->simplePaginate($limit);

        return $news;
    }

    public function current()
    {
        $limit = 5;

        $news = $this->model::where(['published' => true, 'type' => 'normal'])->orderBy('publish_date', 'DESC')->limit($limit);
        return $news->get();
    }

    public function indexTop()
    {
        $news = $this->model::where(['published' => true, 'type' => 'top'])->withCount('comments')->orderBy('preview_pattern', 'ASC');
        return $news->get();
    }


    public function one(int $id)
    {
        $news = $this->model->with(['category', 'section', 'videos', 'images', 'comments', 'tags'])->withCount('comments')->find($id);

        if (!$news) {
            throw new \Exception('News was not found');
        }

        return $news;
    }

    public function search(array $params)
    {
        $text = $params['searchText'] ?? '';

        $news = $this->model::where('title', 'ilike', '%' . $text .'%')->orWhere('description', 'ilike', '%' . $text .'%')->get();

        return $news;
    }

    public function create(array $data)
    {
        $images = isset($data['images']) ?? '';
        $videos = isset($data['videos']) ?? '';
        $tags = isset($data['tags']) ?? '';

        unset($data['images'], $data['videos'], $data['tags']);

        $news = $this->model->create($data);

        if (isset($images) && !empty($images)) {
            foreach ($images as $image) {
                $data = [
                    'image_id' => (int)$image,
                    'news_id' => (int)$news['id']
                ];

                ImageNewsCollection::create($data);
            }
        }

        if (isset($videos) && !empty($videos)) {
            foreach ($videos as $video) {
                $data = [
                    'video_id' => (int)$video,
                    'news_id' => (int)$news['id']
                ];

                ImageNewsCollection::create($data);
            }
        }

        if (isset($tags) && !empty($tags)) {
            foreach ($tags as $tag) {
                $data = [
                    'tag_id' => (int)$tag,
                    'news_id' => (int)$news['id']
                ];

                TagNewsCollection::create($data);
            }
        }

        return $this->one($news['id']);
    }

    public function update(int $id, array $data)
    {
        $news = $this->model->find($id);

        if (!$news) {
            throw new \Exception('News was not found');
        }

        $images = isset($data['images']) ?? '';
        $videos = isset($data['videos']) ?? '';
        $tags = isset($data['tags']) ?? '';

        unset($data['images'], $data['videos'], $data['tags']);

        if ($data['published'] && !$news->published) {
            $data['publisher_id'] = $data['editor_id'];
            $data['publish_date'] = now();
        }

        $news->update($data);

        if (isset($images) && !empty($images)) {
            foreach ($images as $image) {

                $item = ImageNewsCollection::where(['news_id' => $id, 'image_id' => (int)$image])->first();
                if (!$item) {
                    $data = [
                        'image_id' => (int)$image,
                        'news_id' => (int)$news['id']
                    ];

                    ImageNewsCollection::create($data);
                }
            }
        }

        if (isset($videos) && !empty($videos)) {
            foreach ($videos as $video) {

                $item = VideoNewsCollection::where(['news_id' => $id, 'video_id' => (int)$video])->first();
                if (!$item) {
                    $data = [
                        'video_id' => (int)$video,
                        'news_id' => (int)$news['id']
                    ];

                    VideoNewsCollection::create($data);
                }
            }
        }

        if (isset($tags) && !empty($tags)) {
            foreach ($tags as $tag) {

                $item = TagNewsCollection::where(['news_id' => $id, 'tag_id' => (int)$tag])->first();
                if (!$item) {
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

    public function updateViews(int $id)
    {
        $news = $this->one($id);

        $news->views = (int)$news->views + 1;

        $news->save();

        return $news->views;
    }

    public function delete(int $id)
    {

        $news = $this->model->find($id);

        if (!$news) {
            return false;
        }

        return $news->delete();
    }

    public function restore(int $id)
    {
        $item = $this->model->withTrashed()->find($id);
        if ($item === NULL) return false;

        return $item->restore();
    }

    public function trash(int $id)
    {
        $item = $this->model->withTrashed()->find($id);
        if ($item === NULL) return false;

        return $item->forceDelete();
    }

    public function trashAll()
    {
        return $this->model->history()->forceDelete();
    }
}
