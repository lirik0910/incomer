<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call([
             PersonTypesSeeder::class,
             ManagerAuthSeeder::class,
             PersonTypeFieldsTableSeeder::class,
             CategoriesTableSeeder::class,
             SectionsTableSeeder::class,
             PersonsTableSeeder::class,
             TagsTableSeeder::class,
             NewsTableSeeder::class,
             UsersSeeder::class,
             VideosTableSeeder::class,
         ]);
    }
}
