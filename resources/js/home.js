import $ from 'jquery';
import { sample } from 'lodash';
const pics = ['7bal.jpg','ww.jpg','push.jpg'];
$('video')
    .on('ended', function() {
        $(this).replaceWith(`<img src='/pics/${sample(pics)}' />`);
    })