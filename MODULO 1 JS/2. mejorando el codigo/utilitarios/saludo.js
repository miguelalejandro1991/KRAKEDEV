saludar=function(){
    let nombre;
    let apellido;
    nombre=recuperarTexto("txtNombre");
    apellido=recuperarTexto("txtApellido");
    alert("Hola "+nombre+" "+apellido+", bienvenido a la clase de JavaScript");
}


recuperarTexto=function(idComponebte){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponebte);
    valorIngresado=componente.value;
    return valorIngresado;
}