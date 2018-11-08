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
                ->nullable(true);
            $table->string('title', 255)
                ->nullable(false);
            $table->string('description', 255)
                ->nullable(true);
            $table->string('link', 255)
                ->nullable(false);
            $table->integer('views')
                ->default(0)
                ->nullable(false);
            $table->boolean('onIndex')
                ->default(false);
            $table->integer('creatorId', false, true)
                ->nullable(false);
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
