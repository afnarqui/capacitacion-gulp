//comprime imagenes

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('imagenes', function () {
    return gulp.src(['./app/imagenes/*.*'])
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'));
});
