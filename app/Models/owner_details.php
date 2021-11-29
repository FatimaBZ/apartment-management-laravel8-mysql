<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class owner_details extends Model
{
    use HasFactory;
    public $table = 'owner_details';
    public $timestamps = false;
    public $primaryKey = 'anum';
}
