// valida que los archivos .json esten bien construidos

var jsonlint = require('gulp-jsonlint'),
       util = require('gulp-util'),
        gulp = require('gulp');

var myCustomReporter = function (file) {
    util.log('File ' + file.path + ' is not valid JSON.');
};

gulp.task('validarJson', () => {
    return gulp.src('./app/source/json/*.json')
      .pipe(jsonlint())
      .pipe(jsonlint.reporter(myCustomReporter));
});


  gulp.task('default', ['validarJson']);