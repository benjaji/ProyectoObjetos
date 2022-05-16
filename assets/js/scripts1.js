var carro = new Object();
carro.marca = 'Toyota';
carro.modelo ='Corola';
carro.fecha = '2022';

console.log(carro.modelo);
console.log(carro['modelo']);
console.log(carro);


 var vaca = new Object();
 vaca.sonido = function(){
   console.log('Moooooooooooooooooo');
 };
 vaca['sonido']();


 var cuadrado = {ancho: 5, largo: 5};
 console.log(cuadrado);

 var perro = {
   nombre: 'fido',
   ladrar: function(){
     console.log('guau guau');
   },
 };

perro.ladrar();
perro['ladrar']();


let nombre = 'Didier';

var persona = new Object();
persona.nombre = 'Camila';
persona.saludar = function(){
  console.log('Hola, me llamo '+ this.nombre);
};
persona['saludar']();
