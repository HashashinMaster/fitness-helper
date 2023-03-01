<?php

namespace App\Http\Controllers;

use App\Models\exercise;
use App\Models\program;
use App\Models\week;
use Illuminate\Http\Request;

class ProgramController extends Controller
{
    public function addProgram(Request $request) {
        $data = json_decode($request->data);
        $program = new program;
        $program->number_of_weeks = $data->weeks;
        $program->save();

        
        foreach( $data as $week => $days){
            if($week === "weeks")
                continue;
            $week = new week;
            $week->program_id = $program->id; 
            
            $week->week_number =(int) filter_var($week,FILTER_SANITIZE_NUMBER_INT);
            $week->save();
            foreach( $days as $day => $exercises){
                if($exercises === 'Rest'){
                    $exercise = new exercise;
                    $exercise->week_id = $week->id;
                    $exercise->training_day = $day;
                    $exercise->action = $exercises;
                    $exercise->save();
                    continue;
                }
                foreach( $exercises as $exercise) {
                    $DB_exercise = new exercise;
                    $DB_exercise->week_id = $week->id;
                    $DB_exercise->training_day = $day;
                    $DB_exercise->action = "Train";
                    $DB_exercise->exercise_name = $exercise->ExercsiseName;
                    $DB_exercise->muscle = $exercise->muscle;
                    $DB_exercise->sets = $exercise->ExercsiseSets;
                    $DB_exercise->repetitions = $exercise->Repitions;
                    $DB_exercise->weight = $exercise->{'weight/kgs'};
                    $DB_exercise->video = $exercise->video;
                    $DB_exercise->thumbnail = $exercise->thumbnail;
                    $DB_exercise->save();
                }
                
            }
            
        }

        return [
            "success" => true,
            "message" => "program added successfully"
        ];
    }

    public function all() {
        return view('showprograms',["programs" => program::query()->get()]);
    }
    public function find($id){

        return view('displayprogram',[
            'program' => program::query()->find($id),
            'weeks' => week::all()->find($id)
    ]);
    }
    public function editProgramName($id){
        program::query()->find($id)->update([
            "name" => request()->programName
        ]);
        
        return redirect('programs');
    }
    public function delete($id){
        program::query()->find($id)->delete();
        return redirect('programs');
    }
    public function add() {
        return view('addprogram');

    }
}
