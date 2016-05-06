// minifica archivos .js

var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  notify = require('gulp-notify'); 


   gulp.task('compress', function(){
  	  return gulp.src('app/production/concatjs/*.js')
  	  .pipe(rename({suffix: '.min'}))
  	  .pipe(uglify())
  	  .pipe(gulp.dest("app/production/minjs/"))
  	  .pipe(notify({ message: 'compress task complete' })); 
  	 
  });


    gulp.task('default',['compress'];

