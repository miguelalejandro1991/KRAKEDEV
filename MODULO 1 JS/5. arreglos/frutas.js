let frutas=["pera","manzana","banana"];

probarBusqueda=function(){
    let frutaEncontrada = recuperarTexto("fruta");    
    let resultado = buscar(frutaEncontrada);
    if (resultado == null){
        alert("Fruta no encontrada");
    }else{
        alert("Fruta encontrada: " + resultado);
    }
}

buscar=function(fruta){
    let elemento;
    let frutaEncontrada=null;
    for(let i=0;i<frutas.length;i++){
        elemento=frutas[i];
        if(fruta == elemento){
            frutaEncontrada=elemento;
            break;
        }
    }    
    return frutaEncontrada;
}