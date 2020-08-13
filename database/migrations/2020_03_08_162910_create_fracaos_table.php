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
            $table->string('nome')->unique();
            $table->string('condomino')->nullable();
            $table->enum('piso', ['R/C', '1º', '2º', '3º', '4º', '5º']);
            $table->enum('tipo', ['T0', 'T1', 'T2', 'T3', 'T4', 'T5']);
            $table->double('area', 5, 2);
            $table->double('permilagem', 4, 2);
            $table->integer('estacionamento')->unique();
            $table->integer('arrecadação')->unique();
            $table->timestamps();

            $table->foreign('fracao_estado_id')->references('id')->on('fracao_estados')->onDelete('cascade');
            $table->foreign('bloco_id')->references('id')->on('blocos')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
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
