/* Estudiante sin Encapsulacion */
function Estudiante(nombre){
  this.nombre = nombre;
}

var estudiante1 = new Estudiante('juan');
console.log(estudiante1);
estudiante1.nombre = 'lucas';
console.log(estudiante1);

/* Estudiante con encapsulación */
function Estudiante2(nombre2){
  var getNombre = nombre2;
  Object.defineProperty(this, "getNombre", {value: getNombre});
}
var estudiante2 = new Estudiante2('maria');
console.log(estudiante2);
estudiante2.getNombre = 'marta';
console.log(estudiante2);
