//Include or exclude gulp files from the stream based on a condition
//Exclude things from entering the stream


var uglify = require('gulp-uglify');

gulp.task('task', function() {
  gulp.src(['./**/*.js', '!./node_modules/**'])
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});


//Remove things from the stream

var gulpIgnore = require('gulp-ignore');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

var condition = './gulpfile.js';

gulp.task('task', function() {
  gulp.src('./**/*.js')
    .pipe(jshint())
    .pipe(gulpIgnore.exclude(condition))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});


//Filter only matching things

var gulpIgnore = require('gulp-ignore');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

var condition = './app/source/js/**.js';

gulp.task('task', function() {
  gulp.src('./**/*.js')
    .pipe(jshint())
    .pipe(gulpIgnore.include(condition))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});


//Conditionally filter content, include everything down-stream Condition

var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');

var condition = true;

gulp.task('task', function() {
  gulp.src('./app/source/**/*.js')
    .pipe(gulpif(condition, uglify()))
    .pipe(gulp.dest('./dist/'));
});