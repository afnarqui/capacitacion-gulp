// crea un back up 

var gulp = require('gulp'),
  safe = require('gulp-safe');
 
gulp.task('backup', function() {
  var dest;
 
  dest = "./backup";
 
  return gulp.src("./app/source/gulpfiles/*js")
    .pipe(safe(dest))
    .pipe(gulp.dest(dest));
});

gulp.task('default', ['backup']);
