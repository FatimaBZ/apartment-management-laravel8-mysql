<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pool extends Model
{
    use HasFactory;
    public $table = 'pool';
    public $timestamps = false;
    public $primaryKey = 'id';
}
