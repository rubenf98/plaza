<?php

namespace App\Http\Controllers;

use App\Arquivo;
use App\Http\Requests\StoreArquivoRequest;
use App\Http\Resources\ArquivoResource;
use App\QueryFilters\ArquivoFilters;
use Illuminate\Http\Request;
use DB;

class ArquivoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $filters = ArquivoFilters::hydrate($request->query());
        return ArquivoResource::collection(Arquivo::filterBy($filters)->latest()->paginate(9));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreArquivoRequest $request)
    {
        $validator = $request->validated();
        DB::beginTransaction();
        $path = $validator['file']->store('', 'arquivo');

        $validator['url'] = '/arquivo/' . $path;

        $arquivo = Arquivo::create($validator);
        DB::commit();

        return new ArquivoResource($arquivo);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Arquivo  $arquivo
     * @return \Illuminate\Http\Response
     */
    public function show(Arquivo $arquivo)
    {
        return new ArquivoResource($arquivo);
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
     * @param  \App\Arquivo  $arquivo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Arquivo $arquivo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Arquivo  $arquivo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Arquivo $arquivo)
    {
        //
    }
}
