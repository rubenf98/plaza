<?php

use Illuminate\Database\Seeder;
use App\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::Create([
            'nome' => 'Rúben',
            'email' => 'admin@admin.com',
            'password' => bcrypt('admin'),
            "administrador" => true,
            "ativo" => true,
            "user_estado_id" => 1,
        ]);

        User::Create([
            'nome' => 'Pedro',
            'email' => 'admin2@admin.com',
            'password' => bcrypt('admin'),
            "administrador" => false,
            "ativo" => true,
            "user_estado_id" => 1,
        ]);

        User::Create([
            'nome' => 'Carlos',
            'email' => 'admin3@admin.com',
            'password' => bcrypt('admin'),
            "administrador" => false,
            "ativo" => true,
            "user_estado_id" => 1,
        ]);

        User::Create([
            'email' => 'a@a.com',
            'password' => bcrypt('admin'),
        ]);
    }
}
