<?php


namespace App\Helpers;


class MonthDays
{
    public static function getDays($month, $year)
    {
        if(in_array($month, ['1', '3', '5', '7', '8', '10', '12'])){
            return 31;
        } elseif (in_array($month, ['2'])){
            if(0 === $year%4){
                return 29;
            }
            return 28;
        } elseif (in_array($month, ['4', '6', '9', '11'])){
            return 30;
        }
        return false;
    }

    public static function getMonth()
    {
        return [
            1 => 'Январь', 2 => 'Февраль', 3 => 'Март',
            4 => 'Апрель', 5 => 'Май', 6 => 'Июнь',
            7 => 'Июль', 8 => 'Август', 9 => 'Сентябрь',
            10 => 'Октябрь', 11 => 'Ноябрь', 12 => 'Декабрь',
        ];
    }
}
