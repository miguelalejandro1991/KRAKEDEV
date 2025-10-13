
mostrarImagen = function (idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}
mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}
esMayuscula=function(caracter){
    if(caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90){
        return true
    }else{
        return false
    } 

}
esMinucula=function(caracter){
    if(caracter.charCodeAt(0) >= 97 && caracter.charCodeAt(0) <= 122){
        return true
    }else{
        return false
    }
}


//verifica si el caracter es un digito (numero del 0 al 9)
//obtiene el codigo ASCII del caracter valida si el codigo corresponde a los digitos de acuerdo a la tabla ASCII
//retorna true si es digito, false en caso contrario
esDigito=function(caracter){
    if(caracter.charCodeAt(0) >= 48 && caracter.charCodeAt(0) <= 57){
        return true
    }else{
        return false
    }

}

//verifica si el caracter es un guion '-'
//obtiene el codigo ASCII del caracter valida si el codigo corresponde al guion de acuerdo a la tabla ASCII
//retorna true si es guion, false en caso contrario
esGuion=function(caracter){
    if(caracter.charCodeAt(0) == 45){
        return true;
    }else{
        return false;
    }

}


