//declarar una variable puntaje
let puntaje;
puntaje = 0;

cambiar = function(){

    puntaje = 1000;
}

mostrar = function(){

    alert("el puntaje es:"+puntaje);
}

incrementarUno = function(){        
        puntaje = puntaje + 1;

    }

menorarUno = function(){
    puntaje = puntaje - 1;
}

incrementarDiez = function(){
    puntaje = puntaje + 10;
}

menorarDiez = function(){
    puntaje = puntaje - 10;
}