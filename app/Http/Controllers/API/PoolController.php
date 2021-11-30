<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use App\Models\pool;
use DB;

class PoolController extends Controller
{
     //--------------show all data----------------
     public function index(){
        $pool = DB::table('pool')->get();
        
        return response()->json([
            'status'=>200,       
            'pool' => $pool,
        ]);
    }
//-----------add a pool---------------------
public function store(Request $request){
    $pool_details =  new pool;
    $pool_details->pname = $request->input('poolName');
    $pool_details->pdetails = $request->input('details');

    $pool_details->save();
    return response()->json([
        'status'=> 200,
        'message' => 'Data Added Successfully',
        'data' => $pool_details
    ]);
   }

//----------[Delete a pool]----------------------------------
public function destroy(Request $request){
    $id = $request->input('id');
    Log::info('*****inside destroy garden name*******');
     Log::info($id);
     $deletedRows = pool::where('id', $id)->delete();
     Log::info($deletedRows);
  
     return response()->json([
         'status'=> 200,
         'message' => 'Pool Deleted Successfully',
         'data' => $deletedRows
     ]);
    
 }

 //--------------update a pool-------------
 public function update(Request $request)
 {
     $id = $request->input('id');
     $pool_details = pool::where('id', $id)->first();
     Log::info($id);
    
     $pool_details->pname = $request->input('poolName');
     $pool_details->pdetails = $request->input('details');
  
     Log::info($pool_details);
     $pool_details->update();

     return response()->json([
         'status'=> 200,
         'message' => 'Pool Updated Successfully',
         
     ]);
 }

}
