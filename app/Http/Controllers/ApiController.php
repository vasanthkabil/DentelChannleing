<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class ApiController extends Controller
{
    public function register(Request $request)
    {    
       
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {

            return back()->withErrors($validator)->withInput();
        } else {

            $data = $request->all();
            $data['password'] = Hash::make($data["password"]);

         



            return redirect('/login')->with('success', 'Registration successful. Please login.');

        }
    }

    public function login(Request $request)
    {
     
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $request->session()->regenerate();
            return redirect('/appointments')->with('success', 'login successful.');
        } else {
            return back()->with('error', 'login unsuccessfull');
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }

}