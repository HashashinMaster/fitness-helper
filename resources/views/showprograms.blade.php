<!DOCTYPE html>
<html data-theme="dark" lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <x-ress filename="showprograms.js"/>
</head>
<body>
    <x-nav/>
    <main id="show-main">
        <table>
        <tr >
            <th colspan="5" style="text-align: center;"> 
                Programs
            </th>
        </tr>
        <tr>
            <th>Programs id</th>
            <th>Program name</th>
            <th>Number of weeks</th>
            <th>Actions</th>
            <th>Date creation</th>
        </tr>
        @foreach ($programs as $program)
        <tr>
            <td >
                {{$program->id}}
            </td>

            <td>
                {{$program->name}}
            </td>

            <td>
                {{$program->number_of_weeks}}
            </td>
            <td id="actions" style="width: 400px;">
                <div class="grid" style="height:100%;">
                    <a role="button" href="/program/{{$program->id}}" class="outline primary">View</a>
                    <button  data-url="/programs/{{$program->id}}/edit" class="outline secondary">Edit</button>
                    <form action="/programs/{{$program->id}}/delete" method="post" style="margin: 0;">
                        @csrf
                        <input type="hidden" name="_method" value="DELETE">
                        <button type="submit" class="outline error">Delete</button>
                    </form>
                </div>
            </td>
            <td>
                {{$program->created_at}}
                
            </td>
        </tr>
        @endforeach
    </table>
</main>
</body>
</html>