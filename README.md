# Laravel Elixir HTML minify

This package allows you to minify static HTML files or the HTML that gets generated by your Blade template files. It works very well and is very configurable. It uses [gulp-htmlmin]((https://github.com/jonschlinkert/gulp-htmlmin)), which uses [html-minifier](https://github.com/kangax/html-minifier).

## Installation

First you need to install this package.

```sh
npm install --save-dev laravel-elixir-minify-html
```

Then require this package into your `gulpfile.js`.

```js
var Elixir = require('laravel-elixir');
require('laravel-elixir-minify-html');
```

Then call the `html` method from your mix.

The `html` method can take up to four arguments:

  1. `src` (required): The files to minify.
  2. `outputPath` (optional): The output folder (defaults to `storage/framework/views`).
  3. `options` (optional):  Options object passed to the `gulp-htmlmin` task.

This task defines a watcher for the path defined in `src`.

Sample code:

```js
Elixir(function(mix) {
    mix.html('storage/framework/views/*', 'storage/framework/views/', {collapseWhitespace: true, removeAttributeQuotes: true, removeComments: true, minifyJS: true});
});
```