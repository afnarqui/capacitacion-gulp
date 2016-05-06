//minificar html

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  notify = require('gulp-notify'),
  minifyhtml = require('gulp-minify-html');   


    gulp.task('minifyhtml', function(){
      return gulp.src('app/source/templates/*.html')
      .pipe(concat('concat.html'))
      .pipe(gulp.dest('app/production/concathtml/'))
      .pipe(rename({suffix: '.min'}))
      .pipe(minifyhtml())
      .pipe(gulp.dest('app/production/htmlmin/'))
      .pipe(notify({ message: 'minifyhtml task complete'}))
    });

     gulp.task('default',['minifyhtml']);
