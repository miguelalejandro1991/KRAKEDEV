/*Valida la estructura básica de una placa, en base a las siguientes reglas:
• La longitud de la placa puede ser de 7 u 8 caracteres.
El primer caracter es una letra mayúscula.
El segundo caracter es una letra mayúscula.
El cuarto caracter es un guión.
El quinto caracter es un dígito.
El sexto caracter es un dígito.
El séptimo caracter es un dígito.
IMPORTANTE
El tercer caracter es una letra mayúscula.
El octavo caracter es un dígito. NO TODAS LAS placas tienen
octavo caracter. Antes de intentar acceder al caracter octavo,
verificar la longitud de la placa.*/
/*En caso de que exista algún error con la placa, retorna un String con la
descripción del error. Por ejemplo: La placa debe tener 7 u 8 caracteres.
Recomendación: Concatenar los errores, de manera que se pueda
retornar todos los errores. Por ejemplo: El cuarto caracter debe ser un
guión, el sexto caracter debe ser un dígito.
Si no existe ningún error, retornar null
*/
let provincias = {
     A: 'Azuay',
    B: 'Bolívar',
    U: 'Cañar',
    C: 'Carchi',
    X: 'Cotopaxi',
    H: 'Chimborazo',
    O: 'El Oro',
    E: 'Esmeraldas',
    W: 'Galápagos',
    G: 'Guayas',
    I: 'Imbabura',
    L: 'Loja',
    R: 'Los Ríos',
    M: 'Manabí',
    V: 'Morona Santiago',
    N: 'Napo',
    S: 'Pastaza',
    P: 'Pichincha',
    K: 'Sucumbíos',
    Q: 'Orellana',
    T: 'Tungurahua',
    Z: 'Zamora Chinchipe',
    Y: 'Santa Elena'
    
};

let letras = "ABCDEFGHJKLMNPQRSTUVWXYZ"; 
let letersArray = [...letras];

validarEstructura=function(placa){
    console.log(placa)
    let valuesPlate = numberDigitsPlate(placa);
    let char_1 = esMayuscula(placa.charAt(0));
    let char_2 = esMayuscula(placa.charAt(1));
    let char_3 = esMayuscula(placa.charAt(2));
    let char_4 = esGuion(placa.charAt(3));
    let char_5 = esDigito(placa.charAt(4));
    let char_6 = esDigito(placa.charAt(5));
    let char_7 = esDigito(placa.charAt(6));
    let char_8 = esDigito(placa.charAt(7));
    if (!valuesPlate) {
        return 'La placa debe contener 7 u 8 caracteres.'
    }

    if (!char_1 || !char_2 || !char_3) {
        return 'Los 3 primero degitos deben ser en mayuscula'
    }

    if (!char_4) {
        return 'El cuarto digito debe ser un guion'
    }

    if (!char_5 || !char_6 || !char_7) {
        return 'Los ultimos digitos deben ser numeros'
    }

    if (!char_8) {
        return 'Los ultimos digitos deben ser numeros'
    }

    if (valuesPlate && char_1 && char_2 && char_3 && char_4 && char_5 && char_6 & char_7) {
        return null
    }
}




//Obtiene la primera letra de la placa, determina la provincia a la que
//pertenece la placa
//Nombre de la provincia a la que pertenece, si no pertenece a ninguna
//provincia retorna null
//Nombre de la provincia a la que pertenece, si no pertenece a ninguna
//provincia retorna null

obtenerProvincia=function(placa){
    return provincias[placa.charAt(0)] || null;

}

/*Obtiene el segundo caracter de la placa y en base a lo indicado en la
página web, indica el tipo de vehículo al que corresponde
*/
/* Retorna El tipo de vehículo correspondiente, si la letra no corresponde a ningún
tipo, retorna null
*/
obtenerTipoVehiculo=function(placa){
    const chart_2 = placa.charAt(1);
    if (chart_2 == 'A' || chart_2 == 'Z'){
        return 'Vehiculo comercial'
    }else if(chart_2 == 'E'){
        return 'Vehiculo gubernamental';
    }else if(chart_2 == 'X'){
        return ' Vehiculo de uso oficial';
    }else if(chart_2 == 'S'){
        return 'Vehiculo de gobierno provincial';
    }else if(chart_2 == 'M'){
        return  'Vehiculo municipal';
    }else if(letersArray.includes(chart_2)){
        return 'Vehiculo particular'
    }else{
        return null
    }

}

/*Obtiene el último caracter de la placa. Para obtener el último caracter,
considere que la última posición de cualquier cadena es la longitud de la
cadena menos uno.
En base al último caracter obtenido y a la siguiente imagen
*/
/*retorna El día que tiene pico y placa. Ejemplo: Viernes*/

obtenerDiaPicoYPlaca=function(placa){
    const endChart = placa.charAt(placa.length-1)
    console.log(typeof endChart)
    if(endChart == '1' || endChart == '2'){
        return 'Lunes'
    }else if(endChart == '3' || endChart == '4'){
        return 'Martes'
    }else if(endChart == '5' || endChart == '6'){
        return 'Miercoles'
    }else if(endChart == '7' || endChart == '8'){
        return 'Jueves'
    }else if(endChart == '9' || endChart == '0'){
        return 'viernes'
    }
    alert('El ultimo digito debe ser un numero')
    return null
        
}

console.log(obtenerDiaPicoYPlaca('ICK-0147'))    

