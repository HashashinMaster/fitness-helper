<!DOCTYPE html>
<html data-theme="dark" lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <x-ress filename="display.js" />
</head>
<body>
    <x-nav/>
    <main id="weeks-table-container">
        @foreach($weeks as $week)
        <table class="weeks-table-displayer">
            <thead>
                <tr>
                    <th colspan="3">{{array_keys(get_object_vars($weeks))[$loop->index]}}</th>
                </tr>
                <tr>
                    <th>
                        Training Days
                    </th>
                    <th>
                        Number of Exercises     
                    </th>
                    <th>
                        Train
                    </th>
                </tr>
            </thead>
            <tbody>
                    @foreach($week as $day)
                    <tr>
                    <td>{{$day->training_day}}</td>
                    <td>{{$day->number_of_exercises}}</td>
                    <td><a href="/train/{{$programId}}/{{$day->training_day}}"><img src="/pics/fire-svgrepo-com.svg" alt="" srcset=""></a></td>
                    </tr>
                    @endforeach
            </tbody>
        </table>

        @endforeach
    </main>
</body>
<script>
</script>
</html>