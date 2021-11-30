<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use App\Models\plant;
use DB;

class PlantsController extends Controller
{
    //--------------show all data----------------
    public function index(){
        $plants = DB::table('plant')->get();
        
        return response()->json([
            'status'=>200,       
            'plants' => $plants,
        ]);
    }
//---------------delete a plant------------------
public function destroy(Request $request){

    $pid = $request->input('id');
        Log::info('*****inside destroy plant name*******');
         Log::info($pid);
         $deletedRows = plant::where('pid', $pid)->delete();
         Log::info($deletedRows);
      
         return response()->json([
             'status'=> 200,
             'message' => 'Plant Deleted Successfully',
             'data' => $deletedRows
         ]);
   }

   //-----------add a plant---------------------
   public function store(Request $request){
    $pname = $request->input('plantName'); 
    $sid = $request->input('gardenNumber');

    $plant_data = DB::insert('insert into plant (pname, sid) values(?,?)',[$pname,$sid]);
    return response()->json([
        'status'=> 200,
        'message' => 'Data Added Successfully',
        'data' => $plant_data
    ]);
   }

   //--------------update a plant-------------
   public function update(Request $request)
    {
        $id = $request->input('id');
        $plant_details = plant::where('pid', $id)->first();
        Log::info($id);
       
        $plant_details->pname = $request->input('plantName');
        
     //   $surrounding_details->baddress = $request->input('address');
        Log::info($plant_details);
        $plant_details->update();

        return response()->json([
            'status'=> 200,
            'message' => 'Plant Updated Successfully',
            
        ]);
    }

}
