<?php

namespace App\Models;
use App\Models\Doctor;

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

    protected $casts = [
        'doctor_id'  => 'integer',
        'date'       => 'date', 
        'start_time' => 'datetime',
        'end_time'   => 'datetime',
        'status'     => 'string',
    ];

    

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }


    
}
