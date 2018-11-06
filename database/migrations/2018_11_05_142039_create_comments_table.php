<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_general_ci';

            $table->increments('id');
            $table->integer('parentId', false, true)
                ->nullable(true)
                ->comment('Parent comment ID');
            $table->integer('contentId', false, true)
                ->nullable(true)
                ->comment('Content ID');
            $table->integer('commentatorId', false, true)
                ->nullable(true)
                ->comment('Comment user ID');
            $table->integer('editorId', false, true)
                ->nullable(true)
                ->comment('Comment editor ID');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
