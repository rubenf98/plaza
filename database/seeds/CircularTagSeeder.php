<?php

use App\CircularTag;
use Illuminate\Database\Seeder;

class CircularTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CircularTag::create([
            "nome" => "obra",
            "image"  => "/icon/circulares/repair.svg"
        ]);
        CircularTag::create([
            "nome" => "limpezas",
            "image"  => "/icon/circulares/cleaning.svg"
        ]);
        CircularTag::create([
            "nome" => "aviso",
            "image"  => "/icon/circulares/warning.svg"
        ]);
        CircularTag::create([
            "nome" => "reunião",
            "image"  => "/icon/circulares/meeting.svg"
        ]);
        CircularTag::create([
            "nome" => "outros",
            "image"  => "/icon/circulares/other.svg"
        ]);
    }
}
