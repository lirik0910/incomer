<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contents', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_general_ci';

            $table->increments('id');
            $table->integer('category_id', false, true)
                ->nullable(false)
                ->comment('Category ID');
            $table->integer('related_id', false, true)
                ->nullable(true)
                ->comment('Related content ID');
            $table->string('title', 255)
                ->nullable(false)
                ->comment('Content title');
            $table->timestamp('publishDate')
                ->comment('Content published date');
            $table->integer('editorId')
                ->nullable(false)
                ->comment('Last edit user ID');
            $table->integer('creatorId')
                ->nullable(false)
                ->comment('Creator user ID');
            $table->integer('publisherId')
                ->nullable(false)
                ->comment('Publish user ID');
            $table->boolean('onIndex')
                ->default(false)
                ->comment('View on index');
            $table->integer('views', false)
                ->default(0)
                ->comment('Count of views');

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
        Schema::dropIfExists('contents');
    }
}
