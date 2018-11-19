<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('charts', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('person_id');

            $table->date('date');
            $table->time('minute');

            $table->float('open', 8, 3)->nullable();
            $table->float('high', 8, 3)->nullable();
            $table->float('low', 8, 3)->nullable();
            $table->float('close', 8, 3)->nullable();
            $table->integer('volume')->nullable();

            $table->float('average', 8, 3)->nullable();

            $table->unique(['person_id', 'date', 'minute']);

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
        Schema::dropIfExists('charts');
    }
}
