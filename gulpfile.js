
//delete dir and files
//
//crear carpeta y archivos para ver implementacion

var gulp = require('gulp');
var del = require('del');

gulp.task('clean:build', function () {
  return del([
    'app/source/paraeliminar/'
  ]);
});

gulp.task('default', ['clean:build']);