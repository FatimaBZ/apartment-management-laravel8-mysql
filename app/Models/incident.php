<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class incident extends Model
{
    use HasFactory;
    public $table = 'incident';
    public $timestamps = false;
    public $primaryKey = 'id';
}
