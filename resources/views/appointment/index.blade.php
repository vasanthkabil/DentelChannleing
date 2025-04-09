<x-layout>


    @if(session('success'))
    <div class="mb-4 mt-4 w-40 flex items-center justify-center rounded-lg border border-blue-300 bg-blue-100 px-4 py-3 text-black-800 shadow-md">
        <span>{{ session('success') }}</span>
        <button onclick="this.parentElement.remove();" class="text-green-800 hover:text-green-600 font-bold">
            &times;
        </button>
    </div>
@endif

@if(session('error'))
    <div class="mb-4 mt-4 flex items-center justify-center rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-red-800 shadow-md">
        <span class="justify-center">{{ session('error') }}</span>
        <button onclick="this.parentElement.remove();" class="text-red-800 hover:text-red-600 font-bold">
            &times;
        </button>
    </div>
@endif


<div id="react-root" class="flex mt-5 justify-end mr-16" >


</div>

    <div  style="padding: 20px"><a href="{{url("/appointments/create")}}" type="button" class="btn btn-primary" style="background-color:#1bb350; border:#1bb350"> Create</a></div>

    <div class="relative overflow-x-auto ">
        <table class="w-full text-sm text-left rtl:text-right text-black ">
            <thead class="text-xs text-gray-700 uppercase  dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Doctor name
                    </th>
                    <th scope="col" class="px-6 py-3">
                       Appointment Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                       Start Time
                    </th>
                    <th scope="col" class="px-6 py-3">
                        End Time
                    </th>
                     <th scope="col" class="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
             @foreach ($appointments as $appointment)
                <tr class="bg-white  dark:bg-white  ">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      {{$appointment->doctor->name}}
                    </th>
                    <td class="px-6 py-4  text-gray-900">
                        {{$appointment->date->format('Y-m-d')}}
                    </td>
                    <td class="px-6 py-4  text-gray-900">
                        {{$appointment->start_time->format('h:i:s A')}}
                    </td>
                    <td class="px-6 py-4  text-gray-900">
                       {{$appointment->end_time->format('h:i:s A')}}
                    </td>
                     <td class="px-6 py-4  text-gray-900">
                       {{$appointment->status}}
                    </td>
                    
                    <td class="px-6 py-4">
                      <form action="/appointments/{{$appointment->id}}" method="post">
                            @method('delete')
                            @csrf
                                <button type="submit"   class="text-blue-400 font-bold" onclick="return confirm('Are you sure you want to delete?')"> Delete</button>
                        </form>
                    </td>
                </tr>
              
               
                @endforeach
            </tbody>
        </table>
    </div>

</x-layout>






