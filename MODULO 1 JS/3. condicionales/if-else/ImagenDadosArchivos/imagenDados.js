let puntos=0;

let lanzamientos=5;


jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();         
   
}

modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("lblPuntos",puntos);
    //si el puntaje es mayor a 20 mostrar en "lblResultado" que gano 
    //si gana invocar a limpiar
       
    
    if(puntos>=20){
        cambiarTexto("lblResultado", "Ganaste");       
}else{
    cambiarTexto("lblResultado", "Sigue intentando");
}   
}
//si los lanzamientos son 0, mostrar en "lblResultado" que perdio
    //cuando llegue a 0 los lanzamientos se invoca la funcion limpiar
modificarLanzamientos=function(){
    lanzamientos=lanzamientos-1;
    cambiarTexto("lblLanzamientos",lanzamientos);
    if(lanzamientos==0){
        alert("Se acabaron los lanzamientos");
        cambiarTexto("lblResultado", "Perdiste");
        limpiar(lanzamientos);
    }   
}

limpiar=function(){
    puntos=0;
    lanzamientos=5;
    cambiarTexto("lblPuntos",puntos);
    cambiarTexto("lblLanzamientos",lanzamientos);
    cambiarImagen("imgDado", "dados.png");
    cambiarTexto("lblResultado", "");
       
    
}

mostrarCara=function(numero){
    if(numero==1){ // con == se compara valores, mientras con un = se asigna un valor
        cambiarImagen("imgDado", "dados1.png");
    } else if(numero==2){
        cambiarImagen("imgDado", "dados2.png");
    } else if(numero==3){
        cambiarImagen("imgDado", "dados3.png");
    } else if(numero==4){
        cambiarImagen("imgDado", "dados4.png");
    } else if(numero==5){
        cambiarImagen("imgDado", "dados5.png");
    } else{ // si no es ninguna de las anteriores, es 6
        cambiarImagen("imgDado", "dados6.png");
    }

}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}