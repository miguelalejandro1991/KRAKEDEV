saludar=function(){
    let nombre;
    let apellido;
    nombre=recuperarTexto("txtNombre");
    apellido=recuperarTexto("txtApellido");
    let edad = recupararInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    alert("HOLA "+nombre+" "+apellido+" tienes "+edad+" años y mides "+estatura+" metros");
}


recuperarTexto=function(idComponebte){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponebte);
    valorIngresado=componente.value;
    return valorIngresado;
}

recupararInt=function(idComponente){
    let valorCaja;
    let valorEntero;
    valorCaja=recuperarTexto(idComponente);
    valorEntero=parseInt(valorCaja);
    return valorEntero;
}
recuperarFloat=function(idComponente){
    let valorCaja;
    let valorFloat;
    valorCaja=recuperarTexto(idComponente);
    valorFloat=parseFloat(valorCaja);
    return valorFloat;
}