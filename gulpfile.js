// comprimir y descomprimir archivos con .zip
// 
// el descomprimir sirve para AR, TAR.BZ2, TAR.GZ and ZIP archives

var gulp = require('gulp'),
decompress = require('gulp-decompress'),
      zip = require('gulp-zip');

gulp.task('zip', () => {
    return gulp.src('./app/source/js/*.js')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('./app/production/zip/'));
});


 
gulp.task('unzip', function () {
  return gulp.src('./app/production/zip/*.{tar,tar.bz2,tar.gz,zip}')
    .pipe(decompress({strip: 1}))
    .pipe(gulp.dest('./app/production/unzip/'));
});


gulp.task('default', ['zip'], function(){
    gulp.start('unzip');
});