<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class building_details extends Model
{
    use HasFactory;
    protected $table = 'building_details';
    public $timestamps = false;
    protected $primaryKey = 'bnum';
}
