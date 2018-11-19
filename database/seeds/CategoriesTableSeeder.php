<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
         * Add news categories
         */
        App\Model\Category::create([
            'title' => 'Компании',
            'description' => 'Новости о компаниях',
        ]);

        App\Model\Category::create([
            'title' => 'Блокчейн',
            'description' => 'Новости, связанные с блокчейн',
        ]);

        App\Model\Category::create([
            'title' => 'Криптовалюты',
            'description' => 'Новости о криптовалютах',
        ]);
    }
}
