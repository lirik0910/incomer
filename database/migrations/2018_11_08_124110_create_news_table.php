<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_general_ci';

            $table->increments('id');
            $table->integer('categoryId', false, true)
                ->nullable(false);
            $table->integer('relatedId', false, true)
                ->nullable(true);
            $table->string('title', 255)
                ->nullable(false);
            $table->string('description', 255)
                ->nullable(false);
            $table->string('introtext', 255)
                ->nullable(false);
            $table->integer('views', false)
                ->nullable(false)
                ->default(0);
            $table->boolean('onIndex')
                ->default(false);
            $table->integer('indexPosition', false)
                ->nullable(true);
            $table->integer('creatorId', false, true)
                ->nullable(false);
            $table->integer('editorId', false, true)
                ->nullable(false);
            $table->integer('publisherId', false, true)
                ->nullable(false);
            $table->timestamps();


            $table->unique('title');
            $table->index(['categoryId', 'relatedId', 'creatorId', 'editorId', 'publisherId']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('news');
    }
}
