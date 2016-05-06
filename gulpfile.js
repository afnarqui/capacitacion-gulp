// crea un json apartir de una tarea
 
var gulp = require('gulp');

// Do this
var storage = require('gulp-storage')(gulp);

// or do this
//require('gulp-storage')(gulp);

gulp.storage.create('myStorage', 'usuarios.json');


gulp.task('ingresarUsuarios', function(){
    this.storage.set('usuarios', [
                { "nombre":"carlos","edad":23,"direccion":"calle 3"},
                { "nombre":"sergio","edad":33,"direccion":"calle 10"},
                { "nombre":"andres","edad":66,"direccion":"calle 38"},
                { "nombre":"miguel","edad":21,"direccion":"calle 31"}
            ]);
});


//  Create a storage.clear(); // Delete everything
//  Create a storage.delete( key ); // Delete a specific property

   gulp.task('default',['ingresarUsuarios'], function(){

        var appName = this.storage.get('usuarios');
        console.log(appName)
        //=> myApp

   });