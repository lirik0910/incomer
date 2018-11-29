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

            'listPersonType',
            'readPersonType',

            'listUser',
            'readUser',
            'createUser',
            'updateUser',
            'restoreUser',
            'trashUser',
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

            'listSection',
            'readSection',
            'createSection',
            'restoreSection',
            'updateSection',
            'trashSection',
            'deleteSection',

            'listRSSNews',
            'readRSSNews',
            'updateRSSNews',
            'restoreRSSNews',
            'deleteRSSNews',

        ],
        'manager' => [
            'listPerson',
        ],
        'editor' => [
            'listPerson',
        ]
    ],
];
