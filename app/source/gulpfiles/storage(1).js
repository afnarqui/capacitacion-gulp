// crea un json apartir de una tarea
 
var gulp = require('gulp');

// Do this
var storage = require('gulp-storage')(gulp);

// or do this
//require('gulp-storage')(gulp);

gulp.storage.create('myproyecto', 'proyecto.json');

gulp.task( 'any', ['anotherTask'], function(){
    var appName = this.storage.get('valores');
    console.log(appName)
    //=> myApp
});

gulp.task('anotherTask', function(){
    this.storage.set('usuarios', { "nombre":"carlos","edad":23,"direccion":"calle 3"},
                                 { "nombre":"sergio","edad":33,"direccion":"calle 10"},
                                 { "nombre":"andres","edad":66,"direccion":"calle 38"},
                                 { "nombre":"miguel","edad":21,"direccion":"calle 31"});
});


//  Create a storage.clear(); // Delete everything
//  Create a storage.delete( key ); // Delete a specific property