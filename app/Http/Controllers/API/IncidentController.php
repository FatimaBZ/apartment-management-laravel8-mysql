<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\incident;
use App\Models\owner_details;
use Illuminate\Support\Facades\Log;
use DB;

class IncidentController extends Controller
{
    //-------------show incidents--------------------
    public function index()
    {
        $incidents = incident::all();
        return response()->json([
            'status'=>200,
            'incident'=>$incidents,
        ]);
    }
   //------------add incident-------------------------
    public function storeServiceIncident(Request $request)
    {
       
        
        $incident = $request->input('incidentName');
        $anum = $request->input('apartmentNumber');
        $empid = owner_details::where("anum", $anum)->distinct()->value('ownerid');
        $incident_details = DB::insert('insert into incident (incident, empid) values(?,?)',[$incident,$empid]);
            
     
        return response()->json([
            'status'=> 200,
            'message' => 'Data Added Successfully',
            'data' => $incident_details
        ]);

    }
     //------------delete incident-------------------------

     public function destroy(Request $request){
        $id = $request->input('id');
        Log::info('*****inside destroy incident name*******');
         Log::info($id);
         $deletedRows = incident::where('id', $id)->delete();
         Log::info($deletedRows);
      
         return response()->json([
             'status'=> 200,
             'message' => 'Incident Deleted Successfully',
             'data' => $deletedRows
         ]);
        
     }
     //----------------update incident------------------
     public function update(Request $request)
     {
         $id= $request->input('id');
         $incident_data = incident::where('id', $id)->first();
         Log::info($incident_data);
         //Log::info($visitor_data->bname);
         $incident_data->incident = $request->input('incidentName');
         
        Log::info($incident_data);
         $incident_data->update();
 
         return response()->json([
             'status'=> 200,
             'message' => 'Incident Updated Successfully',
             
         ]);
     }
}
