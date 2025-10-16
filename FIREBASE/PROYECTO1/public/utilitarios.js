
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


esNotaValida = function (nota, idComponenteError) {
    if (isNaN(nota)) {
        mostrarTexto(idComponenteError, "DEBE INGRESAR UN NÚMERO VÁLIDO");
        return false;

    } else {
        if (nota >= 0 && nota <= 10) {
            mostrarTexto(idComponenteError, "");
            return true;

        }else{
            mostrarTexto(idComponenteError, "LA NOTA DEBE ESTAR ENTRE 0 Y 10");
            return false;
        }

    }
}

