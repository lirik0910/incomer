<?php

use Faker\Generator as Faker;

$factory->define(App\Model\News::class, function (Faker $faker) {
    return [
        'category_id' => rand(1,3),
        'title' => $faker->word(),
        'description' => $faker->text(1000),
        'introtext' => $faker->text(),
        'creator_id' => 1,
        'publisher_id' => 1,
        'publish_date' => now(),
    ];
});
