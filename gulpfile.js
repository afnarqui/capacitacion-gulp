// convierte codigo a simbolos para q nuestro código 
// no sea facil de leer

var gulp = require('gulp');
var obfuscate = require('gulp-obfuscate');
 //  replaceMethod : ZALGO or LOOK_OF_DISAPPROVAL

gulp.task('obfuscar', function () {
  return gulp.src('./app/source/js/6.js')
    .pipe(obfuscate({ replaceMethod: obfuscate.ZALGO }))
    .pipe(gulp.dest('./dest/'))
});



   gulp.task('default',['obfuscar']);