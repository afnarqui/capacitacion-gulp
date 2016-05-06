
// valida los archivos js

var notify = require('gulp-notify'),
    gulp   = require('gulp'),
    jshint = require('gulp-jshint');


 gulp.task('jsvalidate', function(){
  	  return gulp.src('app/source/js/*.js')
  	  .pipe(jshint())
  	  .pipe(jshint.reporter("default"))
  	  .pipe(notify({ message: 'jsvalidate task complete'})); 
  	 
  });

  gulp.task('default',['jsvalidate']);