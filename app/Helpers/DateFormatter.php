<?php

namespace App\Helpers;

use Carbon\Carbon;

class DateFormatter
{
    public static function format(string $date)
    {
        $str = '';
        $date = Carbon::parse($date);

        if($date->isToday()){
            $str = 'Сегодня в ' . $date->format('H:i');
        } elseif ($date->isYesterday()){
            $str = 'Вчера в ' . $date->format('H:i');
        } elseif (($date->addDay())->isYesterday()){
            $str = 'Позавчера в ' . $date->format('H:i');
        } else{
            $str = $date->format('d F в H:i');
        }

        return $str;
    }
}



