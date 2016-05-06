var gulp = require('gulp'),
 connect = require('gulp-connect');

 gulp.task('connect1', function(){
  connect.server();
 });

 gulp.task('default', ['connect1']);