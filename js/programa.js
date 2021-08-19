
function datosEdad(elEvento){
    elEvento.preventDefault();

    var nombre = document.querySelector("#nombre").value;
    var fecha  = document.querySelector("#fecha").value;

    var bienvenida =document.querySelector("#bienvenida");

   if(fecha >= 2008){

        bienvenida.innerHTML = "Hola niño " + nombre + 
        ",tu nacisites en " + fecha;

    }else if(fecha >= 2004){
        bienvenida.innerHTML = "Hola joven  " + nombre + 
        ",tu nacisites en " + fecha;

    }else {
        bienvenida.innerHTML = "Hola Señor  " + nombre +
         ",tu nacisites en " + fecha;
    }
}

var formulario = document.querySelector("#formulario");
formulario.addEventListener("submit",datosEdad);

