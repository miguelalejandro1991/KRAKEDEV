/*1. Obtener el valor ingresado por el usuario en la caja de texto
2. Invocar a validarEstructura y guardar el retorno en una variable
erroresEstructura.
3. Si erroresEstructura es null, significa que no hubo errores, por lo
tanto mostrar un mensaje ESTRUCTURA VALIDA. Caso
contrario, mostrar en pantalla un mensaje ESTRUCTURA
INCORRECTA y además mostrar los errores que retornó la
función validarEstructura.
4. no retorna nada
*/

/*En placas.js, dentro de la función validarPlaca, solamente si la estructura es
correcta, invocar a obtenerProvincia, guardar el resultado en una variable. Si el valor
obtenido no es null, mostrar la provincia en pantalla. Si es null, mostrar un mensaje
provincia incorrecta.*/


validarPlaca = function () {
    console.log("Dentro de validar")
    let placa = document.getElementById("placa").value;
    //console.log(placa)
    let erroresEstructura = validarEstructura(placa);
    if (!erroresEstructura) {
        document.getElementById("placa").innerHTML = "ESTRUCTURA VALIDA";
        let provincia = obtenerProvincia(placa);
        let tipoVehiculo = obtenerTipoVehiculo(placa);
        let diaPicoYPlaca = obtenerDiaPicoYPlaca(placa);
        console.log(provincia);
        console.log(tipoVehiculo);
        console.log(diaPicoYPlaca);         
        if (provincia) {
            document.getElementById("provincia").innerHTML = "Provincia: " + provincia;
            document.getElementById("tipoVehiculo").innerHTML = "Tipo de vehículo: " + tipoVehiculo;
            document.getElementById("diaPicoYPlaca").innerHTML = "Día de pico y placa: " + diaPicoYPlaca;
        } else {
            document.getElementById("provincia").innerText = "Provincia incorrecta";
        }
    } else {
        document.getElementById("estado").innerHTML = "estructura invalida";
    }
    document.getElementById("error").innerHTML = erroresEstructura;
    return;

}
limpiar=function(){
   
    document.getElementById("tipoVehiculo").innerText = "";
    document.getElementById("provincia").innerText = "";
    document.getElementById("diaPicoYPlaca").innerText = "";
    document.getElementById("estado").innerText = "";
    document.getElementById("error").innerText = "";
    
    
    
    
}