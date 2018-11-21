<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        factory(\App\Model\User::class, 100)->create()->make();

//        $user = DB::table('users')->insert([
//            'email' => 'admin@admin.com',
//            'password' => Hash::make('secret'),
//            'type' => 'manager',
//        ]);
//
//        dd($user, $user->createToken('MyApp')->accessToken);
    }
}
