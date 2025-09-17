jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    //console.log("El valor del dado es: "+aleatorio);
    document.getElementById("lblNumero");
    cambiarTexto("lblNumero", aleatorio);
    if(aleatorio>3){
        console.log("Ganaste");
        console.log("Felicidades");

    }else{
        console.log("Perdiste");
        console.log("Intenta de nuevo");
    }
    
}

//crear una funcion llamada lanzarDado
//no recibe parametros
//retorna un numero aleatorio entre 1 y 6 

lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    let valorRecuperado;
    aleatorio=Math.random(); // entre 0 y 1
    numeroMultiplicado=aleatorio*6; 
     
    numeroEntero=parseInt(numeroMultiplicado); //entre 0 y 5
     
    valorDado=numeroEntero+1; //entre 1 y 6
   
    return valorDado;

}