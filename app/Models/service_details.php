<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class service_details extends Model
{
    use HasFactory;
    public $table = 'service_details';
    public $timestamps = false;
    public $primaryKey = 'id';
}
