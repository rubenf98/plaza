<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCircularHasTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('circular_has_tags', function (Blueprint $table) {
            $table->id();
            $table->integer('circular_id')->unsigned();
            $table->integer('circular_tag_id')->unsigned();
            $table->timestamps();

            $table->foreign('circular_id')->references('id')->on('circulars')->onDelete('cascade');
            $table->foreign('circular_tag_id')->references('id')->on('circular_tags')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('circular_has_tags');
    }
}
