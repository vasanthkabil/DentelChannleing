<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
  
<body>
    <div class="container">
        <h2 class="mt-5">Login</h2>

   
        @if(session('success'))
            <div >
                {{ session('success') }}
            </div>
        @endif

        @if(session('error'))
            <div >
                {{ session('error') }}
            </div>
        @endif

       
        <form action='/login'  method="POST">
            @csrf

            
                <label for="email">Email address</label>
                <input type="email" id="email" name="email" value="{{ old('email') }}" required>
         

          
                <label for="password">Password</label>
                <input type="password"  id="password" name="password" required>
          

           
                <button type="submit" >Login</button>
         
        </form>
    </div>


</body>
</html>
