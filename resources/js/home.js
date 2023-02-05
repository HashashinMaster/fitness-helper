import $ from 'jquery';

$('video')
    .on('ended', function() {
        $(this)
            .replaceWith(`<img src='/pics/7bal.jpg' />`)
    })