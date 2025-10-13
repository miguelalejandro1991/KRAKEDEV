esMayuscula=function(caracter){
    if(caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90){
        return true
    }else{
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

guardarPalabra=function(){
    let palabraIngresada;
    palabraIngresada=recuperarTexto("txtSecreta");
    if(palabraIngresada.length!=5){
        alert("Debe ingresar una palabra de 5 letras mayusculas");
        return;
        console.log("La palabra ingresada es: "+palabraIngresada);
        
    }

}