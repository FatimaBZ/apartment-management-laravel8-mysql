<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserDetailsController;
use App\Http\Controllers\API\ContactUsFormController;
use App\Http\Controllers\API\BuildingDetailsController;
use App\Http\Controllers\API\ImageController;
use App\Http\Controllers\API\VisitorDetailsController;
use App\Http\Controllers\API\ServiceRequestedController;
use App\Http\Controllers\API\ApartmentDetailsController;
use App\Http\Controllers\API\ManagerDetailsController;
use App\Http\Controllers\API\GardenController;
use App\Http\Controllers\API\AnalyticsController;
use App\Http\Controllers\API\PlantsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//---------------user_details table CRUD----------------------------------------------------
Route::post('/user-login', [UserDetailsController::class, 'userLogin']);
Route::get('/user/{email}', [UserDetailsController::class, 'userDetail']);
Route::get('/dashboardUser',[UserDetailsController::class, 'index'] );
Route::get('/hello',[UserDetailsController::class, 'hello'] );
Route::post('/addUser', [UserDetailsController::class, 'store']);


//---------------building_details table CRUD----------------------------------------------------
Route::get('/dashboardBuilding', [BuildingDetailsController::class, 'index']);
Route::post('/addBuilding', [BuildingDetailsController::class, 'store']);
Route::delete('/building', [BuildingDetailsController::class, 'destroy']);
Route::put('/updateBuilding', [BuildingDetailsController::class, 'update']);

//---------------contacts table CRUD---------------------------------------------------
Route::post('/contact', [ContactUsFormController::class, 'ContactUsForm'])->name('contact.store');


//-------------Image table CRUD--------------------------------------------------------
Route::get('/images', [ImageController::class, 'index'])->name('images');
Route::post('/images', [ImageController::class, 'upload'])->name('images');


//--------------Visitor Apartment Inquiry----------------------------------------------
Route::post('/visitorApartmentInquiry', [VisitorDetailsController::class, 'storeApt']);

//--------------Visitor Garden Inquiry----------------------------------------------
Route::post('/visitorGardenInquiry', [VisitorDetailsController::class, 'storeGarden']);

//--------------visitor CRUD----------------------------------------------------------
Route::get('/dashboardVisitor', [VisitorDetailsController::class, 'index']);
//Route::get('/getVisitorForCrud', [VisitorDetailsController::class, 'visitorDashboardForCrud']);
Route::post('/addVisitor', [VisitorDetailsController::class, 'store']);
Route::delete('/deleteVisitor', [VisitorDetailsController::class, 'destroy']);
//Route::put('/updateVisitor', [VisitorDetailsController::class, 'update']);

//------------------Service Requested/Incident Reported/Dashboard-----------------------
Route::get('/dashboardService', [ServiceRequestedController::class, 'index']);
Route::post('/storeServiceIncident', [ServiceRequestedController::class, 'storeServiceIncident']);
Route::get('/dashboardIncident', [ServiceRequestedController::class, 'indexIncident']);

//---------------------Apartment CRUD---------------------------------------------------
Route::get('/dashboardApartment', [ApartmentDetailsController::class, 'index']);
Route::post('/addApartment', [ApartmentDetailsController::class, 'storeApt']);
Route::delete('/deleteApartment', [ApartmentDetailsController::class, 'destroy']);
Route::put('/updateApartment', [ApartmentDetailsController::class, 'updateApartment']);

//-----------------------Owner CRUD-----------------------------------------------------
Route::get('/dashboardOwner', [ApartmentDetailsController::class, 'indexOwnedApartment']);

//------------------------Manager CRUD--------------------------------------------------
Route::get('/dashboardManager', [ManagerDetailsController::class, 'managerDetailsForCrud']);

//---------------------------Garden CRUD------------------------------------------------
Route::get('/dashboardGarden', [GardenController::class, 'index']);
Route::post('/addGarden', [GardenController::class, 'store']);
Route::delete('/deleteGarden', [GardenController::class, 'destroy']);
Route::put('/editGarden',[GardenController::class,'update']);


//-----------------------------Dashboard Data------------------------------------------
Route::get('/dashboardData', [AnalyticsController::class, 'index']);

//-----------------------------Plant CRUD----------------------------------------------
Route::get('/dashboardPlant', [PlantsController::class, 'index']);
Route::delete('/deletePlant',[PlantsController::class,'destroy']);
Route::post('/addPlant',[PlantsController::class,'store']);
Route::put('editPlant',[PlantsController::class,'update']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
