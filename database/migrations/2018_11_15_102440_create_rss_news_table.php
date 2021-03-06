<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRssNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rss_news', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_general_ci';

            $table->increments('id');
            $table->string('guid', 255)
                ->unique()
                ->nullable(false)
                ->comment('Global news id');
            $table->string('title', 255)
                ->nullable(false)
                ->comment('Rss news title');
            $table->string('link', 2000)
                ->nullable(false)
                ->comment('Rss news link');
            $table->string('source', 255)
                ->nullable(false)
                ->comment('Source name');
            $table->datetime('pub_date')
                ->nullable(false)
                ->comment('Date of publication');
            $table->boolean('is_visible')
                ->default(true);
            $table->boolean('is_used')
                ->default(false);
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
        Schema::dropIfExists('rss_news');
    }
}
