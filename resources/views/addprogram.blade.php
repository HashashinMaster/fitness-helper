<!DOCTYPE html>
<html data-theme='dark' lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <x-ress filename="add.js" />

</head>
<body>
    <x-nav/>
    <main id="add-main">
        <div id="form-container">
            <div class="inputs-container">
                <label id="weeks-num" for="number-of-weeks">
                    weeks
                <input type="number" placeholder="type the number of weeks">
                <small></small>
            </label>
        </div>
        <button id="go-next">
        Next
        </button>
            </div>
    </main>
</body>
</html>