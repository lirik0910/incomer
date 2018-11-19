<?php

use Illuminate\Database\Seeder;

class SectionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
         * Get cryptocurrencies category object
         */
        $cryptoSection = \App\Model\Category::find(3);

        /*
         * Add category sections
         */
        App\Model\Section::create([
            'category_id' => $cryptoSection->id,
            'title' => 'Bitcoin',
            'description' => 'Новости, связанные с Bitcoin',
        ]);

        App\Model\Section::create([
            'category_id' => $cryptoSection->id,
            'title' => 'Etherium',
            'description' => 'Новости, связанные с Etherium',
        ]);
    }
}
