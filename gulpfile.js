
// inyecta condigo js o css en cualquier pag html, jade, 
// jsx , less, slm, haml and sass / scss

var gulp = require('gulp');
  inject = require('gulp-inject'),
  notify = require('gulp-notify');

gulp.task('inject', function () {
  var target = gulp.src('./app/source/templates/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./app/source/js/*.js', './app/source/styles/*.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./app/source/templates/'))
    .pipe(notify({ message: 'inject task complete' })); 
});


   gulp.task('default',['inject']);