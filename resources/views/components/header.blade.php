<header>

    <nav>
<div class="basis-auto flex justify-between  bg-black w-full h-20">
    <div>

         <img src="{{ Vite::asset('resources/images/download.png') }}" alt="logo" class=" h-20 ml-5" > 
    </div>
    <div class="hidden md:flex space-x-6 mt-5">
        <a href="#" class="hover:text-blue-400 text-white">Home</a>
        <a href="#" class="hover:text-blue-400 text-white">About us</a>
        <a href="#" class="hover:text-blue-400 text-white">Services</a>
        <a href="#" class="hover:text-blue-400 text-white">Appointments</a>
    </div>
    <div class="mt-5">
        <a href="/login"   class="text-white outline-blue-500  bg-blue-400 hover:bg-transparent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none dark:focus:ring-blue-800">Login</a>
        
        <form method="POST" action="/logout" class="inline">
            @csrf
            <button type="submit" class="text-white bg-blue-400 hover:bg-transparent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800">
                Logout
            </button>
        </form>
        



</div>



    </nav>
   
                {{-- <img src="{{ Vite::asset('resources/images/download.png') }}" alt="logo" class="w-25 h-25" > --}}
                
</header>