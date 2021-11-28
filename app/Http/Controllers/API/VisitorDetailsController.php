<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\visitor;
use App\Models\user_details;
use App\Models\apartment_details;
use Illuminate\Support\Facades\Log;
use DB;

class VisitorDetailsController extends Controller
{
  
    public function storeApt(Request $request)
    {
       // $visitor =  new visitor;
        $anum = $request->input('aptnum');
       
       // Log::info($request->input('aptnum'));
        $fname = $request->input('firstName');
        $lname = $request->input('lastName');
        $message = $request->input('msg');
        // Log::info($lname);
        // Log::info($fname);
        // Log::info($anum);
        $lastname = user_details::where("lname", $lname)->where("rolename", 'Visitor')->value('lname');
        Log::info($lastname);
        $firstname = user_details::where("fname", $fname)->where("rolename", 'Visitor')->value('fname');
        $apartmentNumber = apartment_details::where('anum', $anum)->value('anum');

        Log::info($request);
        //$visitor->save();
        $visitor_data = DB::insert('insert into visitor (anum, fname, lname, message) values(?,?,?,?)',[$apartmentNumber,$firstname,$lastname,$message]);
        return response()->json([
            'status'=> 200,
            'message' => 'Data Added Successfully',
            'data' => $visitor_data
        ]);
    }
}
