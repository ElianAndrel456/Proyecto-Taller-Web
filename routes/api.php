<?php

use App\Http\Controllers\PaypalController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Response;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("/create-order", [PaypalController::class, "createOrder"]);
Route::get("/capture-order", [PaypalController::class, "captureOrder"]);
Route::get("/cancel-order", [PaypalController::class, 'cancelOrder']);