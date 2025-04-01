<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Fill your Appointments</h1>
  

    <form action="/appointments" method="POST">
        @csrf
        <label for="doctor_id"><b>DoctorID&emsp;&emsp;&emsp;</b></label>
        <input  type="text" id="doctor_id" name="doctor_id" >
        <br><br>
        <label for="date"><b>Date</b></label>
        <input  type="date" id="date" name="date" >
        <br><br>
        <label for="start_time"><b>Start Time</b></label>
        <input  type="time" id="start_time" name="start_time" >
        <br><br>
        <label for="end_time"><b>End Time</b></label>
        <input  type="time" id="end_time" name="end_time" >
   <br><br>
        <label for="status"><b>Status</b></label>
        <input  type="text" id="status" name="status" >
        <br><br>
        <input  type="submit" value="Save" class="btn-submit">
    </form> 
   


</body>
</html>