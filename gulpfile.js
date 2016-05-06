const gulp = require('gulp');
const zip = require('gulp-zip');
const del = require('del');
const decompress = require('gulp-decompress');
const gulpSequence = require('gulp-sequence');

gulp.task('zip', () => {
    return gulp.src('./app/source/js/*.js')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('dist/comprimido/'));
});


gulp.task('decompress', function () {
    return gulp.src('./dist/comprimido/*.{tar,tar.bz2,tar.gz,zip}')
        .pipe(decompress({strip: 1}))
        .pipe(gulp.dest('./dist/descomprimido/'))
        //.pipe(del('./dist/*.{tar,tar.bz2,tar.gz,zip}'))
        //.pipe(dest('./dist/'))
});


  gulp.task('dele', function(){
    return del('./dist/comprimido/*.{tar,tar.bz2,tar.gz,zip}')
  });

  gulp.task('deletedir', function(){
    return del('./dist')
  });




gulp.task('all', gulpSequence(['deletedir'],['zip'],['decompress']));


   gulp.task('default',['all']);