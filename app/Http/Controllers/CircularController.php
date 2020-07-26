<?php

namespace App\Http\Controllers;

use App\Circular;
use App\Http\Resources\CircularResource;
use Illuminate\Http\Request;

class CircularController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CircularResource::collection(Circular::latest()->paginate(6));
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
     * @param  \App\Circular  $circular
     * @return \Illuminate\Http\Response
     */
    public function show(Circular $circular)
    {
        return new CircularResource($circular);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Circular  $circular
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Circular $circular)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Circular  $circular
     * @return \Illuminate\Http\Response
     */
    public function destroy(Circular $circular)
    {
        //
    }
}
