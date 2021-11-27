<?php

namespace App\Http\Controllers\API;
use Session;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\user_details;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class UserDetailsController extends Controller
{
    public function hello(){
        return response()->json([
            'status'=>200,
            'message'=>'ok',
        ]);
    }

//  // ------------------ [ User Detail Through Email] ---------------------
//     public function userDetail($email) {
//         $user_details               =       array();
//         if($email != "") {
//             $user_details           =       user_details::where("email", $email)->first();
//             return $user_details;
//         }
//     }


 // ------------ [ User Login ] -------------------
    public function userLogin(Request $request){
  
      Log::info($request);
       $email = $request->input('email');
       $passwrd = $request->input('password');

       Log::info($email);
       Log::info($passwrd);
        $user = user_details::where("email", $email)->where("passwrd", $passwrd)->first();
  
        Log::info('---------*********user details***********_------------');
        Log::info(json_encode($user));
        if(!is_null($user)){
            Session::put('email', $email);
            return response()->json(["status" => 200, "success" => true, "message" => "You have logged in successfully", "data" => $user]);

        }
        else{
            return response()->json([
            "status" => "failed", 
            "success" => false, 
            "message" => "Unable to login. Incorrect Email/Password Try Again.",
            "data" => $user
        ]);
        }
    }

// ------------------ [All User Detail ] ---------------------
    public function index(){
        $users = user_details::all();
        return response()->json([
            'status'=>200,
            'user'=>$users,
        ]);
    }
    //----------function to store/insert the data---------------
    public function store(Request $request){
        $user_details =  new user_details;
        $user_details->fname = $request->input('firstname');
        Log::info($request);
        Log::info($request->input('firstname'));
        $user_details->lname = $request->input('lastname');
        $user_details->email = $request->input('email');
        $user_details->passwrd = $request->input('password');
        $user_details->rolename = $request->input('role');

        $user_details->save();
       
        return response()->json([
            'status'=> 200,
            'message' => 'User Added Successfully',
            'data' => $user_details
        ]);
    }

}
