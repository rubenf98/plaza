<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFracaosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fracaos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('fracao_estado_id')->unsigned();
            $table->integer('user_id')->unsigned()->nullable();
            $table->integer('bloco_id')->unsigned();
            $table->string('nome');
            $table->integer('area');
            $table->timestamps();

            $table->foreign('fracao_estado_id')->references('id')->on('fracao_estados')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
            $table->foreign('bloco_id')->references('id')->on('blocos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fracaos');
    }
}
