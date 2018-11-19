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
            $table->integer('category_id', false, true)
                ->nullable(false)
                ->comment('Category ID');
            $table->integer('related_id', false, true)
                ->nullable(true)
                ->comment('Related news ID');
            $table->string('title', 500)
                ->nullable(false)
                ->comment('News title');
            $table->text('description')
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
            $table->integer('creator_id', false, true)
                ->nullable(false)
                ->comment('User creator ID');
            $table->integer('editor_id', false, true)
                ->nullable(true)
                ->comment('User editor ID');
            $table->integer('publisher_id', false, true)
                ->nullable(true)
                ->comment('User publisher ID');
            $table->boolean('published')
                ->nullable(false)
                ->default(false)
                ->comment('Published status');
            $table->timestamps();
            $table->softDeletes();


            $table->unique('title');
            $table->index(['category_id', 'related_id', 'creator_id', 'editor_id', 'publisher_id']);
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
