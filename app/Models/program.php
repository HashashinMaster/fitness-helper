<?php

namespace App\Models;

use Database\Factories\ProgramsFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class program extends Model
{
    use HasFactory;
    protected $table = 'programs';
    protected static function newFactory(): Factory
    {
        return ProgramsFactory::new();
    }

}
