<?php


namespace App\Repositories\News;


interface NewsRepository
{
    public function all(array $params);

    public function hot(array $params);

    public function current(array $params);

    public function indexTop();

    public function categoryTop(int $categoryId);

    public function withPatterns();

    public function tagsRelatedNews(int $id);

    public function categoryRelatedNews(int $id);

    public function one(int $id);

    public function search(array $params);

    public function update(int $id, array $data);

    public function updateViews(int $id);

    public function create(array $data);

    public function delete(int $id);

    public function restore(int $id);

    public function trash(int $id);

    public function trashAll();
}
