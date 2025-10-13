ejecutarPrueba1 = function () {
    let mensaje
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);

}
recorrerCadena = function (cadena) {
    //0123
    //juan

    let caracter;

    for (let posicion = 0; posicion<cadena.length; posicion++) {
        caracter=cadena.charAt(posicion);
        console.log("caracter "+posicion+"posicion: "+posicion);

    }
    
    for(let posicion=0;posicion<=cadena.length-1;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("CARACTER "+posicion+"posicion: "+posicion);

    }
}

//crea la funcion invertirCadena que reciba una cadena y la devuelva invertida
//juan -> nauj
//ana -> ana
//tambien que la imprima en pantalla en el h2 resultado
ejecutarPrueba2=function(){
    
    let mensaje
    mensaje=recuperarTexto("txtCadena");
    let cadenaInvertida=invertirCadena(mensaje);
    mostrarTexto("resultado",cadenaInvertida);
}
invertirCadena=function(cadena){
    
    let caracter;
    for(let posicion=cadena.length-1;posicion>=0;posicion--){
        caracter+=cadena.charAt(posicion);
        
    }
    return caracter;
}
