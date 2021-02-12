<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Helper extends Model
{
    public static function printToConsole($arg)
    {
        $print = new \Symfony\Component\Console\Output\ConsoleOutput();
        $print->writeln($arg);
    }

    public static function getAlphabet()
    {
        return range('A', 'Z');
    }

    public static function getMonthsRange($init, $final)
    {
        $first = new Carbon($init);
        $last = new Carbon($final);
        $months = [];

        while ($first->lessThanOrEqualTo($last)) {
            array_push($months, $first->format('M'));
            $first->addMonth();
        };

        return $months;
    }
}
