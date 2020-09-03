<?php

namespace App\Http\Controllers;

use App\Circular;
use App\Http\Resources\CircularResource;
use App\QueryFilters\CircularFilters;
use Illuminate\Http\Request;
use Spatie\PdfToImage\Pdf;


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

        return CircularResource::collection(Circular::filterBy($filters)->latest()->paginate($request->limit ? $request->limit : 6))->additional(['meta' => Circular::countTags()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        if ($request->hasFile('pdf')->isValid()) {
            $uniqueFileName = uniqid();
            $pdfPath = public_path('circular') . $uniqueFileName . '.pdf';
            $request->pdf->store($pdfPath);

            $pdf = new Pdf($pdfPath);
            $pdf->saveImage(public_path('circular'));
        }
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
