var gulp = require('gulp');
var browserSync = require('browser-sync').create();

require('./less.js');
require('./marko.js');

gulp.task('watch', ['less', 'marko'], function () {
    gulp.watch(['css/*.less'],['less']);
    gulp.watch(['src/**/*.marko','*.marko'],['marko']);
});

gulp.task('serve', ['watch'], function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch([
        'js/*.js',
        '**/*.css',
        '**/*.html'
    ]).on('change', browserSync.reload);
});
