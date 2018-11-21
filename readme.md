Incomer
===
__deploy instruction__
1) copy .env.example to .env
1) install laravel dependecies
`docker run --rm --interactive --tty --volume $PWD:/app composer install`
1) create docker containers
`docker-compose up --build -d` 
1) make link for storage
`docker-compose exec app php artisan storage:link`
1) do migrations
`docker-compose exec app php artisan migrate:fresh`
1) do seeds
`docker-compose exec app php artisan db:seed`
