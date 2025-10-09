/*crear la funcion obtenerAleatorio que obtiene un numero aleatorio entero entre 1 al 3, retorna 
un numero entero randomico entre 1 y 3, ambos incluidos*/

obtenerAleatorio=function(){
    return parseInt(Math.random()*3)+1;

}

/* crear la funcion generarElemento que genera randomicamente las cadenas "piedra", "papel" o "tijera".
algoritmo: genera un numero randomico de 1 al 3, invocando a la funcion obtenerAleatorio.
si el numero es 1, retorna "piedra"
si el numero es 2, retorna "papel"
si el numero es 3, retorna "tijera" */

generarElemento=function(){
    let numero=obtenerAleatorio();
    if(numero==1){
        return "piedra";
    } else if(numero==2){
        return "papel";
    } else{
        return "tijera";
    }

}

/* crear la funcion determinar ganador, determina cual de los dos jugadores gano la ronda.
retorna 0 si empatan, 1 si gana el jugador 1, 2 si gana el jugador 2*/

determinarGanador=function(jugador1, jugador2){
    //console.log(jugador1 +" "+jugador2);
    if(jugador1==jugador2){
        return 0;
    } else if(
        (jugador1==="piedra" && jugador2==="tijera") ||
        (jugador1==="papel" && jugador2==="piedra") ||
        (jugador1==="tijera" && jugador2==="papel")){
        return 1;
    } else{
        return 2;
    }

}

/* crear la funcion generarRuta, genera la ruta de la imagen, en base al nombre que recibe, la ruta es
./imagenes/<nombre>.png.
retorna la ruta de la imagen que tiene que pintar*/

generarRuta=function(nombre){
    if(nombre=="piedra"){
        return "./imagenes/piedra.png";
    } else if(nombre=="papel"){
        return "./imagenes/papel.png";
    } else{
        return "./imagenes/tijeras.png";
    }

}


