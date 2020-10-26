<?php

namespace App\Http\Controllers;

use App\ArquivoTipo;
use App\Http\Resources\ArquivoTipoResource;
use Illuminate\Http\Request;

class ArquivoTipoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ArquivoTipoResource::collection(ArquivoTipo::all());
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
     * @param  \App\ArquivoTipo  $arquivoTipo
     * @return \Illuminate\Http\Response
     */
    public function show(ArquivoTipo $arquivoTipo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ArquivoTipo  $arquivoTipo
     * @return \Illuminate\Http\Response
     */
    public function edit(ArquivoTipo $arquivoTipo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ArquivoTipo  $arquivoTipo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ArquivoTipo $arquivoTipo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ArquivoTipo  $arquivoTipo
     * @return \Illuminate\Http\Response
     */
    public function destroy(ArquivoTipo $arquivoTipo)
    {
        //
    }
}
