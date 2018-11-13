<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_general_ci';

            $table->increments('id');
            $table->integer('categoryId', false, true)
                ->nullable(true)
                ->comment('Category ID');
            $table->string('title', 255)
                ->nullable(false)
                ->comment('Video title');
            $table->string('description', 255)
                ->nullable(true)
                ->comment('Video description');
            $table->string('link', 255)
                ->nullable(false)
                ->comment('Link to video');
            $table->integer('views')
                ->default(0)
                ->nullable(false)
                ->comment('Count of views on site');
            $table->boolean('onIndex')
                ->default(false)
                ->comment('Publishing on index page');
            $table->integer('creatorId', false, true)
                ->nullable(false)
                ->comment('User creator on site ID');
            $table->timestamps();

            $table->unique(['title', 'link']);
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
        Schema::dropIfExists('videos');
    }
}
