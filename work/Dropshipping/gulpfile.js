'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    //.pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
  gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('uglify', function() {
  return gulp.src('js/script.js')
     .pipe(rename("script.min.js"))
    .pipe(rename(function (path) {
     //path.basename += ".min";
     return path;
     }))
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});
