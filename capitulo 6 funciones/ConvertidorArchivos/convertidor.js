//Crear una funcion llamada convertirEnPesosMx
//que reciba como parámetro el valor en dolares
//y RETORNE el equivalente en Pesos Mexicanos

convertirEnPesosMx=function(dolares){
let PesosMexicanos 
PesosMexicanos = dolares * 18.82; 
return PesosMexicanos;

}

mostrarPesosMx=function(){
    let cmpValor;
    let valor;  
    let valorFloat;
    let valorPesosMexicanos; 
    let cmpResultado; 
    let cmpMoneda;
    let cmpImagenBandera;
    cmpValor = document.getElementById("txtValor");
    valor = cmpValor.value;
    valorFloat = parseFloat(valor);
    convertirEnPesosMx(valorFloat);
    valorPesosMexicanos = convertirEnPesosMx(valorFloat);
    cmpResultado = document.getElementById("lblValor");
    cmpResultado.innerHTML=valorPesosMexicanos;  
    cmpMoneda = document.getElementById("lblMoneda");
    cmpMoneda.innerHTML="Pesos Mexicanos";
    cmpImagenBandera = document.getElementById("imgBandera");
    cmpImagenBandera.src="banderaMx.png";

}

//Crear una funcion llamada convertirEnEuros
//que reciba como parámetro el valor en dolares
//y RETORNE el equivalente en Euros

convertirEnEuros=function(dolares){
    let Euros;
    Euros = dolares * 0.86;
    return Euros;

}

mostrarEuros=function(){
    let cmpValor;
    let valor;  
    let valorFloat;
    let valorEuros;
    let cmpResultado;
    let cmpMoneda;
    let cmpImagenBandera;
    cmpValor = document.getElementById("txtValor");
    valor = cmpValor.value;
    valorFloat = parseFloat(valor);
    convertirEnEuros(valorFloat);
    valorEuros = convertirEnEuros(valorFloat);
    cmpResultado = document.getElementById("lblValor");
    cmpResultado.innerHTML=valorEuros;  
    cmpMoneda = document.getElementById("lblMoneda");
    cmpMoneda.innerHTML="Euros";
    cmpImagenBandera = document.getElementById("imgBandera");
    cmpImagenBandera.src="unionEuropea.jpg";
    


}

//Crear una funcion llamada convertirEnPesosColombianos
//que reciba como parámetro el valor en dolares
//y RETORNE el equivalente en Pesos Colombianos

convertirEnPesosColombianos=function(dolares){
    let PesosColombianos;
    PesosColombianos = dolares * 4000; 
    return PesosColombianos;

}
mostrarPesosColombianos=function(){
    let cmpValor;
    let valor;  
    let valorFloat;
    let valorPesosColombianos; 
    let cmpResultado; 
    let cmpMoneda;
    let cmpImagenBandera;
    cmpValor = document.getElementById("txtValor");
    valor = cmpValor.value;
    valorFloat = parseFloat(valor);
    convertirEnPesosColombianos(valorFloat);
    valorPesosColombianos = convertirEnPesosColombianos(valorFloat);
    cmpResultado = document.getElementById("lblValor");
    cmpResultado.innerHTML=valorPesosColombianos;  
    cmpMoneda = document.getElementById("lblMoneda");
    cmpMoneda.innerHTML="Pesos Colombianos";
    cmpImagenBandera = document.getElementById("imgBandera");
    cmpImagenBandera.src="banderaColombia.png";



}

