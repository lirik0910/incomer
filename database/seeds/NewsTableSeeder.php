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
