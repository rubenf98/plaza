<?php

namespace App\Http\Controllers;

use App\Exports\QuotaExport;
use Illuminate\Http\Request;

class DownloadQuotaController extends Controller
{
    public function __invoke(Request $request)
    {
        return (new QuotaExport($request))->download('quotas.xlsx', \Maatwebsite\Excel\Excel::XLSX);
    }
}
