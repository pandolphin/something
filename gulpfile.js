'use strict'

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/styles/*.scss", ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/styles/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/styles"))
        .pipe(browserSync.stream());
});

//TODO build

gulp.task('default', ['serve']);

