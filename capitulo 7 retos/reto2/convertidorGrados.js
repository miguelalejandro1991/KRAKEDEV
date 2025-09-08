//Crear una funcion llamada convertirCelsiusAFarenheit 
//que reciba como parámetro la temperatura en grados celsius
//y RETORNE la temperatura en grados farenheit

convertirCelsiusAFarenheit=function(celsius) {
    return (celsius * 9/5) + 32;
}


mostrarConversion=function(){
    let txtCelsius;
    let lblFarenheit;
    let valorCelsius;
    let resultadoFarenheit;
    let img;    
    txtCelsius = document.getElementById("txtCelsius");
    valorCelsius = parseFloat(txtCelsius.value);
    resultadoFarenheit = convertirCelsiusAFarenheit(valorCelsius);
    lblFarenheit = document.getElementById("lblFarenheit");
    lblFarenheit.innerHTML = resultadoFarenheit;
    img = document.getElementById("imgBandera");
    img.src = "ok.jpg";
    

}

//Crear una funcion llamada reiniciar que limpie los campos de texto
//y vuelva a poner la imagen de la bandera en su estado original
// y vuelva el lblFarenheit a 0
reiniciar=function() {
    let txtCelsius;
    let lblFarenheit;
    let img; 
    let otroResultado;   
    txtCelsius = document.getElementById("txtCelsius");
    txtCelsius.value = "";
    lblFarenheit = document.getElementById("lblFarenheit");
    lblFarenheit.innerHTML = "";
    img = document.getElementById("imgBandera");
    img.src = "pensando.jpg";
    otroResultado = document.getElementById("lblFarenheit");
    otroResultado.innerHTML = "0";   



}
