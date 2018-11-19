<?php

use Faker\Generator as Faker;

$factory->define(App\Model\News::class, function (Faker $faker) {
    return [
        'category_id' => 1,
        'title' => $faker->title,
        'description' => str_random(500),
        'introtext' => str_random(255),
        'creator_id' => 1,
        'publisher_id' => 1,
        'publish_date' => now(),
        'hot' => true,
    ];
});
