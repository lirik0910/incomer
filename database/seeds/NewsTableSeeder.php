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

        factory(\App\Model\News::class, 10)->make();

        App\Model\News::create([
            'category_id' => 1,
            'title' => 'Новость номер один',
            'description' => str_random(500),
            'introtext' => str_random(255),
            'creator_id' => 1,
            'publisher_id' => 1,
            'publish_date' => now(),
            'hot' => false,
            'on_index_top' => true,
            'index_top_position' => 'first'
        ]);

        App\Model\News::create([
            'category_id' => 1,
            'title' => 'Новость номер два',
            'description' => str_random(500),
            'introtext' => str_random(255),
            'creator_id' => 1,
            'publisher_id' => 1,
            'publish_date' => now(),
            'hot' => false,
            'on_index_top' => true,
            'index_top_position' => 'second'
        ]);

        App\Model\News::create([
            'category_id' => 1,
            'title' => 'Новость номер три',
            'description' => str_random(500),
            'introtext' => str_random(255),
            'creator_id' => 1,
            'publisher_id' => 1,
            'publish_date' => now(),
            'hot' => false,
            'on_index_top' => true,
            'index_top_position' => 'third'
        ]);
    }
}
