let palabraSecreta = " ";
let intentos = 0;
let coincidencias = 0;
let errores = 0;



esMayuscula = function (caracter) {
    if (caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90) {
        return true
    } else {
        return false
    }

}

/* crear la funcion guardarPalabra.
Toma la palabra de la caja de texto.
Validar que la palabra ingresada tenga exactamente 5
caracteres y que estos sean letras mayúsculas, si no cumple
estas condiciones, mostrar un alert indicando que debe ingresar
una palabra de 5 letras mayúsculas.
Si pasa las validaciones, guardar en una variable global llamada
palabraSecreta
no retorna nada
Probar que se muestra en consola la palabra ingresada
*/

guardarPalabra = function () {
    let palabraIngresada;
    palabraIngresada = recuperarTexto("txtSecreta");
    let esValida = true;
    let error = " ";
    if (palabraIngresada.length == 5) {
        for (let i = 0; i < palabraIngresada.length; i++) {
            // console.log(esMayuscula(palabraIngresada[i]))
            if (!esMayuscula(palabraIngresada[i])) {
                esValida = false;
                alert("La palabra debe contener solo letras mayusculas");
                break;
            }
        }

    } else {
        esValida = false;
        alert("La palabra debe tener 5 letras");
    }
    if (esValida) {
        palabraSecreta = palabraIngresada;
        console.log(palabraSecreta);
    }
}

/*crear la funcion mostrarLetra.
Muestra la letra que recibe como parámetro en alguno de los
siguientes componentes:
div0, div1, div2, div3, div4
Usando el siguiente criterio: si la posicion es 0, muestra en el
div0, si la posicion es 1, muestra en el div1, y así sucesivamente.
no retorna nada*/

mostrarLetra = function (letra, posicion) {
    if (posicion == 0) {
        mostrarTexto("div0", letra);
    } else if (posicion == 1) {
        mostrarTexto("div1", letra);
    } else if (posicion == 2) {
        mostrarTexto("div2", letra);
    } else if (posicion == 3) {
        mostrarTexto("div3", letra);
    } else if (posicion == 4) {
        mostrarTexto("div4", letra);
    }

}

/* crear la funcion validar.
Agregar una variable local llamada letrasEncontradas, su
objetivo es contar cuantas letras encontró.
Se barre uno a uno todos los caracteres de la palabra secreta y
en cada iteración verifica si coincide con la letra que recibe
como parámetro.
Si son iguales llama a mostrarLetra, la posición en la que debe
mostrar es la posición en la que encontró la variable. Además
incrementar la variable letrasEncontradas en 1.
no retorna nada*/

validar = function (letra) {
    let letrasEncontradas = 0;
    for (let i = 0; i < palabraSecreta.length; i++) {

        if (letra == palabraSecreta[i]) {
            letrasEncontradas++;
            mostrarLetra(letra, i);
        }
    }
    if (!palabraSecreta.includes(letra)) {
        alert("la letra" + letra + "no se encuentra en la palabra secreta");
        errores++;
    }

}

/*Crear la función que será invocada desde el botón VALIDAR
Toma la letra de la caja de texto. Si la letra es mayúscula invoca
a la función validar, caso contrario muestra un alert SOLO SE
ACEPTAN MAYUSCULAS y no invoca a validar.
no retorna nada*/

IngresarLetra = function () {
    let letraIngresada;
    letraIngresada = (document.getElementById("txtLetra").value).toUpperCase();
    intentos++;
    validar(letraIngresada);
    mostrarAhorcado();
    if (intentos == 10) {
        alert("has perdido, la palabra secreta era: " + palabraSecreta);
    }
    if (coincidencias == 5) {
        alert("Felicidades, has ganado");
        mostrarImagen("ahorcadoImagen", "ganador.gif");
    }


}

/*crear la funcion mostrarAhorcado
Si errores es igual a 1, mostrar la imagen ahorcado1.jpg, si es 2
mostrar ahorcado2.jpg y así sucesivamente.
no retorna nada */

mostrarAhorcado = function () {
    if (errores == 1) {
        mostrarImagen("ahorcadoImagen", "ahorcado_01.png");
    } else if (errores == 2) {
        mostrarImagen("ahorcadoImagen", "ahorcado_02.png");

    } else if (errores == 3) {
        mostrarImagen("ahorcadoImagen", "ahorcado_03.png");
    } else if (errores == 4) {
        mostrarImagen("ahorcadoImagen", "ahorcado_04.png");
    } else if (errores == 5) {
        mostrarImagen("ahorcadoImagen", "ahorcado_05.png");
    } else if (errores == 6) {
        mostrarImagen("ahorcadoImagen", "ahorcado_06.png");
    } else if (errores == 7) {
        mostrarImagen("ahorcadoImagen", "ahorcado_07.png");
    } else if (errores == 8) {
        mostrarImagen("ahorcadoImagen", "ahorcado_08.png");
    } else if (errores == 9) {
        mostrarImagen("ahorcadoImagen", "ahorcado_09.png");
    } else if (errores == 10) {
        mostrarImagen("ahorcadoImagen", "ahorcado_10.png");
    }
    if (intentos == 10) {
        mostrarImagen("ahorcadoImagen", "gameOver.gif");
    }
}





