freir = function(alimento){
    let alimentoFrito;
    console.log("Me llega" +" "+alimento);
    console.log("le pongo en la sartem");
    console.log("listo!!!!");
    alimentoFrito = alimento + " FRITO";
    return alimentoFrito;

}
probarFreir = function(){
    let comidaLista;
    comidaLista = freir("POLLITO");
    console.log("La comida lista es: " + comidaLista);


}
probarFreirComida = function(){
    let cmpComida;
    let comida;
    let resultadoComida;    
    cmpComida=document.getElementById("txtComida");
    comida=cmpComida.value;
    resultadoComida=freir(comida);
    console.log("HE RECIBIDO" +" "+resultadoComida);
    
    


}

