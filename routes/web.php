<?php

use App\Http\Controllers\StripeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/cart', function () {
    return view('welcome');
});
Route::get('/login', function () {
    return view('welcome');
});
Route::get('/register', function () {
    return view('welcome');
});
Route::get('/fastfood', function () {
    return view('welcome');
});
Route::get('/sweet', function () {
    return view('welcome');
});
Route::get('/sweet/{id}', function () {
    return view('welcome');
});
Route::get('/drinks', function () {
    return view('welcome');
});
Route::get('/drinks/{id}', function () {
    return view('welcome');
});
Route::get('/fastfood/{id}', function () {
    return view('welcome');
});
Route::get('/user', function () {
    return view('welcome');
});


//Rutas de Stripe
Route::get("/index", [StripeController::class, "index"]);
Route::post('/checkout', [StripeController::class, 'checkout']);
Route::get('/success', [StripeController::class, 'success']);
Route::get('/cancel', [StripeController::class, 'cancel']);



//En caso no encuentra la ruta devuelve a la pagina de inicio
/* Route::fallback(function () {
    return view('welcome');
}); */