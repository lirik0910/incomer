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
            'link' => 'https://youtu.be/nVuHqdCj_HM',
            'creator_id' => 1,
            'preview_url' => 'img/placeolder.png',
            'on_index' => true,
        ]);

        App\Model\Video::create([
            'title' => 'Что такое ICO? Объяснение эксперта',
            'description' => str_random(100),
            'link' => 'https://youtu.be/2UPi6MqT7WM',
            'creator_id' => 1,
            'preview_url' => 'img/placeolder.png',
            'on_index' => true,
        ]);

        App\Model\Video::create([
            'title' => 'Что ждет рынок криптовалют? Прогноз эксперта',
            'description' => str_random(100),
            'link' => 'https://youtu.be/oZAaz-QgBMM',
            'creator_id' => 1,
            'preview_url' => 'img/placeolder.png',
            'on_index' => true,
        ]);

        App\Model\Video::create([
            'title' => 'Bitcoin - Новое золото?',
            'description' => str_random(100),
            'link' => 'https://youtu.be/d7_QbpI8ufo',
            'creator_id' => 1,
            'preview_url' => 'img/placeolder.png',
            'on_index' => true,
        ]);
    }
}
