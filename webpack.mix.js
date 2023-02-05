const mix = require('laravel-mix');
mix.disableNotifications();
mix.extract(['jquery'],'js/vendor.js')
mix.js('resources/js/app.js', 'js')
mix.css('resources/css/app.css','css')