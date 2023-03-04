<?php

use App\Http\Controllers\ProgramController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuoteController;
use App\Http\Controllers\TrainController;

//Program Routes
Route::get('/', [QuoteController::class,'getQuote']);
Route::get('/add',[ProgramController::class,'add']);
Route::get('/programs',[ProgramController::class,'all'])->name('programs');
Route::get('/program/{id}',[ProgramController::class,'find']);
Route::put('/programs/{id}/edit',[ProgramController::class,'editProgramName']);
Route::delete('/programs/{id}/delete',[ProgramController::class,'delete']);


//Training Routes
Route::get('/train/{programId}/{day}',[TrainController::class,"show"]);