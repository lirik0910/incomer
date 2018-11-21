<?php

use Illuminate\Database\Seeder;

class ImageNewsCollectionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
         *  Get news objects
         */
        $news = \App\Model\News::all();

        /*
         * Get images objecs
         */
        $images = \App\Model\Image::all();

        /*
         * Add top news preview
         */

        $topNews = $news->whereNotIn('index_top_position', ['null', false, 'NULL'])->all();

        foreach($topNews as $topItem){
            switch ($topItem->index_top_position){
                case 'first':
                    $img = $images->where('title', 'man2.png')->first();
                    break;
                case 'second':
                    $img = $images->where('title', 'car.png')->first();
                    break;
                case 'third':
                    $img = $images->where('title', 'man.png')->first();
                    break;
                default:
                    //$img = $images->whereIn('title', ['photo-dark.jpg', 'photo-light.jpg'])->random();
                    break;
            }
            App\Model\ImageNewsCollection::create([
                'image_id' => $img->id,
                'news_id' => $topItem->id,
                'type' => 'top_preview',
            ]);
        }

        /*
         * Add simple preview
         */
        foreach ($news as $oneNews){
            $image = $images->whereIn('title', ['photo-dark.jpg', 'photo-light.jpg'])->random();

            App\Model\ImageNewsCollection::create([
                'image_id' => $image->id,
                'news_id' => $oneNews->id,
                'type' => 'preview',
            ]);
        }
    }
}
