<?php

namespace App\Http\Controllers;

use App\Http\Resources\ServicoTipoResource;
use App\ServicoTipo;
use Illuminate\Http\Request;

class ServicoTipoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ServicoTipoResource::collection(ServicoTipo::all());
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
     * @param  \App\ServicoTipo  $servicoTipo
     * @return \Illuminate\Http\Response
     */
    public function show(ServicoTipo $servicoTipo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ServicoTipo  $servicoTipo
     * @return \Illuminate\Http\Response
     */
    public function edit(ServicoTipo $servicoTipo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ServicoTipo  $servicoTipo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ServicoTipo $servicoTipo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ServicoTipo  $servicoTipo
     * @return \Illuminate\Http\Response
     */
    public function destroy(ServicoTipo $servicoTipo)
    {
        //
    }
}
