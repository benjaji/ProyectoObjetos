function Estudiante(nombre, apellido){
  this.nombre = nombre;
  this.apellido = apellido;
}

Estudiante.prototype.edad = 25;

Estudiante.prototype.saludar =  function(){
  console.log('Hola, mi nombre es: ' + this.nombre + ' y tengo ' + this.edad + ' años');
};

var e1 = new Estudiante('Galia', 'Gijon');
var e2 = new Estudiante('Enrique', 'Cordova');
var e3 = new Estudiante('Gonzalo');
/*
e2.saludar = function(){
  console.log('Hola, mi nombre es: ' + this.nombre);
};
*/
console.log(e1);
console.log(e2);
console.log(e3);

e1.edad = 22;

e1.saludar();
e2.saludar();
e3.saludar();

console.log(e1.edad);
