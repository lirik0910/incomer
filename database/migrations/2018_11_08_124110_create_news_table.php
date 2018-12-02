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

            $table->integer('section_id')
                ->nullable(true)
                ->comment('Category section ID');

            $table->string('title', 70)
                ->nullable(false)
                ->comment('News title');

            $table->string('subtitle', 20)
                ->nullable(true)
                ->comment('News subtitle');

            $table->string('description', 10000)
                ->nullable(true)
                ->comment('News description');

            $table->text('introtext')
                ->nullable(true)
                ->comment('News introtext');

            $table->integer('views', false)
                ->nullable(false)
                ->default(0)
                ->comment('Count of views');

//            $table->boolean('on_index_top')
//                ->default(false)
//                ->nullable(false)
//                ->comment('Publishing on index page top');
//
//            $table->string('index_top_position', 50)
//                ->nullable(true)
//                ->comment('Position on index page');
//
//            $table->boolean('hot')
//                ->default(false)
//                ->nullable(false)
//                ->comment('Hot news on index');


            $table->string('type')
                ->nullable(false)
                ->default('normal');

            $table->string('preview_pattern')
                ->nullable(true);

            $table->integer('creator_id', false, true)
                ->nullable(false)
                ->comment('User creator ID');

            $table->integer('editor_id', false, true)
                ->nullable(true)
                ->comment('User editor ID');

            $table->integer('publisher_id', false, true)
                ->nullable(true)
                ->comment('User publisher ID');

            $table->dateTime('publish_date')
                ->nullable(true)
                ->comment('Publish date');

            $table->boolean('published')
                ->nullable(false)
                ->default(false)
                ->comment('Published status');

            $table->timestamps();
            $table->softDeletes();


//            $table->unique(['title', 'index_top_position']);
            //$table->index('section_id');
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
