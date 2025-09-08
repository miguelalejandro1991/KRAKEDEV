convertirKm=function() {
    let cmpKm;
    let resultado;
    let cmpResultado;

    //recuperar el valor del campo de texto
    cmpKm = document.getElementById("km");
    cmpKm = cmpKm.value;
    //convertir el valor recuperado en entero
    cmpKm=parseInt(cmpKm);    
    //calcular cuantos kilometros representan las millas ingresadas
    resultado = cmpKm * 1.60934;
    //mostrar el resultado en pantalla
    cmpResultado = document.getElementById("resultado");
    cmpResultado.innerText = "Resultado: " + resultado;   
    
   


}