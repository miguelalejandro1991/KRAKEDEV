let notas = [];

agregarElementos = function () {
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerArreglo = function () {
    let notaR;
    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        console.log(notaR);
    }
}

probarAgregar = function () {
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota = function (nota) {
    notas.push(nota);
}


/*En el archivo ejercicios1.js, agregar una función calcularPromedio, que no recibe parámetros y realiza lo siguiente:
1. Declarar una variable llamada sumaNotas (inicializar con valor de 0) y otra variable llamada promedio
2. Con un for, barrer todo el arreglo de notas y en cada iteración sumar la nota que obtiene del arreglo a la variable sumaNotas.
3. Al salir del for, dividir sumaNotas para el total de elementos del arreglo de notas y guardar el resultado en la variable promedio.
4. Retornar promedio.
*/

calcularPromedio = function () {
    let sumaNotas = 0;
    let promedio;
    for (let i = 0; i < notas.length; i++) {
        sumaNotas = sumaNotas + notas[i];
    }
    promedio = sumaNotas / notas.length;
    return promedio;

}


/*En ejercicios1.js agregar una función llamada ejecutarPromedio que invoca a calcularPromedio,
 guarda el retorno en una variable y muestra el valor de la variable en pantalla.*/

ejecutarPromedio = function () {
    let promedio;
    promedio = calcularPromedio();
    mostrarTexto("lblResultado", "El promedio es: " + promedio);
}