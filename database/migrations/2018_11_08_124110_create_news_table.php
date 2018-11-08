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
                ->nullable(false)
                ->comment('Category ID');
            $table->integer('relatedId', false, true)
                ->nullable(true)
                ->comment('Related news ID');
            $table->string('title', 255)
                ->nullable(false)
                ->comment('News title');
            $table->string('description', 255)
                ->nullable(false)
                ->comment('News description');
            $table->string('introtext', 255)
                ->nullable(false)
                ->comment('News introtext');
            $table->integer('views', false)
                ->nullable(false)
                ->default(0)
                ->comment('Count of views');
            $table->boolean('onIndex')
                ->default(false)
                ->comment('Publishing on index page');
            $table->integer('indexPosition', false)
                ->nullable(true)
                ->comment('Position on index page');
            $table->integer('creatorId', false, true)
                ->nullable(false)
                ->comment('User creator ID');
            $table->integer('editorId', false, true)
                ->nullable(false)
                ->comment('User editor ID');
            $table->integer('publisherId', false, true)
                ->nullable(false)
                ->comment('User publisher ID');
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
