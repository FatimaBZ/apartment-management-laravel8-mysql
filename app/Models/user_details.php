<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_details extends Model
{
    use HasFactory;
    protected $table = 'user_details';
    public $timestamps = false;
    protected $primaryKey = 'empid';
}
