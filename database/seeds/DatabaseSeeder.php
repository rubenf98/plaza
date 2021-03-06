<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(FracaoEstadoSeeder::class);
        $this->call(UserEstadoSeeder::class);
        $this->call(EdificioSeeder::class);
        $this->call(BlocoSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(FracaoSeeder::class);
        $this->call(QuotaSeeder::class);
        $this->call(FracaoHasQuotaSeeder::class);
        $this->call(CircularTagSeeder::class);
        //$this->call(CircularSeeder::class);

        $this->call(ServicoTipoSeeder::class);
        $this->call(ServicoSeeder::class);

        $this->call(PerguntaTipoSeeder::class);
        $this->call(PerguntaSeeder::class);

        $this->call(ArquivoTipoSeeder::class);
        //$this->call(OrcamentoSeeder::class);
    }
}
