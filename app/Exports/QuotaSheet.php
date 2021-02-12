<?php

namespace App\Exports;

use App\Fracao;
use App\Helper;
use App\QueryFilters\FracaoFilters;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithStyles;
use Carbon\Carbon;

class QuotaSheet implements FromCollection, WithHeadings, WithMapping, WithTitle, WithStyles
{
    use Exportable;

    public function __construct($range, $request)
    {
        $this->cells = [[], [], []]; //pago, divida, plano pagamento
        $this->dates = $range;
        $this->alphabet = Helper::getAlphabet();
        $this->request = $request;
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $filters = FracaoFilters::hydrate($this->request->query());

        return Fracao::filterBy($filters)->get();
    }

    public function headings(): array
    {
        $headings = ['Fração'];
        $months = Helper::getMonthsRange($this->dates[0], $this->dates[1]);

        return array_merge($headings, $months);
    }

    public function map($record): array
    {
        $initDate = Carbon::parse($this->dates[0])->format('Y-m');
        $status = $record->getQuotaState($initDate, $this->dates[1]);
        $cells = [[], [], []]; //pago, divida, plano pagamento

        foreach ($status as $key => $month) {
            $col =  $this->alphabet[$key + 1];
            $row = $record->getCell();

            if ($month == 'pago') {
                array_push($cells[0], (string) $col . $row);
            } else if ($month == 'divida') {
                array_push($cells[1], (string) $col . $row);
            } else if ($month == 'plano') {
                array_push($cells[2], (string) $col . $row);
            }
        }

        array_push($this->cells[0], array_filter($cells[0]));
        array_push($this->cells[1], array_filter($cells[1]));
        array_push($this->cells[2], array_filter($cells[2]));

        return [$record->nome . ' - ' . $record->piso];
    }

    function getStyle($color)
    {
        return [
            'fill' => [
                'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                'startColor' => [
                    'argb' => $color,
                ],
            ],
            'borders' => [
                'outline' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                ],
            ],
        ];
    }

    function applyStyle($sheet, $cells, $color)
    {
        $cells = array_merge(...$cells);
        foreach ($cells as $cell) {
            $sheet->getStyle($cell)->applyFromArray(self::getStyle($color));
        }
    }

    public function styles(Worksheet $sheet)
    {
        self::applyStyle($sheet, $this->cells[0], '0cb800');
        self::applyStyle($sheet, $this->cells[1], 'ff0008');
        self::applyStyle($sheet, $this->cells[2], 'ffc400');
        //$sheet->mergeCells('A1:C1');
        return [
            1    => [
                'font' => ['bold' => true],
                'fill' => [
                    'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'startColor' => [
                        'argb' => 'B2B2B2',
                    ],
                ],
                'borders' => [
                    'allBorders' => [
                        'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    ],
                ],
            ],
        ];
    }

    public function title(): string
    {
        return $this->dates[0] . ' a ' . $this->dates[1];
    }
}
