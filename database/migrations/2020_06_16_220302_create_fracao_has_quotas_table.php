<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFracaoHasQuotasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fracao_has_quotas', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('fracao_id')->unsigned();
            $table->integer('quota_id')->unsigned();
            $table->enum('estado', ['pendente', 'pago', 'divida'])->default('pendente');
            $table->date('data');
            $table->timestamps();

            $table->foreign('fracao_id')->references('id')->on('fracaos')->onDelete('cascade');
            $table->foreign('quota_id')->references('id')->on('quotas')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fracao_has_quotas');
    }
}
