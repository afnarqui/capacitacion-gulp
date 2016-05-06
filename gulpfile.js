//Include or exclude gulp files from the stream based on a condition
//Exclude things from entering the stream


var uglify     = require('gulp-uglify'),
    gulp       = require('gulp'),
    gulpif     = require('gulp-if'),
    uglify     = require('gulp-uglify'),
    gulpIgnore = require('gulp-ignore'),
    uglify     = require('gulp-uglify'),
    jshint     = require('gulp-jshint'),
    gulpIgnore = require('gulp-ignore'),
    uglify     = require('gulp-uglify'),
    concat     = require('gulp-concat'),
    rename     = require('gulp-rename')
    jshint     = require('gulp-jshint');



gulp.task('task1', function() {
  gulp.src(['./app/source/js/*.js', '!./app/source/js/5.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./dist/interrogacion'));
});


//Remove things from the stream


gulp.task('task2', function() {
   var condition = ['1.js', '2.js'];

  gulp.src('./app/source/js/*.js')
    .pipe(jshint())
    .pipe(gulpIgnore.exclude(condition))
    .pipe(concat('concat.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/exclude/'));
});


//Filter only matching things 

gulp.task('task3', function() {
  var condition = [ '1.js', '6.js'];
  gulp.src('./app/source/js/*.js')
    .pipe(jshint())
    .pipe(gulpIgnore.include(condition))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/include/'));
});


//Conditionally filter content, include everything if Condition true


gulp.task('task4', function() {
  var condition = true;
  gulp.src('./app/source/js/*.js')
    .pipe(gulpif(condition, uglify()))
    .pipe(gulp.dest('./dist/if/'));
});


  gulp.task('default', ['task4']);