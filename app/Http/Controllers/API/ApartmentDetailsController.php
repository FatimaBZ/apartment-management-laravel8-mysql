<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\apartment_details;
use App\Models\building_details;
use App\Models\owner_details;
use Illuminate\Support\Facades\Log;
use DB;

class ApartmentDetailsController extends Controller
{
     // ------------------ [All Apartment Details ] ---------------------
     public function index(){
        $apartments = apartment_details::all();
        return response()->json([
            'status'=>200,
            'apartment'=>$apartments,
        ]);
    }
    //---------------Register Apartment for a building----------------------
    public function storeApt(Request $request)
    {
      $anum = $request->input('apartmentNumber');   
        $bnum = $request->input('buildingNumber');
        Log::info($request);
       
        $buildingNumber= building_details::where("bnum", $bnum)->value('bnum');
        Log::info($buildingNumber);
        
       
     
        $apt_data = DB::insert('insert into apartment_details (anum, bnum) values(?,?)',[$anum,$buildingNumber]);
        return response()->json([
            'status'=> 200,
            'message' => 'Data Added Successfully',
            'data' => $apt_data
        ]);
    }

     //----------[Delete an apartment]----------------------------------
     public function destroy(Request $request){
        $anum = $request->input('apartmentNumber');
        Log::info('*****inside destroy apartment name*******');
         Log::info($anum);
         $deletedRows = apartment_details::where('anum', $anum)->delete();
         Log::info($deletedRows);
      
         return response()->json([
             'status'=> 200,
             'message' => 'Building Deleted Successfully',
             'data' => $deletedRows
         ]);
        
     }
      //----------[Update an apartment]-------[TO-DO]---------------------------
     public function updateApartment(Request $request)
     {
        $anum = $request->input('id');
       // $bnum = $request->input('buildingNumber');
        Log::info($anum);
        Log::info($bnum);
        $apartment_data = apartment_details::where('anum', $anum)->where('bnum', $bnum)->first();
        Log::info($apartment_data); 
        $apartment_data->anum = $anum;
         $apartment_data->bnum = $bnum;
        
      
         $apartment_data->update();
 
         return response()->json([
             'status'=> 200,
             'message' => 'Apartment Data in apartment_details Table Updated Successfully',
             
         ]);
     }

 //----------[Owned apartment details]----------------------------------

 public function indexOwnedApartment(){
        $apartments = owner_details::all();
        return response()->json([
            'status'=>200,
            'apartment'=>$apartments,
        ]);
    }


}
