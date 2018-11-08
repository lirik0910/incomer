<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_general_ci';

            $table->increments('id');
            $table->integer('categoryId', false, true)
                ->nullable(true);
            $table->string('title', 255)
                ->nullable(false);
            $table->string('description', 255)
                ->nullable(true);
            $table->string('path', 255)
                ->nullable(false);
            $table->string('url', 255)
                ->nullable(false);
            $table->integer('creatorId', false, true)
                ->nullable(false);
            $table->timestamps();

            $table->unique(['title', 'path', 'url']);
            $table->index('categoryId');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('images');
    }
}
