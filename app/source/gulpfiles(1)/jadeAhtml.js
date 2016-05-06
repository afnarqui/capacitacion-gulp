// tranforma archivos jade a html

var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  gulp.src('./app/source/templates/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist/'))
});