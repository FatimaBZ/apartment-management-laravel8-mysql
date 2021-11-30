<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class plant extends Model
{
    use HasFactory;
    public $table = 'plant';
    public $timestamps = false;
    public $primaryKey = 'pid';
}
