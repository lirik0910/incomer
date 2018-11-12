<?php

return [
    'actions' => [
        'listPerson' => 'Description for listPerson',
        'readPerson' => 'Description for readPerson',
        'createPerson' => 'Description for createPerson',
        'restorePerson' => 'Description for restorePerson',
        'updatePerson' => 'Description for updatePerson',
        'trashPerson' => 'Description for trashPerson',
        'deletePerson' => 'Description for deletePerson',

        'listUser' => 'Description for listUser',
        'readUser' => 'Description for readUser',
        'createUser' => 'Description for createUser',
        'updateUser' => 'Description for updateUser',
        'deleteUser' => 'Description for deleteUser',
    ],

    'roles' => [
        'admin' => [
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
    ],
];