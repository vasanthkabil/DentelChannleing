<?php

namespace App\Http\Controllers;
use App\Models\Appointment;

use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

use Illuminate\Http\Request;
use App\Http\Middleware\AuthMiddleware;
use Illuminate\Support\Facades\Auth;


class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function _construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {

        $appointments = Appointment::all();

        return view("appointment.index", compact("appointments", ));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view("appointment.create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validdata = $request->validate([
            'doctor_id' => 'required|exists:doctors,id',
            'date' => 'required|date|after:today',
            'start_time' => 'required',
            'end_time' => 'required',
            'status' => 'required'

        ]);
        
      




        $existingAppointment = Appointment::where('doctor_id', $validdata['doctor_id'])
            ->where('date', $validdata['date'])
            ->where('start_time', $validdata['start_time'])
            ->where('end_time', $validdata['end_time'])
            ->where('status', $validdata['status'])
            ->first();


            if ($existingAppointment) {
                return back()->with('error', 'This appointment already exists.');
            } elseif (empty($validdata['doctor_id']) || empty($validdata['date']) || empty($validdata['start_time']) || empty($validdata['end_time']) || empty($validdata['status'])){
                return back()->with('error', 'Please fill valid details.');
            } else {
                Appointment::create($validdata);
                return redirect('/appointments/create')->with('success', 'Appointment Added Successfully!');
            }
            
        










        // $appointment = new Appointment; 
        //  $appointment ->doctor_id = $request->input('doctor_id');
        //  $appointment ->date= $request->input('date');
        // $appointment ->start_time = $request->input('start_time'); 
        //  $appointment ->end_time = $request->input('end_time'); 
        //  $appointment ->status = $request->input('status'); 
        //  $appointment ->save();
        // return redirect('/appointments')->with('success', 'Appointment Added Successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {


        $appointment = Appointment::find($id);
        $now = now();

        $starttime = $appointment->start_time;


        if ($starttime->lte($now->addHours(24))) {

           
            return redirect('/appointments')->with('error', 'You can only cancel an appointment 24 hours beforr');

        } else
        $appointment->delete();
        return redirect('/appointments')->with('success', 'Appointment Cancel Successfully!');
          

    }


}
