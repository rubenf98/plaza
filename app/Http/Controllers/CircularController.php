<?php

namespace App\Http\Controllers;

use App\Circular;
use App\Http\Requests\StoreCircularRequest;
use App\Http\Resources\CircularResource;
use App\QueryFilters\CircularFilters;
use Illuminate\Http\Request;
use Spatie\PdfToImage\Pdf;
use DB;


class CircularController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $filters = CircularFilters::hydrate($request->query());

        return CircularResource::collection(Circular::filterBy($filters)->latest()->paginate($request->limit ? $request->limit : 4))->additional(['meta' => Circular::countTags()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCircularRequest $request)
    {
        $validator = $request->validated();

        DB::beginTransaction();
        $path = $validator['pdf']->store('', 'circular');
        $validator['link'] = '/circular/' . $path;

        $circular = Circular::create($validator);

        $circular->tags()->attach($validator['tag_id']);
        DB::commit();

        return new CircularResource($circular);
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
