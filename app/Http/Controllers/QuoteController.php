<?php

namespace App\Http\Controllers;

use App\Models\quote;
class QuoteController extends Controller
{
    public function getQuote() {
        //quote::query()->inRandomOrder()->first()
        return view('welcome',[
            'quote' => 'Pain is temporary. Quitting lasts forever',
            'author' => 'Lance Armstrong'
        ]);
    }
}
