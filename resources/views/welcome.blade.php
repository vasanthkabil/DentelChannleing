<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>


    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

   

    @vite(['resources/css/app.css', 'resources/js/app.js'])

</head>

<body>
    @if(session('success'))
    <div>
        {{ session('success') }}
    </div>
@endif

@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

    @if (Auth::check())
        <p>Welcome, {{ Auth::User()->name }}</p>

    @else
        <p>You are not logged in.</p>
    @endif


    <a href='/register'>Register</a>

    <a href='/login'>Login</a>

    <a href='/appointments'> Appointments</a>
    <h1 class="text-4xl font-bold text-blue-600">Welcome to Laravel with Tailwind CSS!</h1>


</body>

</html>