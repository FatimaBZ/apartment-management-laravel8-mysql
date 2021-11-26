<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Support\Facades\DB;
use Mail;

class ContactUsFormController extends Controller
{
    // // Create Contact Form
    // public function createForm(Request $request) {
    //     return view('contact');
    //   }
  
      // Store Contact Form data
      
      public function ContactUsForm(Request $request) {
  
          // Form validation
          $contacts =  new Contacts;
          $contacts->firstname = $request->input('fname');
          $contacts->lastname = $request->input('lname');
          $contacts->email = $request->input('email');
          $contacts->phone= $request->input('phone');
          $contacts->query= $request->input('query');
  
          $user_details->save();
         
          return response()->json([
              'status'=> 200,
              'message' => 'Contact Details Added Successfully',
          ]);
  
     
  
              //  Send mail to admin
        \Mail::send('mail', array(

            'firstname' => $request->get('fname'),
            'lastname' => $request->get('lname'),
            'phone' => $request->get('phone'),
            'email' => $request->get('email'),           
            'query' => $request->get('query'),

        ), function($message) use ($request){
            $message->from($request->email);
            $message->to('begumfatimazohra@gmail.com', 'Admin')->subject($request->get('subject'));
        });
          return back()->with('success', 'We have received your message and would like to thank you for writing to us.');
      }
  


}
