//  npm install --save-dev gulp-babel babel-preset-es2015
//  
//  convierte codigo es 2016 a 2015
//  
//  

var gulp = require('gulp'),
   babel = require('gulp-babel');


gulp.task('babel', () => {
  return gulp.src('./app/source/4.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/2016A2015'));
});


gulp.task('default', ['babel']);