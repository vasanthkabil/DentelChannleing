<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    @if (session('success'))
    <div class="alert alert-success">
        {{ session('success') }}
    </div>
@endif



    <div  style="padding: 20px"><a href="{{url("/appointments/create")}}" type="button" class="btn btn-primary" style="background-color:#1bb350; border:#1bb350"> Create</a></div>

    <table border="3">
        <thead>
            <tr>
            
                <th>DoctorID</th>
                <th>Date</th>
                <th>StartTime</th>                       
                <th>EndTime</th> 
                <th>Status</th>        
                <th>DELETE</th>      
            </tr>
        </thead>
     
        <tbody>                  
            @foreach ($appointments as $appointment)
            <tr>
                <td>{{$appointment->doctor_id}}</td>
                <td>{{$appointment->date}}</td>
                <td>{{$appointment->start_time}}</td>
                <td>{{$appointment->end_time}}</td>
                <td>{{$appointment->status}}</td>                                      
                                                    
                <td>
                    <form action="/appointments/{{$appointment->id}}" method="post">
                        @method('delete')
                        @csrf
                            <button type="submit"   style="background-color:#15A0A8;border-color:#15A0A8;color:black" onclick="return confirm('Are you sure you want to delete?')"> Delete</button>
                    </form>
                </td>                                
            </tr>  
            @endforeach                     
        </tbody>
    </table>
</body>
</html>