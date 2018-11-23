<?php

use Illuminate\Database\Seeder;

class VideosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
         * Add video objects
         */
        App\Model\Video::create([
            'title' => 'Essentia – храните и продавайте свои персональные данные',
            'description' => str_random(100),
            'link' => 'https://www.youtube.com/embed/nVuHqdCj_HM',
            'creator_id' => 1,
            'preview_url' => 'img/placeholder.png',
            'on_index' => true,
        ]);

        App\Model\Video::create([
            'title' => 'Что такое ICO? Объяснение эксперта',
            'description' => str_random(100),
            'link' => 'https://www.youtube.com/embed/2UPi6MqT7WM',
            'creator_id' => 1,
            'preview_url' => 'img/placeholder.png',
            'on_index' => true,
        ]);

        App\Model\Video::create([
            'title' => 'Что ждет рынок криптовалют? Прогноз эксперта',
            'description' => str_random(100),
            'link' => 'https://www.youtube.com/embed/oZAaz-QgBMM',
            'creator_id' => 1,
            'preview_url' => 'img/placeholder.png',
            'on_index' => true,
        ]);

        App\Model\Video::create([
            'title' => 'Bitcoin - Новое золото?',
            'description' => str_random(100),
            'link' => 'https://www.youtube.com/embed/d7_QbpI8ufo',
            'creator_id' => 1,
            'preview_url' => 'img/placeholder.png',
            'on_index' => true,
        ]);
    }
}
