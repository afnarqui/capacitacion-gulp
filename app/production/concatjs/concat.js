var suma = function (a , b){
   
	//hola
   return ( a + b );
};


var restar;
restar = function(a,b){
	return (a-b);
};

var saludo;
saludo = function(nombre){
	return ("hola " + nombre);
};

var alumnos = {
	nombre: "julio cesar",
	apellido: "naranjo",
	direccion: "calle de rodal",
	telefono: "8907098"
};
var paises = [ "colombia", "mexico", "new york", "bolivia" ];
function persona(nombre, edad){
	this.nombre = nombre || "Anonimo";
	this.edad = edad || 0;
}


persona.prototype.getNombre = function(){
	return this.nombre;
};

persona.prototype.setNombre = function(nombre){
	this.nombre = nombre;
};

persona.prototype.setEdad = function(edad){
	this.edad = edad;
};

persona.prototype.getNombreEdad = function(){
	return this.nombre + " tiene " + this.edad + " años";
};
const division = (numero1,numero2) => numero1 / numero2 ;