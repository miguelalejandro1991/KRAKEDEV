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



