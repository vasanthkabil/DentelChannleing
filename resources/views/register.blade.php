<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h2>Register</h2>
    <form id="registerForm" action="/register" method="POST">
        @csrf
        <label for="name"><b>Name</b></label><br>
        <input type="text" id="name" name="name" required><br><br>

        <label for="email"><b>Email</b></label><br>
        <input type="email" id="email" name="email" required><br><br>

        <label for="password"><b>Password</b></label><br>
        <input type="password" id="password" name="password" required><br><br>

       <button type="submit">Register</button>
    </form>
</body>
</html>