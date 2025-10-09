/* agregar la funcion jugar, que recibe como parametro un string llamado seleccionado. la funcion realiza lo siguiente:
1. invoca a gerarElemento y guarda el resultado en una variable.
2. con la variable obtenida invoca a generarRuta y con este valor muestra la imagen seleccionada por el computador.
3. invoca a determinarGanador pasandole el valor que obtuvo en generarElemento y el valor que recibe la funcion en el
parametro seleccionado. si el resultado de determinarGanador es 0, muestra el mensaje "empate", si gana el usuario 
muestra "ganaste" y si gana el computador muestra "perdiste".*/

let puntuacionUsuario=0;
let puntuacionComputador=0;


jugar=function(seleccionado){
    let numero=generarElemento();
    let ruta=generarRuta(numero);
    mostrarImagen("imgComputador", ruta);
    let resultado=determinarGanador(seleccionado, numero);
    



}


