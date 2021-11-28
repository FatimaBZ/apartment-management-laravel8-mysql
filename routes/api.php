<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserDetailsController;
use App\Http\Controllers\API\ContactUsFormController;
use App\Http\Controllers\API\BuildingDetailsController;
use App\Http\Controllers\API\ImageController;
use App\Http\Controllers\API\VisitorDetailsController;

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

//---------------contacts table CRUD---------------------------------------------------
Route::post('/contact', [ContactUsFormController::class, 'ContactUsForm'])->name('contact.store');


//-------------Image table CRUD--------------------------------------------------------
Route::get('/images', [ImageController::class, 'index'])->name('images');
Route::post('/images', [ImageController::class, 'upload'])->name('images');


//--------------Visitor Apartment Inquiry----------------------------------------------
Route::post('/visitorApartmentInquiry', [VisitorDetailsController::class, 'storeApt']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
