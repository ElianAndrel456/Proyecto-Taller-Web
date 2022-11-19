<?php

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
Route::get('/fastfood', function () {
    return view('welcome');
});
Route::get('/fastfood/{id}', function () {
    return view('welcome');
});