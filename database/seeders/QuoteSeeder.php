<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use \App\Models\quote;
class QuoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        quote::factory(1)->create();

    }
}
