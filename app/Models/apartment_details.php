<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class apartment_details extends Model
{
    use HasFactory;
    public $table = 'apartment_details';
    public $timestamps = false;
    public $primaryKey = 'anum';
}
