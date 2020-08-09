<?php

namespace App\Http\Controllers;

use App\Fracao;
use App\Http\Resources\FracaoResource;
use Illuminate\Http\Request;

class FracaoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return FracaoResource::collection(Fracao::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
     * Show the form for editing the specified resource.
     *
     * @param  \App\Fracao  $fracao
     * @return \Illuminate\Http\Response
     */
    public function edit(Fracao $fracao)
    {
        //
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
