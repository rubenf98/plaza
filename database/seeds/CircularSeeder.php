<?php

use App\Circular;
use App\CircularTag;
use Illuminate\Database\Seeder;

class CircularSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            [
                "titulo" => "Lorem ipsum dolor sit amet",
                "link" => "CC"
            ],
            [
                "titulo" => "Lorem ipsum dolor sit amet",
                "link" => "CC"
            ],
            [
                "titulo" => "Lorem ipsum dolor sit amet",
                "link" => "CC"
            ],
            [
                "titulo" => "Lorem ipsum dolor sit amet",
                "link" => "CC"
            ],
            [
                "titulo" => "Lorem ipsum dolor sit amet",
                "link" => "CC"
            ],
            [
                "titulo" => "Lorem ipsum dolor sit amet",
                "link" => "CC"
            ],
            [
                "titulo" => "Lorem ipsum dolor sit amet",
                "link" => "CC"
            ],
        ];

        $tags = CircularTag::all()->count();

        foreach ($items as $item) {
            $circular = Circular::create($item);
            $random = rand(1, 3);

            for ($i = 0; $i < $random; $i++) {
                $randomTag = rand(1, $tags);

                $circular->tags()->attach($randomTag);
            }
        }
    }
}
