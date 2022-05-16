function Vehiculos(marca){
  var _marca = marca;
  Object.defineProperty(this, "_getMarca", {
      get: function(){
        return _marca;
      }  //fin function
  } //fin del objeto
);//fin  Object.defineProperty

Object.defineProperty(this, "_setMarca", {
  set: function(marca){
    _marca = marca;
  }//Fin function
}//fin objeto
);
}//fin vehiculos
Vehiculos.prototype.getMarca = function(){
  return this._getMarca;
}
Vehiculos.prototype.setMarca = function(marca){
  this._setMarca = marca;
}

var vehiculo1 = new Vehiculos('Ford');
console.log(vehiculo1._marca);
console.log(vehiculo1.getMarca() );
