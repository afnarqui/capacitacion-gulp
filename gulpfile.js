// tranforma archivos jade a html

var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('jade', function() {
  

  gulp.src('./app/source/templates/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist/jadeAhtml/'))
});


   gulp.task('default',['jade']);