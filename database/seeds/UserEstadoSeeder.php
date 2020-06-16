<?php

use Illuminate\Database\Seeder;
use App\UserEstado;

class UserEstadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UserEstado::Create([
            "estado" => "residente"
        ]);

        UserEstado::Create([
            "estado" => "ex-residente"
        ]);

        UserEstado::Create([
            "estado" => "suspenso"
        ]);
    }
}
