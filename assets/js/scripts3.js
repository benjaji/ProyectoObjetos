function Jugador(nombre){
  this.nombre = nombre ;
  this.puntos = 0;
}

Jugador.prototype.agregarPuntos = function(){
  // this.puntos = this.puntos + 100;
  this.puntos += 100;
}

var jugador1 = new Jugador('Francisca');
var jugador2 = new Jugador('Camila');
console.log(jugador1);

jugador1.agregarPuntos();
jugador2.agregarPuntos();

console.log(jugador1);
