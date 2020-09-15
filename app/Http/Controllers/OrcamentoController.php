<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrcamentoRequest;
use App\Http\Resources\OrcamentoResource;
use App\Orcamento;
use Illuminate\Http\Request;
use DB;

class OrcamentoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return OrcamentoResource::collection(Orcamento::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOrcamentoRequest $request)
    {
        $validator = $request->validated();

        DB::beginTransaction();
        $path = $validator['pdf']->store('', 'orcamento');
        $validator['url'] = '/orcamento/' . $path;

        $orcamento = Orcamento::create($validator);
        DB::commit();

        return new OrcamentoResource($orcamento);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Orcamento  $orcamento
     * @return \Illuminate\Http\Response
     */
    public function show(Orcamento $orcamento)
    {
        //
    }

    /**
     * Display the specified pdf.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function pdf($url)
    {
        return response()->file(public_path($url));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Orcamento  $orcamento
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Orcamento $orcamento)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Orcamento  $orcamento
     * @return \Illuminate\Http\Response
     */
    public function destroy(Orcamento $orcamento)
    {
        //
    }
}
