<!DOCTYPE html>
<html data-theme='dark' lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <x-ress filename="home.js" />
    </head>
   <body>
    <section id="home-section">
        <x-nav/>
        @php($videos = ["/videos/lifting.mp4", "/videos/7bal.mp4",'/videos/l7bal3wtani.mp4','/videos/ki5dmBack.mp4'])
        <video autoplay  muted width="100%" src= {{$videos[array_rand($videos)]}} ></video>
        <div id="enroll" >
            <blockquote>
                <h3>{{$quote}}</h3>
                <footer>
                    <cite><kbd>-{{$author}}</kbd></cite>
                </footer>
            </blockquote>
 
            <a href="/add" id="start-now" role="button" class="contrast outline">Start now</a>
        </div>
    </section>
   </body>
    
</html>
