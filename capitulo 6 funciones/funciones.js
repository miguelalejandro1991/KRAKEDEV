probarFunciones=function(){

    saludar();
    saludarPersona("Miguel");
    saludrJugador("miguel", "el_miguel");

}   

probarSaludarPersona = function(){

    let cmpNombre
    let nombre;
    cmpNombre = document.getElementById("txtNombre");
    nombre = cmpNombre.value;

}

    

saludarPersona = function(nombre){

    console.log("Hola, " + nombre);
}




saludrJugador = function(nombre, alias){

    console.log("Hola, " + nombre + "   " + alias);

}

saludarPersona("Miguel");{}



saludar = function(){
    console.log("Hola, mundo!");
}

saludarAmigo = function(nombre, apellido, apodo){
    let cmpNombre;
    let cmpApellido;
    let cmpApodo;   
       


     cmpNombre = document.getElementById("txtNombre");
     cmpApellido = document.getElementById("txtApellido");
     cmpApodo = document.getElementById("txtApodo");
    nombre = cmpNombre.value;
    apellido = cmpApellido.value;
    apodo = cmpApodo.value;
    console.log("Hola, " + nombre + "  " + apellido + "  " + apodo);

    
    
}

