<?php

use Illuminate\Database\Seeder;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
         * Get persons objects
         */
        $persons = App\Model\Person::all();

        /*
         * Add tags for persons
         */

        $persons->each(function ($item){
            App\Model\Tag::create([
                'person_id' => $item->id,
                'value' => strtoupper($item->name),
            ]);
        });
    }
}
