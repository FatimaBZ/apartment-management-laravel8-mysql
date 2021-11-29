<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\visitor;
use App\Models\user_details;
use App\Models\apartment_details;
use App\Models\surrounding_details;
use Illuminate\Support\Facades\Log;
use DB;

class VisitorDetailsController extends Controller
{

    public function index()
    {
        $all_visitor = visitor::all();
        return response()->json([
            'status'=>200,
            'visitorlist'=>$all_visitor,
        ]);
    }

    public function visitorDashboardForCrud(){
        $visitor_details = user_details::where('rolename','Visitor')->get();
        return response()->json([
            'status'=>200,
            'visitor'=>$visitor_details,
        ]);
    }
  
    public function storeApt(Request $request)
    {
      
        $anum = $request->input('aptnum');
       
    
        $fname = $request->input('firstName');
        $lname = $request->input('lastName');
        $message = $request->input('msg');
       
        $lastname = user_details::where("lname", $lname)->where("rolename", 'Visitor')->value('lname');
        Log::info($lastname);
        $firstname = user_details::where("fname", $fname)->where("rolename", 'Visitor')->value('fname');
        $apartmentNumber = apartment_details::where('anum', $anum)->value('anum');

        Log::info($request);
     
        $visitor_data = DB::insert('insert into visitor (anum, fname, lname, message) values(?,?,?,?)',[$apartmentNumber,$firstname,$lastname,$message]);
        return response()->json([
            'status'=> 200,
            'message' => 'Data Added Successfully',
            'data' => $visitor_data
        ]);
    }



    public function storeGarden(Request $request)
    {
      
        $gardenName = $request->input('gname');
       
    
        $fname = $request->input('firstName');
        $lname = $request->input('lastName');
        $message = $request->input('msg');
       
        $lastname = user_details::where("lname", $lname)->where("rolename", 'Visitor')->value('lname');
        $firstname = user_details::where("fname", $fname)->where("rolename", 'Visitor')->value('fname');
        $gardenName = surrounding_details::where('sname', $gardenName)->value('sname');

        Log::info($request);
     
        $visitor_data = DB::insert('insert into visitor (gardenName, fname, lname, message) values(?,?,?,?)',[$gardenName,$firstname,$lastname,$message]);
        return response()->json([
            'status'=> 200,
            'message' => 'Data Added Successfully',
            'data' => $visitor_data
        ]);
    }

    public function store(Request $request){

        $new_visitor_details = DB::insert('insert into user_details (fname, lname, passwrd, rolename, email) values(?,?,?,?,?)',[ $request->input('firstName'),$request->input('lastName'),$request->input('passwrd'), 'Visitor', $request->input('email')]);
        
        return response()->json([
            'status'=> 200,
            'message' => 'Visitor Added Successfully to user_details table',
            'data' => $new_visitor_details
        ]);
    }

       //----------[Delete a visitor]---------------
       public function destroy(Request $request){
        $id = $request->input('empid');
        Log::info('*****inside destroy visitor name*******');
         Log::info($id);
         $deletedRows = user_details::where('empid', $id)->where('rolename','Visitor')->delete();
         Log::info($deletedRows);
      
         return response()->json([
             'status'=> 200,
             'message' => 'Building Deleted Successfully',
             'data' => $deletedRows
         ]);
        
     }

     public function update(Request $request)
     {
         $id= $request->input('id');
         $visitor_data = user_details::where('empid', $id)->first();
         Log::info($visitor_data);
         //Log::info($visitor_data->bname);
         $visitor_data->fname = $request->input('firstName');
         $visitor_data->lname = $request->input('lastName');
         $visitor_data->passwrd = $request->input('passwrd');
         $visitor_data->email = $request->input('email');
        Log::info($visitor_data);
         $visitor_data->update();
 
         return response()->json([
             'status'=> 200,
             'message' => 'Visitor Data in user_details Table Updated Successfully',
             
         ]);
     }
}
