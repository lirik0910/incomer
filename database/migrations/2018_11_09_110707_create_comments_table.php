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
            $table->integer('parent_id')
                ->nullable(true)
                ->comment('Parent comment ID');
            $table->integer('commentable_id')
                ->nullable(false)
                ->comment('Commentable content ID');
            $table->integer('creator_id')
                ->nullable(false)
                ->comment('User creator ID');
            $table->integer('editor_id')
                ->nullable(true)
                ->comment('User editor ID');
            $table->string('value', 255)
                ->nullable(false)
                ->comment('Comment text value');
            $table->string('commentable_type', 255)
                ->nullable(false)
                ->comment('Type of commentable content');
            $table->timestamps();

            $table->index(['parent_id', 'commentable_id', 'creator_id', 'editor_id', 'commentable_type']);
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
