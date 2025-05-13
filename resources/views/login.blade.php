

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Document</title>
    @viteReactRefresh
    @vite(['resources/css/app.css','resources/js/App.jsx'])
</head>
<body>
    <div id="flash-error" data-message="{{ session('error') }}"></div>
    <div id="flash-success" data-message="{{ session('success') }}"></div>
    <div id="react-login"></div> <!-- React will mount here -->
 
</body>
</html>
