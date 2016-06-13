var gulp         = require('gulp');
var elixir       = require('laravel-elixir');
var htmlmin      = require('gulp-htmlmin');

/**
 * Minify static html pages, useful when using html partials loaded though ajax
 * @param  {string}        src        The files to minify
 * @param  {string|object} outputPath The output path, or an options object
 * @param  {object}        options    The options object passed to the minify task
 */
elixir.extend('html', function(src, outputPath, options) {
    // If the options object was provided on the outputPath parameter
    if (typeof outputPath == 'object') {
        options = outputPath;
        outputPath = null;
    }

    // Parse the source and output paths
    src = src || 'storage/framework/views/*';
    outputPath = outputPath || 'storage/framework/views/';

    var paths = {
        src: src,
        outputPath: outputPath
    };

    options = typeof options == 'undefined' ? {} : options;

    new elixir.Task('minify', function() {
        var minifyOptions = options;

        return gulp.src(paths.src)
            .pipe(htmlmin(minifyOptions))
            .pipe(gulp.dest(paths.outputPath))
            .pipe(new elixir.Notification('HTML Minified!'));
    })
    // Register watcher for source path
    .watch(paths.src);

});