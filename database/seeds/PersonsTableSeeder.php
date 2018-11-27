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
        $companyTickerField = App\Model\PersonTypeField::where(['type_id' => 2, 'title' => 'ticker'])->first();

        /*
         * Add persons with company type
         */

        $companies = [
            'JPM' => 'JPMorgan Chase', 'GE' => 'General Electric',
            'XOM' => 'ExxonMobil', 'BRK-A' => 'Berkshire Hathaway',
            'C' => 'Citigroup', 'WFC' => 'Wells Fargo',
            'T' => 'AT&T', 'CVX' => 'Chevron',
            'COP' => 'ConocoPhillips', 'WMT' => 'Walmart',
            'IBM' => 'IBM', 'AIG' => 'American International Group',
            'PFE' => 'Pfizer', 'PG' => 'Procter & Gamble',
            'HPE' => 'Hewlett Packard', 'GSBD' => 'Goldman Sachs',
            'MSFT' => 'Microsoft', 'AAPL' => 'Apple',
            'JNJ' => 'Johnson & Johnson', 'F' => 'Ford Motor Company',
            'VZ' => 'Verizon Communications', 'GM' => 'General Motors',
            'MET' => 'MetLife', 'MS' => 'Morgan Stanley',
            'CSCO' => 'Cisco Systems', 'PEP' => 'PepsiCo',
            'INTC' => 'Intel', 'KO' => 'Coca-Cola',
            'ORCL' => 'Oracle', 'CMCSA' => 'Comcast',
            'AXP' => 'American Express', 'DIS' => 'Walt Disney',
            'USB' => 'U.S. Bancorp', 'BA' => 'Boeing',
            'DWDP' => 'Dow Chemical', 'CAT' => 'Caterpillar',
            'PNC' => 'PNC Financial Services', 'MRO' => 'Marathon Oil',
            'TGT' => 'Target', 'PM' => 'Philip Morris International',
            'FB' => 'Facebook', 'NFLX' => 'Netflix',
            'NVDA' => 'Nvidia', 'BABA' => 'Alibaba',
            'GOOGL' => 'Google', 'AMD' => 'AMD',
        ];

        foreach ($companies as $ticker => $name){
            $company = App\Model\Person::create([
                'name' => $name,
                'type_id' => $companyType->id,
            ]);


        }


    }
}
