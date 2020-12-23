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
            'nome' => 'Rúben Freitas',
            'email' => 'joseruben98@hotmail.com',
            "administrador" => true,
        ]);

        User::Create([
            'nome' => 'Tatiana Abreu',
            'email' => 'abreutati95@hotmail.com',
            "administrador" => true,
        ]);

        User::Create([
            'email' => 'joaosoutopt@gmail.com',
        ]);
        User::Create([
            'email' => 'elisabeter87@gmail.com',
        ]);
        User::Create([
            'email' => 'romulopestana10@msn.com',
        ]);
        User::Create([
            'email' => 'antoniolfalves@hotmail.com',
        ]);
        User::Create([
            'email' => 'fatimabonito23@hotmail.com',
        ]);
        User::Create([
            'email' => 'catarinaestrela@live.com.pt',
        ]);
        User::Create([
            'email' => 'cristinabrazao@gmail.com',
        ]);
        User::Create([
            'email' => 'luisavieira74@hotmail.com',
        ]);
        User::Create([
            'email' => 'ruben_valerio@netmadeira.com',
        ]);
        User::Create([
            'email' => 'fatyfy@hotmail.com',
        ]);
        User::Create([
            'email' => 'isabelfigueira15@msn.com',
        ]);
        User::Create([
            'email' => 'andradealdonio@hotmail.com',
        ]);
        User::Create([
            'email' => 'erme-ornelas@hotmail.com',
        ]);
        User::Create([
            'email' => 'marcialfernandes.65@gmail.com',
        ]);
        User::Create([
            'email' => 'cristinar1828@gmail.com',
        ]);
        User::Create([
            'email' => 'susana.gomes@netmadeira.com',
        ]);
        User::Create([
            'email' => 'capelosenio@gmail.com',
        ]);
        User::Create([
            'email' => 'leoniafurtado37@hotmail.com',
        ]);
        User::Create([
            'email' => 'duartebaia7@gmail.com',
        ]);
        User::Create([
            'email' => 'katarinagomes@hotmail.com',
        ]);

        User::Create([
            'email' => 'iasmserra@gmail.com',
        ]);
        User::Create([
            'email' => 'nelio166@gmail.com',
        ]);
        User::Create([
            'email' => 'ruidnmartins@gmail.com',
        ]);
        User::Create([
            'email' => 'joana_sofia05@hotmail.com',
        ]);
        User::Create([
            'email' => 'lionelopes@outlook.com',
        ]);


        User::Create([
            'email' => 'josemauriliof@hotmail.com',
        ]);
        User::Create([
            'email' => 'balankito@gmail.com',
        ]);
        User::Create([
            'email' => 'j.bodschwinna@bluewin.ch',
        ]);
        User::Create([
            'email' => 'brigidammendes@gmail.com',
        ]);
        User::Create([
            'email' => 'santos.davidv@gmail.com',
        ]);
        User::Create([
            'email' => 'ccaguiar@anam.pt',
        ]);
        User::Create([
            'email' => 'josemiguelcosta@netmadeira.com',
        ]);
        User::Create([
            'email' => 'antoniocalacalima@gmail.com',
        ]);
        User::Create([
            'email' => 'brunofcp36@gmail.com',
        ]);
        User::Create([
            'email' => 'lu-ornelas@hotmail.com',
        ]);
        User::Create([
            'email' => 'marcoabreu31@hotmail.com',
        ]);
        User::Create([
            'email' => 'rogeriocamacho1@hotmail.com',
        ]);
        User::Create([
            'email' => 'pujaa@tejobrinde.pt',
        ]);
        User::Create([
            'email' => 'comercial.radiopalmeira@gmail.com',
        ]);
        User::Create([
            'email' => 'klaudia_rodrigues_84@hotmail.com',
        ]);
        User::Create([
            'email' => 'dragaonuno6fcp@hotmail.com',
        ]);
        User::Create([
            'email' => 'marcoaadelgado@gmail.com',
        ]);
    }
}
