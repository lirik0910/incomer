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
                'ticker' => 'text',
                'title' => 'text',
                'logo' => 'image',
                'state' => 'text',
                'price' => 'text',
                'change' => 'text',
                'exchange' => 'text',
                'founding_date' => 'text',
                'industry' => 'text',
                'description' => 'text',
                'market_capitalization' => 'text',
                'shares_in_circulation' => 'text',
                'address' => 'text',
                'phone' => 'text',
                'fax' => 'text',
                'website' => 'text',
            ],
        ];


        foreach ($persons as $person => $fields) {
            $data = [];
            $personId = DB::table('person_types')->where(['title' => $person])->first()->id;

            foreach ($fields as $field => $type) {
                $data[] = [
                    'type_id' => $personId,
                    'content_type' => $type,
                    'title' => $field,
                ];
            }

            DB::table('person_type_fields')->insert($data);
        }


    }
}
