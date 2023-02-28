<!DOCTYPE html>
<html data-theme="dark" lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <x-ress filename="showprograms.js"/>
</head>
<body>
    <main>
        <x-nav/>
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
            <td>
                {{$program->id}}
            </td>

            <td>
                {{$program->name}}
            </td>

            <td>
                {{$program->number_of_weeks}}
            </td>
            <td style="width: 400px;">
                <div class="grid">
                    <button class="outline primary">View</button>
                    <button class="outline secondary">Update</button>
                    <button class="outline error">Delete</button>
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