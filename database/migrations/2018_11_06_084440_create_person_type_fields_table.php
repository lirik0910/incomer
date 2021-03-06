<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonTypeFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('person_type_fields', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_general_ci';

            $table->increments('id');
            $table->integer('type_id', false, true)
                ->nullable(false)
                ->comment('Person type ID');

            $table->string('title', 255)
                ->nullable(false)
                ->comment('Field title');

            $table->string('content_type', 255)
                ->default('text');

            $table->string('description', 255)
                ->nullable(true)
                ->comment('Field description');

            $table->timestamps();

            $table->unique('title');
            $table->index(['type_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('person_type_fields');
    }
}
