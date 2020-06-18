<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_estado_id')->unsigned();
            $table->integer('divida_id')->unsigned()->nullable();
            $table->string('nome');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->boolean('administrador')->default(false);
            $table->boolean('ativo');
            $table->rememberToken();
            $table->timestamps();

            $table->foreign('divida_id')->references('id')->on('dividas')->onDelete('set null');
            $table->foreign('user_estado_id')->references('id')->on('user_estados');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
