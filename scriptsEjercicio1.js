// alert('Funciona carga');
//Definicion de la funcion
let test = (event) => {
  // alert('Funciona test');
  //prevenimos acciones por defecto
  event.preventDefault();
  //configuramos la expresion regular
  // let permitido = /[a-zA-Z]/gim;
  let permitido = /^[a-zA-Z ]+$/i;


  //identificacion de elementos del DOM
  let elNombre = document.querySelector('#nombre').value;
  let elAsunto = document.querySelector('#asunto').value;
  let elMensaje = document.querySelector('#mensaje').value;
  //identificacion de elementos del DOM
  let elResultado = document.querySelector('.resultado');
  let elErrorNombre = document.querySelector('.errorNombre');
  let elErrorAsunto = document.querySelector('.errorAsunto');
  let elErrorMensaje = document.querySelector('.errorMensaje');

  //VALIDACION GENERAL
  if(elNombre.match(permitido) && elAsunto.match(permitido) && elMensaje.match(permitido) ){
    elResultado.innerHTML = 'Mensaje Enviado con Exito !!!';
    elErrorNombre.innerHTML = '';
    elErrorAsunto.innerHTML = '';
    elErrorMensaje.innerHTML = '';
  }
  else{

          if(!elNombre.match(permitido)){
            elResultado.innerHTML = '';
            elErrorNombre.innerHTML = 'El nombre es Requerido';
          }

          if(!elAsunto.match(permitido)){
            elResultado.innerHTML = '';
            elErrorAsunto.innerHTML = 'El asunto es Requerido';
          }

          if(!elMensaje.match(permitido)){
            elResultado.innerHTML = '';
            elErrorMensaje.innerHTML = 'El mensaje es Requerido';
          }

  }//fin else




};
// COMPORTAMIENTOS PARA EL BOTON, EL EVENTO ES CLICK
// let elBoton = document.querySelector('#botton');
// elBoton.addEventListener('click', test);

//COMPORTAMIENTOS PARA EL FORMULARIO. EL EVENTO ES SUBMIT
let form = document.querySelector('#formulario');
form.addEventListener('submit', test);
