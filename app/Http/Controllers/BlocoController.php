<?php

namespace App\Http\Controllers;

use App\Bloco;
use Illuminate\Http\Request;
use App\Http\Resources\BlocoResource;

class BlocoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return BlocoResource::collection(Bloco::all());
    }

    public function selector()
    {
        return BlocoResource::collection(Bloco::all());
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
     * @param  \App\Bloco  $bloco
     * @return \Illuminate\Http\Response
     */
    public function show(Bloco $bloco)
    {
        return new BlocoResource($bloco);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bloco  $bloco
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bloco $bloco)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bloco  $bloco
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bloco $bloco)
    {
        //
    }
}
