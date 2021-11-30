<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\surrounding_details;
use Illuminate\Support\Facades\Log;
use DB;

class GardenController extends Controller
{
    //----------[show all the Gardens]----------------------------------
    public function index()
    {
        $all_garden = surrounding_details::all();
        return response()->json([
            'status'=>200,
            'garden'=>$all_garden,
        ]);
    }
//----------[Delete a Garden]----------------------------------
public function destroy(Request $request){
    $id = $request->input('id');
    Log::info('*****inside destroy garden name*******');
     Log::info($id);
     $deletedRows = surrounding_details::where('sid', $id)->delete();
     Log::info($deletedRows);
  
     return response()->json([
         'status'=> 200,
         'message' => 'Garden Deleted Successfully',
         'data' => $deletedRows
     ]);
    
 }
//----------function to store/insert the data---------------
public function store(Request $request){
    $surrounding_details =  new surrounding_details;
    $surrounding_details->sid = $request->input('buildingNumber');
    $surrounding_details->sname = $request->input('gardenName');
    Log::info($request);

    $surrounding_details->save();
   
    return response()->json([
        'status'=> 200,
        'message' => 'Garden Added Successfully',
        'data' => $surrounding_details
    ]);
}

//----------function to update the data---------------
public function update(Request $request)
    {
        $bnum = $request->input('buildingNumber');
        $surrounding_details = surrounding_details::where('sid', $bnum)->first();
        Log::info($surrounding_details);
       
        $surrounding_details->sname = $request->input('gardenName');
        
     //   $surrounding_details->baddress = $request->input('address');
       Log::info($surrounding_details);
        $surrounding_details->update();

        return response()->json([
            'status'=> 200,
            'message' => 'Garden Updated Successfully',
            
        ]);
    }
}
