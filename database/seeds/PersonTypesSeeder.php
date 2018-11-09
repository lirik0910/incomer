<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PersonTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('person_types')->insert([
            [
                'title' => 'personality',
                'description' => 'Person type for personality (human)',
            ],
            [
                'title' => 'company',
                'description' => 'Person type for company',
            ],
            [
                'title' => 'cryptocurrency',
                'description' => 'Person type for cryptocurrency',
            ],
        ]);

    }
}
