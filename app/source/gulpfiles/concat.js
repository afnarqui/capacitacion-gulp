//  concatena archivos
//
var concat = require('gulp-concat'),
    notify = require('gulp-notify');

  gulp.task('concat', function(){
  	  return gulp.src('app/source/js/*.js')
  	  .pipe(concat("concat.js"))
  	  .pipe(gulp.dest("app/production/concatjs/"))
  	  .pipe(notify({ message: 'concat task complete'})); 
  	 
  });


   gulp.task('default',['concat'];