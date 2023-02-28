<?php

use App\Http\Controllers\ProgramController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuoteController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [QuoteController::class,'getQuote']);
Route::get('/add',[ProgramController::class,'add']);
Route::get('/programs',[ProgramController::class,'all'])->name('programs');
Route::get('/program/{id}',[ProgramController::class,'find']);
Route::put('/programs/{id}/edit',[ProgramController::class,'editProgramName']);
Route::delete('/programs/{id}/delete',[ProgramController::class,'delete']);