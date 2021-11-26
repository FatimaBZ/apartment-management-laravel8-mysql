<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\user_details;
//use Illuminate\Support\Facades\DB;
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

//     private $status_code    =        200;
//     // ------------ [ User Login ] -------------------
//     public function userLogin(Request $request) {

//         $validator          =       Validator::make($request->all(),
//             [
//                 "email"             =>          "required|email",
//                 "password"           =>          "required"
//                // "rolename"         =>          ""
//             ]
//         );

//         if($validator->fails()) {
//             return response()->json(["status" => "failed", "validation_error" => $validator->errors()]);
//         }


//         // check if entered email exists in db
//         $email_status       =       user_details::where("email", $request->email)->first();


//         // if email exists then we will check password for the same email

//         if(!is_null($email_status)) {
//             $password_status    =   user_details::where("email", $request->email)->where("passwrd", $request->password)->first();

//             // if password is correct
//             if(!is_null($password_status)) {
//                 $user_details           =       $this->userDetail($request->email);

//                 return response()->json(["status" => $this->status_code, "success" => true, "message" => "You have logged in successfully", "data" => $user_details]);
//             }

//             else {
//                 return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Incorrect password."]);
//             }
//         }

//         else {
//             return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Email doesn't exist."]);
//         }
//     }
//  // ------------------ [ User Detail ] ---------------------
//     public function userDetail($email) {
//         $user_details               =       array();
//         if($email != "") {
//             $user_details           =       user_details::where("email", $email)->first();
//             return $user_details;
//         }
//     }



    public function userLogin(Request $request){
     //   $user_details =  new user_details;



     
      Log::info($request);
       $email = $request->input('email');
       $passwrd = $request->input('password');
//     $payload = json_decode($request);
     
  
//    $passwrd = $payload->password;
   
//    $email = $payload->email;
       Log::info($email);
       Log::info($passwrd);
        $user = user_details::where("email", $email)->where("passwrd", $passwrd)->first();
        //user_details::where("email", $request->email)->where("passwrd", $request->password)->first();
        //return $user_details;
        Log::info('---------*********user details***********_------------');
        Log::info(json_encode($user));
        if(!is_null($user)){
           // $request->session()->put('email', $email);
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
