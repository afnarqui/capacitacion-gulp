var os = require('os');
var gulp = require('gulp');
var open = require('gulp-open');


// Default usage:
// Open one file with default application

gulp.task('open', function(){
  gulp.src('./app/source/word/1.docx')
  .pipe(open({app: 'winword'));
});


// abrir con navegador dependiendo de la plataforma

/*
ar browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));

//gulp.src('./package.json').pipe(open({app: 'chrome'}));

gulp.task('browser', function(){
  gulp.src('./app/source/templates/movies.html')
  .pipe(open({app: browser}));
});

*/