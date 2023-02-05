<!DOCTYPE html>
<html data-theme='dark' lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>gym-helper</title>
        <link rel="stylesheet" href="css/app.css">
    </head>
   <body>
    <section id="home-section">
        <nav>
            <ul>
                <li>
                    <a href="" ><strong>Home</strong></a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/add">Add Program</a>
                </li>
                <li>
                    <a href="">View Programs</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
            </ul>
        </nav>
        @php 
        $videos = ["/videos/lifting.mp4", "/videos/7bal.mp4"];
        @endphp
        <video autoplay width="100%" src= {{$videos[array_rand($videos)]}} ></video>
        <div id="enroll" >
            <h3>{{$quote}}
                <br>
                <kbd>-{{$author}}</kbd>
            </h3>
            <a href="/add" id="start-now" role="button" class="contrast outline">Start now</a>
        </div>
    </section>
   </body>
    <script src="/js/vendor.js"></script>
    <script src="/js/manifest.js"></script>
    <script src="/js/home.js"></script>
</html>
