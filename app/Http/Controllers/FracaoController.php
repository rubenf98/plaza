<?php

namespace App\Http\Controllers;

use App\Fracao;
use App\FracaoHasQuota;
use App\Http\Requests\UpdateFracaosRequest;
use App\Http\Resources\FracaoResource;
use App\QueryFilters\FracaoFilters;
use App\Quota;
use Carbon\Carbon;
use Illuminate\Http\Request;

class FracaoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $filters = FracaoFilters::hydrate($request->query());

        return FracaoResource::collection(Fracao::filterBy($filters)->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Fracao  $fracao
     * @return \Illuminate\Http\Response
     */
    public function show(Fracao $fracao)
    {
        return new FracaoResource($fracao);
        //return Fracao::getQuotas($fracao);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Fracao  $fracao
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Fracao $fracao)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateFracaos(UpdateFracaosRequest $request)
    {
        $validator = $request->validated();
        foreach ($validator['fracaos'] as $key => $fracao_id) {
            $fracao = Fracao::find($fracao_id);
            foreach ($validator['dates'] as $k => $date) {
                $formattedDate = new Carbon($date);
                $pivot = FracaoHasQuota::whereFracaoId($fracao_id)->whereQuotaId(1)->whereData($date)->first();
                if ($pivot) {
                    $pivot->update(array('data' => $formattedDate, 'estado' => $validator['pagamentos'][$key][$k]));
                } else {
                    $fracao->quotas()->attach(1, ['estado' => $validator['pagamentos'][$key][$k], 'data' => $formattedDate]);
                }
            }
        }

        return FracaoResource::collection(Fracao::whereIn('id', $validator['fracaos'])->get());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Fracao  $fracao
     * @return \Illuminate\Http\Response
     */
    public function destroy(Fracao $fracao)
    {
        //
    }
}
