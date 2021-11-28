<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class building_details extends Model
{
    use HasFactory;
    public $table = 'building_details';
    public $timestamps = false;
    public $primaryKey = 'bnum';
}
