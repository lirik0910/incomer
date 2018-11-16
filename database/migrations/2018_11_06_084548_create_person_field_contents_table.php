<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonFieldContentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('person_field_contents', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_general_ci';

            $table->increments('id');
            $table->integer('field_id')
                ->nullable(false)
                ->comment('Person type field ID');
            $table->integer('person_id')
                ->nullable(false)
                ->comment('Person ID');
            $table->string('value')
                ->nullable(true)
                ->comment('Field content value');
            $table->timestamps();

            $table->index(['person_id', 'field_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('person_field_contents');
    }
}
