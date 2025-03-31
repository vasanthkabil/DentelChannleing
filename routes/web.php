<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppointmentController;



Route::middleware(['auth'])->group(function () {
    Route::resource('appointments', AppointmentController::class);
});


Route::get('/', function () {
    return view('welcome');
});
