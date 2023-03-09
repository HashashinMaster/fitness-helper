<!DOCTYPE html>
<html lang="en">
<html data-theme='dark' lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="/js/loading-bar.js"></script>
    <x-ress filename="display.js" />


</head>
</head>

<body>
    <main>
        <x-nav />
        <section id="days-nav-section">
            <nav>
                <ul>
                    @foreach($days as $day)

                    <li class="{{$day->action}}">
                        @if($day->action === 'Train')
                        <a href="/train/{{$weekId}}/{{$day->training_day}}">
                            {{$day->training_day}}
                            @if($day->training_day === $currentDay)
                            <svg fill="#e25822" width="2rem" height="2rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.32 15.653a.812.812 0 0 1-.086-.855c.176-.342.245-.733.2-1.118a2.106 2.106 0 0 0-.267-.779 2.027 2.027 0 0 0-.541-.606 3.96 3.96 0 0 1-1.481-2.282c-1.708 2.239-1.053 3.51-.235 4.63a.748.748 0 0 1-.014.901.87.87 0 0 1-.394.283.838.838 0 0 1-.478.023c-1.105-.27-2.145-.784-2.85-1.603a4.686 4.686 0 0 1-.906-1.555 4.811 4.811 0 0 1-.263-1.797s-.133-2.463 2.837-4.876c0 0 3.51-2.978 2.292-5.18a.621.621 0 0 1 .112-.653.558.558 0 0 1 .623-.147l.146.058a7.63 7.63 0 0 1 2.96 3.5c.58 1.413.576 3.06.184 4.527.325-.292.596-.641.801-1.033l.029-.064c.198-.477.821-.325 1.055-.013.086.137 2.292 3.343 1.107 6.048a5.516 5.516 0 0 1-1.84 2.027 6.127 6.127 0 0 1-2.138.893.834.834 0 0 1-.472-.038.867.867 0 0 1-.381-.29zM7.554 7.892a.422.422 0 0 1 .55.146c.04.059.066.126.075.198l.045.349c.02.511.014 1.045.213 1.536.206.504.526.95.932 1.298a3.06 3.06 0 0 1 1.16 1.422c.22.564.25 1.19.084 1.773a4.123 4.123 0 0 0 1.39-.757l.103-.084c.336-.277.613-.623.813-1.017.201-.393.322-.825.354-1.269.065-1.025-.284-2.054-.827-2.972-.248.36-.59.639-.985.804-.247.105-.509.17-.776.19a.792.792 0 0 1-.439-.1.832.832 0 0 1-.321-.328.825.825 0 0 1-.035-.729c.412-.972.54-2.05.365-3.097a5.874 5.874 0 0 0-1.642-3.16c-.156 2.205-2.417 4.258-2.881 4.7a3.537 3.537 0 0 1-.224.194c-2.426 1.965-2.26 3.755-2.26 3.834a3.678 3.678 0 0 0 .459 2.043c.365.645.89 1.177 1.52 1.54C4.5 12.808 4.5 10.89 7.183 8.14l.372-.25z" />
                            </svg>
                            @endif
                        </a>
                        @else
                        {{$day->training_day}}
                        @endif
                    </li>
                    @endforeach
                </ul>
            </nav>
        </section>

        <div id="main-container">

            <section id="video-display-container" data-index="1">
                <div id="video-container">

                    <video loop autoplay muted width="100%" src="/{{$exercises[0]->video}}"></video>
                    <div id="play-pause-btn">
                        <img data-action="pause" src="/pics/media-pause-svgrepo-com.svg" id="media-player">
                    </div>
                    <div id="desc-header-container">
                        <h1 data-sets="{{$exercises[0]->sets}}" data-current-set="1">
                            <span>
                                Sets 1/{{$exercises[0]->sets}}
                            </span>
                            <svg width="3rem" id="next-set" style="cursor: pointer;text-shadow: 2px 2px black;" height="3rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 6V18M5 18L5 6L15 12L5 18Z" stroke="#e25822" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </h1>
                        <h5 id="ex-name" style="margin: 0;">
                            {{$exercises[0]->exercise_name}}/{{$exercises[0]->muscle}}

                        </h5>
                        <h6>

                        </h6>

                    </div>
                </div>
                <div class="video-display-section-footer">
                    <x-icon-container icon="sets" value="{{$exercises[0]->sets}}" />
                    <x-icon-container icon="repetions" value="{{$exercises[0]->repetitions}}" />
                    <x-icon-container icon="weight" value="{{$exercises[0]->weight}}" />
                    @if(isset($_COOKIE['timer']))
                    <x-icon-container icon="timer" value="{{$_COOKIE['timer']}}" />
                    @else
                    <x-icon-container icon="timer" value="0" />
                    @endif

                </div>
            </section>

            <section id="videos-container">
                <h4>Exercises</h4>
                <div id="div-videos-container" data-count={{count($exercises)}}>
                    @foreach($exercises as $exercise)
                    <x-video-row :exercise="$exercise" index="{{$loop->index + 1}}" />
                    @endforeach

                </div>
            </section>
        </div>
    </main>
    </div>
    <div id="bar-container">
        <div id="myBar" class="label-center" style="width: 11rem;height:11rem;font-size:15px"></div>

    </div>
</body>

</html>