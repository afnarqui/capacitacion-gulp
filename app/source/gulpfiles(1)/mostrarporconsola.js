// imprime por consola el archivo q se le pasa


var gulp = require('gulp');
var cat  = require('gulp-cat');

gulp.task('default', function() {
    return gulp.src('./app/source/js/6.js')
        .pipe(cat());
});