<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class quote extends Model
{
    use HasFactory;
    protected $table = 'quotes';
    protected $primaryKey = 'qoute_id';
    public $timestamps = false;
}
