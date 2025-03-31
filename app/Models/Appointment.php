<?php

namespace App\Models;

use GuzzleHttp\Psr7\Request;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = [
            'doctor_id',
            'date', 
            'start_time', 
            'end_time',
            'status'
    ];


    
}
