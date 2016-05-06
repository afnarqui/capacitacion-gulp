 // minifica css

 var gulp = require('gulp'),
  notify = require('gulp-notify'),
  rename = require('gulp-rename'),
  prefixer = require('gulp-autoprefixer'),
  concat   = require('gulp-concat'), 
  minifycss =require('gulp-minify-css'); 

 gulp.task('minifycss', function(){
      return gulp.src('app/source/styles/*.css')
      .pipe(prefixer('last 2 version'))
      .pipe(concat('concat.css/'))
      .pipe(gulp.dest('app/production/concatcss'))
      .pipe(rename({suffix: '.min'}))
      .pipe(minifycss())
      .pipe(gulp.dest('app/production/minicss/'))
      .pipe(notify({ message: 'minifycss task complete'}))
   });

  gulp.task('default',['minifycss']);