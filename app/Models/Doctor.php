<?php

namespace App\Models;
use App\Models\Appointment;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{

    protected $fillable = [
        'name',
        'category',
       
    ];

    protected $casts = [
        'name'  => 'string',
        'category'       => 'string',
   
    ];



    public function appointments()
    {
        return $this->hasMany(Appointment::class, 'doctor_id');
    }
}
