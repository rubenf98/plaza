<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlocosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blocos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome');
            $table->integer('edificio_id')->unsigned();
            $table->timestamps();


            $table->foreign('edificio_id')->references('id')->on('edificios')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blocos');
    }
}
