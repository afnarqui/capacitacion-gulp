// comprime en zip archivos

const gulp = require('gulp');
const zip = require('gulp-zip');

gulp.task('default', () => {
    return gulp.src('./app/source/js/*.js')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('dist'));
});