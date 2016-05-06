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