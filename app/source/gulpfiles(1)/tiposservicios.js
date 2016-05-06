
//  <-- gulp para servidor  ->>  //

// crea servicio sin parametros

var gulp = require('gulp'),
 connect = require('gulp-connect');

 gulp.task('connect1', function(){
  connect.server();
 });

 gulp.task('default', ['connect']);


// crea servicio con la ruta especificada

var gulp = require('gulp'),
 connect = require('gulp-connect');


 gulp.task('connect2', function(){
  connect.server({
    root: 'app/source/templates/'
  });
 });

 gulp.task('default',['connect']);


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
  gulp.src('./app/*.html')
  .pipe(connect.reload());
 });

 gulp.task('watch', function(){
  gulp.watch(['./app/*.html'],['reloadHtml']);
 });

 gulp.task('default',['connect3','watch']);

