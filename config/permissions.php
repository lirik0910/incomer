<?php

return [
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
            'restoreNews',
            'trashNews',

            'listTag',
            'filterListTag',
            'readTag',
            'createTag',
            'updateTag',
            'deleteTag',
            'restoreTag',
            'trashTag',

            'listCategory',
            'filterListCategory',
            'readCategory',
            'createCategory',
            'updateCategory',
            'deleteCategory',
            'restoreCategory',
            'trashCategory',
        ],
        'manager' => [

            'listPerson',
        ],
        'editor' => [
            'listPerson',

        ]
    ],
];
