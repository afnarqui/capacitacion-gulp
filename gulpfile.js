
 // crea servicio con la ruta especificada

var gulp = require('gulp'),
 connect = require('gulp-connect');


 gulp.task('connect2', function(){
  connect.server({
    root: 'app/source/templates/'
  });
 });

 gulp.task('default',['connect']);