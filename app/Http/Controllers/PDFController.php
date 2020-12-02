<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PDFController extends Controller
{

    public function showArquivo($file)
    {
        return response()->file(storage_path('arquivo/' . $file));
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showCircular($file)
    {
        return response()->file(storage_path('circular/' . $file));
    }
}
