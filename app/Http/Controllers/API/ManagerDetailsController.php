<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\user_details;

class ManagerDetailsController extends Controller
{
    public function managerDetailsForCrud(){
        $manager_details = user_details::where('rolename','Manager')->get();
        return response()->json([
            'status'=>200,
            'manager'=>$manager_details,
        ]);
    }
}
