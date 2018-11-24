<?php

use Illuminate\Database\Seeder;

class NewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
         * Get categories objects
         */
        //$categories = App\Model\Category::all();

        //factory(\App\Model\News::class, 10)->create()->make();

        App\Model\News::create([
            'category_id' => 1,
            'title' => 'Главная новость номер один',
            'subtitle' => 'Подзаголовок',
            'description' => str_random(500),
            'introtext' => str_random(255),
            'creator_id' => 1,
            'type' => 'top',
            'preview_pattern' => 'first.big_img_left',
            'publisher_id' => 1,
            'publish_date' => now(),
            'published' => true,
        ]);

        App\Model\News::create([
            'category_id' => 2,
            'title' => 'Главная новость номер два',
            'subtitle' => 'Подзаголовок',
            'description' => str_random(500),
            'introtext' => str_random(255),
            'creator_id' => 1,
            'type' => 'top',
            'preview_pattern' => 'second.small_img_top',
            'publisher_id' => 1,
            'publish_date' => now(),
            'published' => true,
        ]);

        App\Model\News::create([
            'category_id' => 3,
            'title' => 'Главная новость номер три',
            'subtitle' => 'Подзаголовок',
            'description' => str_random(500),
            'introtext' => str_random(255),
            'creator_id' => 1,
            'type' => 'top',
            'preview_pattern' => 'third.small_img_right',
            'publisher_id' => 1,
            'publish_date' => now(),
            'published' => true,
        ]);

        App\Model\News::create([
            'category_id' => 2,
            'title' => 'Главная новость раздела блокчейн номер один',
            'subtitle' => 'Подзаголовок',
            'description' => str_random(500),
            'introtext' => str_random(255),
            'creator_id' => 1,
            'type' => 'category_top',
            'preview_pattern' => 'first.big_img_left',
            'publisher_id' => 1,
            'publish_date' => now(),
            'published' => true,
        ]);

        App\Model\News::create([
            'category_id' => 2,
            'title' => 'Главная новость раздела блокчейн номер два',
            'subtitle' => 'Подзаголовок',
            'description' => str_random(500),
            'introtext' => str_random(255),
            'creator_id' => 1,
            'type' => 'category_top',
            'preview_pattern' => 'second.big_img_left',
            'publisher_id' => 1,
            'publish_date' => now(),
            'published' => true,
        ]);

        App\Model\News::create([
            'category_id' => 3,
            'title' => 'Главная новость раздела криптовалюта',
            'subtitle' => 'Подзаголовок',
            'description' => str_random(500),
            'introtext' => str_random(255),
            'creator_id' => 1,
            'type' => 'category_top',
            'preview_pattern' => 'first.big_img_left',
            'publisher_id' => 1,
            'publish_date' => now(),
            'published' => true,
        ]);

        $titleNumbers = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять'];
        factory(\App\Model\News::class, 100)->create()->make();
//
//        foreach ($titleNumbers as $number){
//            App\Model\News::create([
//                'category_id' => 1,
//                'title' => 'Новость номер ' . $number,
//                'subtitle' => 'Подзаголовок',
//                'description' => str_random(500),
//                'introtext' => str_random(240),
//                'creator_id' => 1,
//                'publisher_id' => 1,
//                'publish_date' => now(),
//                'published' => true,
//                'hot' => true
//            ]);
//        }

    }
}
