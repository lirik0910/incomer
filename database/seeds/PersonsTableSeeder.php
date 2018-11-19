<?php

use Illuminate\Database\Seeder;

class PersonsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
         * Get persons types
         */
        $companyType = App\Model\PersonType::where('title', 'company')->first();

        /*
         * Add persons with company type
         */

        App\Model\Person::create([
            'name' => 'Apple',
            'type_id' => $companyType->id,
        ]);

        App\Model\Person::create([
            'name' => 'Tesla',
            'type_id' => $companyType->id,
        ]);

        App\Model\Person::create([
            'name' => 'Amazon',
            'type_id' => $companyType->id,
        ]);
    }
}
