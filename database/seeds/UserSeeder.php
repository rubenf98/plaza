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
            'name'=> 'Rúben',
            'email'=> 'admin@admin.com',
            'password'=> bcrypt('admin'),
            "administrador" => false,
            "ativo" => true,
            "user_estado_id" => 1,
        ]);
    }
}
