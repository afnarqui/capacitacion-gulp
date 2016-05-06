const gulp = require('gulp');
const zip = require('gulp-zip');
const del = require('del');
const decompress = require('gulp-decompress');

gulp.task('zip', () => {
    return gulp.src('./app/source/js/*.js')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('dist'));
});


gulp.task('decompress', function () {
    return gulp.src('./dist/*.{tar,tar.bz2,tar.gz,zip}')
        .pipe(decompress({strip: 1}))
        .pipe(gulp.dest('./dist'))
        //.pipe(del('./dist/*.{tar,tar.bz2,tar.gz,zip}'))
        //.pipe(dest('./dist/'))
});


  gulp.task('dele', function(){
    return del('./dist/*.{tar,tar.bz2,tar.gz,zip}')
  });

  gulp.task('deletedir', function(){
    return del('./dist')
  });


var gulpSequence = require('gulp-sequence');

gulp.task('all', gulpSequence(['zip'],['decompress'],'dele'));