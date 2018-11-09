<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ActionsTableSeeder extends Seeder
{

    public function run()
    {
        $allActions = [
            'listPerson',
            'readPerson',
            'createPerson',
            'restorePerson',
            'updatePerson',
            'trashPerson',
            'deletePerson',

            'listUser',
            'readUser',
            'createUser',
            'updateUser',
            'deleteUser',
        ];

        $roles = [
            'admin' => [
                'listPerson', 'readPerson', 'createPerson', 'restorePerson',
                'updatePerson', 'trashPerson', 'deletePerson',
                'listUser', 'readUser', 'createUser', 'updateUser', 'deleteUser'
            ],
            'manager' => [
                'listPerson', 'readPerson', 'createPerson', 'restorePerson',
                'updatePerson', 'trashPerson', 'deletePerson',
                'listUser', 'readUser', 'createUser', 'updateUser', 'deleteUser'
            ],
            'editor' => [
                'listPerson', 'readPerson', 'createPerson', 'restorePerson',
                'updatePerson', 'trashPerson', 'deletePerson',
                'listUser', 'readUser', 'createUser', 'updateUser', 'deleteUser'
            ]
        ];

        $actionsId = [];
        foreach ($allActions as $action) {
            $actionsId[$action] = DB::table('actions')
                ->insertGetId([
                    'title' => $action,
                    'description' => 'Permission for ' . $action
                ]);
        }


        $rolesId = [];
        foreach ($roles as $role => $actions) {
            $id = DB::table('roles')->insertGetId(['title' => $role]);
            $rolesId[$role] = $id;

            foreach ($actions as $action) {
                $ids[] = DB::table('roles_actions')
                    ->insertGetId([
                        'role_id' => $id,
                        'action_id' => $actionsId[$action]
                    ]);
            }
        }

        $user = DB::table('users')->where(['email' => 'admin@admin.com'])->first();

        DB::table('users_roles')->insert([
            'role_id' => $rolesId['admin'],
            'user_id' => $user->id,
        ]);
    }
}
