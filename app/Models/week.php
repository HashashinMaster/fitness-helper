<?php

namespace App\Models;

use Database\Factories\WeeksFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\Factory; 

class week extends Model
{
    use HasFactory;
    protected $table = 'weeks';
    protected static function newFactory(): Factory
    {
        return WeeksFactory::new();
    }
}
