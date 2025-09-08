convertirFahrenheit = function(){
    let grados;
    let resultado;
    let cmpResultado;

    // Recuperar el valor del campo de texto
    grados = document.getElementById("celsius");
    grados = grados.value;
    // Convertir el valor recuperado en entero
    grados = parseInt(grados);
    // Calcular cuantos grados Fahrenheit representan los grados Celsius ingresados
    resultado = (grados * 9/5) + 32;
    // Mostrar el resultado en pantalla con la palabra Fahrenheit
    cmpResultado = document.getElementById("resultado");
    cmpResultado.innerText =  resultado + " Fahrenheit";
    



}