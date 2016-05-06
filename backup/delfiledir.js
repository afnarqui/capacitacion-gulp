//delete dir and files

var gulp = require('gulp');
var del = require('del');

gulp.task('clean:build', function () {
  return del([
    'app/build/'
  ]);
});

gulp.task('default', ['clean:build']);