
//comprime imagenes

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('imagenes', function () {
    return gulp.src(['./app/source/imagenes/*.*'])
        .pipe(imagemin())
        .pipe(gulp.dest('./app/production/imagenesmin/'));
});

gulp.task('default',['imagenes']);