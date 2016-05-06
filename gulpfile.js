
// crea servicio con la ruta especificada,livereload,watch y puerto

var gulp = require('gulp'),
 connect = require('gulp-connect');


 gulp.task('connect3', function(){
  connect.server({
    root: 'app/source/templates/',
    port: 3333,
    livereload: true
  });
 });

 gulp.task('reloadHtml', function(){
  gulp.src('./app/source/templates/*.html')
  .pipe(connect.reload());
 });

 gulp.task('watch', function(){
  gulp.watch(['./app/source/templates/*.html'],['reloadHtml']);
 });

 gulp.task('default',['connect3','watch']);