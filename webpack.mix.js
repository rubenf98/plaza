const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

//Setting root folders for easier importing
mix.webpackConfig({
    resolve: {
        modules: [
            path.resolve(__dirname, 'resources/assets/js'),
            'node_modules'
        ]
    }
});

if (mix.inProduction()) {
    mix.version();
}