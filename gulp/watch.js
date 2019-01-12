var gulp = require('gulp');
var browserSync = require('browser-sync').create();

require('./less.js');

gulp.task('watch', ['less'], function () {
    gulp.watch(['css/*.less'],['less']);
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
