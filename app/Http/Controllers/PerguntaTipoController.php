<?php

namespace App\Http\Controllers;

use App\Http\Resources\PerguntaTipoResource;
use App\PerguntaTipo;
use App\QueryFilters\PerguntaTipoFilters;
use Illuminate\Http\Request;

class PerguntaTipoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PerguntaTipoResource::collection(PerguntaTipo::all());
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
     * @param  \App\PerguntaTipo  $perguntaTipo
     * @return \Illuminate\Http\Response
     */
    public function show(PerguntaTipo $perguntaTipo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PerguntaTipo  $perguntaTipo
     * @return \Illuminate\Http\Response
     */
    public function edit(PerguntaTipo $perguntaTipo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PerguntaTipo  $perguntaTipo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PerguntaTipo $perguntaTipo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PerguntaTipo  $perguntaTipo
     * @return \Illuminate\Http\Response
     */
    public function destroy(PerguntaTipo $perguntaTipo)
    {
        //
    }
}
