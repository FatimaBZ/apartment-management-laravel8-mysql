<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class service_requested extends Model
{
    use HasFactory;
    public $table = 'service_request';
    public $timestamps = false;
    public $primaryKey = 'id';

}
