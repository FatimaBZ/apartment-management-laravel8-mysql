<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\owner_details;
use App\Models\service_requested;
use App\Models\service_details;
use Illuminate\Support\Facades\Log;
use DB;
class ServiceController extends Controller
{
     //------------delete service-------------------------

     public function destroy(Request $request){
        $id = $request->input('id');
        Log::info('*****inside destroy service name*******');
         Log::info($id);
         $deletedRows = service_requested::where('id', $id)->delete();
         Log::info($deletedRows);
      
         return response()->json([
             'status'=> 200,
             'message' => 'service Deleted Successfully',
             'data' => $deletedRows
         ]);
        
     }

      //------------add service-------------------------
    public function store(Request $request)
    {
       
        
        $service = $request->input('serviceName');
        $anum = $request->input('apartmentNumber');
        $empid = owner_details::where("anum", $anum)->distinct()->value('ownerid');
        $sname = service_details::where("sname", $service)->value('sname');
        $service_details = DB::insert('insert into service_request (sname, empid) values(?,?)',[$sname,$empid]);
                
        return response()->json([
            'status'=> 200,
            'message' => 'Data Added Successfully',
            'data' => $service_details
        ]);

    }
    //----------------update incident------------------
    public function update(Request $request)
    {
        $id= $request->input('id');
        $service_data = service_requested::where('id', $id)->first();
        Log::info($service_data);
        //Log::info($visitor_data->bname);
        $service_data->sname = $request->input('serviceName');
        
       Log::info($service_data);
        $service_data->update();

        return response()->json([
            'status'=> 200,
            'message' => 'Service Updated Successfully',
            
        ]);
    }
}
