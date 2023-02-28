<?php

namespace App\Models;

use Database\Factories\ExercisesFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\Factory;

class exercise extends Model
{
    use HasFactory;
    protected static function newFactory(): Factory
    {
        return ExercisesFactory::new();
    }
}
