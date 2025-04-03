<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    <!-- Styles / Scripts -->

</head>

<body>

    @if (Auth::check())
        <p>Welcome, {{ Auth::User()->name }}</p>

    @else
        <p>You are not logged in.</p>
    @endif


    <a href='/register'>Register</a>

    <a href='/login'>Login</a>

    <a href='/appointments'> Appointments</a>



</body>

</html>