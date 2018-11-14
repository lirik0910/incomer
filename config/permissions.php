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

        'listImage' => 'Description for listImage',
        'readImage' => 'Description for readImage',
        'createImage' => 'Description for createImage',
        'updateImage' => 'Description for updateImage',
        'deleteImage' => 'Description for deleteImage',

        'listVideo' => 'Description for listVideo',
        'readVideo' => 'Description for readVideo',
        'createVideo' => 'Description for createVideo',
        'updateVideo' => 'Description for updateVideo',
        'deleteVideo' => 'Description for deleteVideo',
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

            'listImage',
            'readImage',
            'createImage',
            'updateImage',
            'deleteImage',

            'listVideo',
            'readVideo',
            'createVideo',
            'updateVideo',
            'deleteVideo',

            'listNews',
            'readNews',
            'createNews',
            'updateNews',
            'deleteNews',
        ],
        'manager' => [

            'listPerson',
        ],
        'editor' => [
            'listPerson',

        ]
    ],
];
