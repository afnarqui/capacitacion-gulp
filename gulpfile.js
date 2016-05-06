// install dependencias encontradas en bower.json o package.json

var install = require("gulp-install"),
       gulp = require('gulp');

gulp.task('install', function(){
  gulp.src(['./bower.json', './package.json'])
     .pipe(install());
});



   gulp.task('default',['install']);