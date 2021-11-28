<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\building_details;
use Illuminate\Support\Facades\Log;


class BuildingDetailsController extends Controller
{
    
    // ------------------ [All Building Detail ] ---------------------
    public function index(){
        $buildings = building_details::all();
        return response()->json([
            'status'=>200,
            'building'=>$buildings,
        ]);
    }

      //----------[Register a building]---------------
      public function store(Request $request){
        $building_details =  new building_details;
        $building_details->bname = $request->input('buildingName');
        Log::info($request);
        Log::info($request->input('buildingName'));
        $building_details->baddress = $request->input('address');
      

        $building_details->save();
       
        return response()->json([
            'status'=> 200,
            'message' => 'Building Added Successfully',
            'data' => $building_details
        ]);
    }

   //----------[Delete a building]---------------
    public function destroy(Request $request){
       $bnum = $request->input('buildingId');
       Log::info('*****inside destroy building name*******');
        Log::info($bnum);
        $deletedRows = building_details::where('bnum', $bnum)->delete();
        Log::info($deletedRows);
     
        return response()->json([
            'status'=> 200,
            'message' => 'Building Added Successfully',
            'data' => $deletedRows
        ]);
       
    }
}
