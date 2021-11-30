<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\user_details;
use App\Models\apartment_details;
use App\Models\building_details;
use App\Models\incident;
use App\Models\owner_details;
use App\Models\surrounding_details;
use App\Models\service_request;
use DB;

class AnalyticsController extends Controller
{
    public function index(){
        $users = DB::table('user_details')->count();
        $visitors = DB::table('visitor')->count();
        $incidents = DB::table('incident')->count();
        $apartments = DB::table('apartment_details')->count();
        $buildings = DB::table('building_details')->count();
        $owners =DB::table('owner_details')->count();
        $requests = DB::table('service_request')->count();
        $gardens = DB::table('surrounding_details')->count();
      

        return response()->json([
            'status'=>200,
        
            'users' => $users,
            'incidents'=>$incidents,
            'visitors' =>$visitors,
            'totalApartments'=>$apartments,
            'ownedApartments'=>$owners,
            'openRequests'=>$requests,
            'totalBuildings'=>$buildings,
            'totalGarden'=>$gardens,
        ]);
    }
}
