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
mostrarTexto=function(idComponente,mensaje){
    let componente=document.getElementById(idComponente);
    componente.innerText=mensaje;       

}
mostrarTextoEnCaja=function(idComponente,mensaje){
    let componente=document.getElementById(idComponente);
    componente.value=mensaje;
}
mostarImagen=function(idComponente, rutaImagen){
    let componente=document.getElementById(idComponente);
    componente.src=rutaImagen;
}
