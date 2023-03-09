<?php

namespace App\Http\Controllers;

use App\Models\quote;

class QuoteController extends Controller
{
    public function getQuote()
    {
        return view('welcome', quote::inRandomOrder()->first());
    }
}
