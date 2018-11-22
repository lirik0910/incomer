Incomer
===
__deploy instruction__
- copy .env.example to .env
- install laravel dependecies
`docker run --rm --interactive --tty --volume $PWD:/app composer install`
- create docker containers
`docker-compose up --build -d` 
- make link for storage
`docker-compose exec app php artisan storage:link`
- do migrations
`docker-compose exec app php artisan migrate:fresh`
- do seeds
`docker-compose exec app php artisan db:seed`
