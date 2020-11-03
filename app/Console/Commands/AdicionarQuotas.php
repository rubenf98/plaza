<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\FracaoHasQuota;
use Carbon\Carbon;
use App\Fracao;

class AdicionarQuotas extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:quotas';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $fracaos = Fracao::all();
        $initDate = Carbon::create(FracaoHasQuota::orderBy('id', 'DESC')->take(1)->value('data'))->addMonth();

        foreach ($fracaos as $fracao) {

            $initDateHelper =  new Carbon($initDate->toDateString());

            for ($i = 1; $i <= 12; $i++) {
                FracaoHasQuota::create([
                    'fracao_id' => $fracao->id,
                    'quota_id' => 1,
                    'data' => $initDateHelper
                ]);
                $initDateHelper->addMonth();
            }
        }
    }
}
