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
            $table->integer('category_id', false, true)
                ->nullable(true)
                ->comment('Category ID');
            $table->string('title', 255)
                ->nullable(false)
                ->comment('Image title');
            $table->string('description', 255)
                ->nullable(true)
                ->comment('Image description');
            $table->string('path', 255)
                ->nullable(false)
                ->comment('Path to image');
            $table->string('url', 255)
                ->nullable(false)
                ->comment('Image url');
            $table->integer('creator_id', false, true)
                ->nullable(false)
                ->comment('User creator ID');
            $table->timestamps();

            $table->unique(['title', 'path', 'url']);
            $table->index(['category_id', 'creator_id']);
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
