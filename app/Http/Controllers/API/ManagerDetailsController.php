<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\user_details;
use Illuminate\Support\Facades\Log;
use DB;
class ManagerDetailsController extends Controller
{
    public function managerDetailsForCrud(){
        $manager_details = user_details::where('rolename','Manager')->get();
        return response()->json([
            'status'=>200,
            'manager'=>$manager_details,
        ]);
    }

    public function store(Request $request){
        $fname = $request->input('firstName'); 
        $lname = $request->input('lastName');
        $passwrd = $request->input('passwrd');
        $email = $request->input('email');
        $manager_data = DB::insert('insert into user_details (fname,lname,passwrd, email,rolename) values(?,?,?,?,?)',[$fname,$lname,$passwrd,$email,'Manager']);
        return response()->json([
            'status'=> 200,
            'message' => 'Data Added Successfully',
            'data' => $manager_data
        ]);
       }
       //------------delete manager-------------------------

     public function destroy(Request $request){
        $id = $request->input('id');
        Log::info('*****inside destroy manager *******');
         Log::info($id);
         $deletedRows = user_details::where('empid', $id)->delete();
         Log::info($deletedRows);
      
         return response()->json([
             'status'=> 200,
             'message' => 'Manager Deleted Successfully',
             'data' => $deletedRows
         ]);
        
     }
     //----------------update manager-----------------------------
     public function update(Request $request)
    {
        $id = $request->input('id');
        $user_details = user_details::where('empid', $id)->first();
        Log::info($user_details);
       
        $user_details->fname = $request->input('firstName');
        $user_details->lname = $request->input('lastName');
        //$user_details->passwrd = $request->input('passwrd');
        $user_details->email = $request->input('email');
 
       Log::info($user_details);
        $user_details->update();

        return response()->json([
            'status'=> 200,
            'message' => 'Manager Updated Successfully',
            
        ]);
    }

}
