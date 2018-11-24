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

        $topNews = $news->whereIn('type', ['top', 'category_top'])->all();

        foreach($topNews as $topItem){
            $pattern = explode('.', $topItem->preview_pattern);

            switch ($pattern[0]){
                case 'first':
                    $img = $images->where('title', 'man2.png')->first();
                    break;
                case 'second':
                case 'third':
                    if($pattern[1] === 'small_img_top'){
                        $img = $images->where('title', 'car.png')->first();
                    } else{
                        $img = $images->where('title', 'man.png')->first();
                    }
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
