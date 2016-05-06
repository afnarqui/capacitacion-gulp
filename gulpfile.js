// edita el json pasandole todo lo escrito en el object
// pasado a jeditor

var jeditor = require("gulp-json-editor"),
       gulp = require('gulp');

gulp.task('editor', function(){
    return gulp.src("./app/source/json/empleados.json")
    .pipe(jeditor({
      "tres": {
        "nombre": "cesar",
        "apellido": "ramirez",
        "edad": 21
      },
      'version': '1.2.3'

    }))
    .pipe(gulp.dest("./app/source/json/"));
});

 gulp.task('default', ['editor']);