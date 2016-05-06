//  npm install --save-dev gulp-babel babel-preset-es2015

var gulp = require('gulp'),
   babel = require('gulp-babel');


gulp.task('default', () => {
	return gulp.src('./source/4.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'));
});