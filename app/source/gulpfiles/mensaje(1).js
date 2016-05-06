// ejecuta procesos desde la consola


var gulp = require('gulp'),
     run = require('gulp-run');


// use gulp-run to start a pipeline
gulp.task('hello-world', function() {
  return run('echo Hello World').exec()    // prints "Hello World\n".
    .pipe(gulp.dest('output'))      // writes "Hello World\n" to output/echo.
  ;
})