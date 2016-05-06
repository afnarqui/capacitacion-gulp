var jsonlint = require('gulp-jsonlint'),
       util = require('gulp-util'),
        gulp = require('gulp');

var myCustomReporter = function (file) {
    util.log('File ' + file.path + ' is not valid JSON.');
};

gulp.task('validarJson', () => {
    return gulp.src('./app/*.json')
    .pipe(jsonlint())
    .pipe(jsonlint.reporter(myCustomReporter));
});