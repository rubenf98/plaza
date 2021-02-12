<?php

namespace App\Exports;

use App\FracaoHasQuota;
use App\Helper;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Carbon\Carbon;

class QuotaExport implements WithMultipleSheets
{
    use Exportable;

    public function __construct($request)
    {
        $finalDate = Carbon::create(FracaoHasQuota::orderBy('id', 'DESC')->take(1)->value('data'));
        $initDate = Carbon::create(FracaoHasQuota::orderBy('id')->take(1)->value('data'));
        $dates = [];

        while ($initDate->lessThanOrEqualTo($finalDate)) {
            $nextDate = $initDate->copy();
            $range = [$initDate->toDateString(), $nextDate->addMonths(11)->endOfMonth()->toDateString()];
            array_push($dates, $range);
            $initDate->addMonths(12);
        };

        $this->dates = $dates;
        $this->request = $request;
    }

    public function sheets(): array
    {
        $sheets = [];
        foreach ($this->dates as $range) {
            array_push($sheets, new QuotaSheet($range,  $this->request));
        };

        return $sheets;
    }
}
