<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\ApiController;



Route::middleware(['web','auth'])->group(function () {
    Route::resource('appointments', AppointmentController::class);
});


Route::get('/', function () {
    return view('welcome');
});

Route::get('/register', function () {
    return view('register');
});
Route::post('/register', [ApiController::class, 'register']);


Route::get('/login', function () {
    return view('login');
 });
Route::post('/login', [ApiController::class, 'login']);


Route::post('/logout', [ApiController::class, 'logout'])->name('logout');
