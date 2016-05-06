// junta varias imagenes para mejorar rendimiento

var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
  var spriteData = gulp.src('./app/source/imagenes/*.jpg')
  .pipe(spritesmith({
    imgName: 'sprite.jpg',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('./out/'));
});


   gulp.task('default',['sprite']);