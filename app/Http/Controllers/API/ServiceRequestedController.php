<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\service_requested;
use App\Models\owner_details;
use App\Models\service_details;
use App\Models\incident;
use Illuminate\Support\Facades\Log;
use DB;

class ServiceRequestedController extends Controller
{
    public function index()
    {
        $service_requested = service_requested::all();
        return response()->json([
            'status'=>200,
            'service'=>$service_requested,
        ]);
    }
    public function storeServiceIncident(Request $request)
    {
      
        $anum = $request->input('apartmentNumber');  
        $sname = $request->input('serviceName');
        $incident = $request->input('incident');
        Log::info($request);
       
        if(!is_null($incident) && !is_null($anum) && !is_null($sname)){

            $anum = owner_details::where("anum", $anum)->distinct()->value('ownerid');
            Log::info($anum);
            $sname = service_details::where("sname", $sname)->value('sname');
            Log::info($sname);
         
            $reportedIncident = DB::insert('insert into incident (incident, empid) values(?,?)',[$incident,$anum]);
            $requestedService = DB::insert('insert into service_request(sname, empid) values(?,?)',[$sname,$anum]);
            return response()->json([
                'status'=> 200,
                'message' => 'Data Added Successfully',
                'reportedIncident' => $reportedIncident,
                'requestedService' => $requestedService
            ]);
        }

        if(is_null($incident) && !is_null($anum) && !is_null($sname)){
            $sname = service_details::where("sname", $sname)->value('sname');
            Log::info($sname);
            $requestedService = DB::insert('insert into service_request(sname, empid) values(?,?)',[$sname,$anum]);
            return response()->json([
                'status'=> 200,
                'message' => 'Data Added Successfully',
                'requestedService' => $requestedService
            ]);
        }
 
    }

    public function indexIncident()
    {
        $incidents = DB::table('incident')
        ->join('owner_details', 'incident.empid', '=', 'owner_details.ownerid') 
        ->select('incident.id','incident.incident' ,'incident.empid', 'owner_details.firstname','owner_details.lastname')->distinct()
        ->get();
        Log::info($incidents);
      //  $incidents_grouped = $incidents
      //  Log::info($incidents_grouped);
        return response()->json([
            'status'=>200,
            'incident'=>$incidents,
        ]);
    }


}
