<?php

namespace App\Http\Controllers;

use App\Models\exercise;
use Illuminate\Http\Request;
use PDO;

class TrainController extends Controller
{
    public function show($weekId, $day){
        
        return view('train',[
            'exercises' => exercise::where('week_id','=',$weekId)
            ->where('training_day','=',$day)
            ->get(),
            'days' => exercise::select(['training_day','action'])
            ->where('week_id','=',$weekId)
            ->distinct()
            ->get(),
            'weekId' => $weekId,
            'currentDay' => $day

        ]);
    }
}
