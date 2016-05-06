// crea un back up 
// 
// 
// despues de crear el back up usar el 
// plugin de eliminar y borrar la carpeta vacia
// que queda es un error del plugin

var gulp = require('gulp'),
  safe = require('gulp-safe'),
  del = require('del');
 
gulp.task('backup', function() {
  var dest;
 
  dest = "./";
 
  return gulp.src("./app/source/gulpfiles/")
    .pipe(safe(dest))
    .pipe(gulp.dest(dest));
});


//delete dir and files


gulp.task('clean:gulpfiles', function () {
  return del([
    './gulpfiles'
  ]);
});


gulp.task('default', ['backup'], function(){
    gulp.start('clean:gulpfiles');
});