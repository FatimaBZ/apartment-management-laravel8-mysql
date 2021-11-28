<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class surrounding_details extends Model
{
    use HasFactory;
    public $table = 'surrounding_details';
    public $timestamps = false;
    public $primaryKey = 'sid';
}
