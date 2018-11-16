<?php

use Illuminate\Database\Seeder;

class PersonTypeFieldsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $persons = [
            'company' => [
                'symbol', 'title', 'logo', 'state', 'price', 'change', 'exchange',
                'founding_date', 'industry', 'description', 'market_capitalization',
                'shares_in_circulation', 'address', 'phone', 'fax', 'website'
            ],
        ];


        foreach ($persons as $person => $fields) {
            $data = [];
            $personId = DB::table('person_types')->where(['title' => $person])->first()->id;

            foreach ($fields as $field) {
                $data[] = [
                    'type_id' => $personId,
                    'title' => $field,
                ];
            }

            DB::table('person_type_fields')->insert($data);
        }


    }
}
