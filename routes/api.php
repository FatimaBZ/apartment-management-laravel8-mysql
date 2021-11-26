<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserDetailsController;
use App\Http\Controllers\API\ContactUsFormController;

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

Route::post('/user-login', [UserDetailsController::class, 'userLogin']);
Route::get('/user/{email}', [UserDetailsController::class, 'userDetail']);
Route::get('/dashboardUser',[UserDetailsController::class, 'index'] );
Route::get('/hello',[UserDetailsController::class, 'hello'] );
Route::post('/addUser', [UserDetailsController::class, 'store']);


Route::post('/contact', [ContactUsFormController::class, 'ContactUsForm']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
