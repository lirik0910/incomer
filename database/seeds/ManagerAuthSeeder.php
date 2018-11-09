<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ManagerAuthSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userId = DB::table('users')->insertGetId([
            'email' => 'admin@admin.com',
            'password' => Hash::make('secret'),
            'type' => 'manager',
        ]);


        DB::table('oauth_clients')->insert([
            'name' => 'admin',
            'user_id' => null,
            'redirect' => '/',
            'password_client' => false,
            'revoked' => false,
            'personal_access_client' => true,
            'secret' => Hash::make('secret'),
            'updated_at' => date('Y-m-d H:i:s'),
            'created_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('oauth_personal_access_clients')->insert([
            'client_id' => $userId,
            'updated_at' => date('Y-m-d H:i:s'),
            'created_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
