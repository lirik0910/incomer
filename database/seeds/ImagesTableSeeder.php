<?php

use Illuminate\Database\Seeder;

class ImagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Default content images path
        $path = '/images_content/';

        // Default images
        $images = [
            'car.png',
            'man.png',
            'man2.png',
            'photo-light.jpg',
            'photo-dark.jpg'
        ];
        /*
         * Add images objects
         */
        foreach ($images as $image){
            App\Model\Image::create([
                'title' => $image,
                'path' => $path,
                'url' => '/storage/images/images_content/' . $image,
                'creator_id' => 1
            ]);
        }
    }
}
