calcularValorDescuento=function(monto, porcentajeDescuento){
    //Calcula el valor del porcentaje de descuento.
    let valorDescuento= (monto*porcentajeDescuento)/100;
    return valorDescuento;

}

calcularlVA=function(monto){
    //retorna el valor del IVA
    let valorIVA=(monto*1.15);
    return valorIVA;
}

calcularSubtotal=function(precio, cantidad){
    //Calcula el total a pagar, que es la multiplicación del precio unitario por la cantidad de productos
    // RetornaEl total a pagar del número de productos comprados

    let subtotal=precio*cantidad;
    return subtotal; 

}

calcularTotal=function(subtotal, descuento, iva){
    //Calcula el valor total a pagar, que sería el subtotal, menos el descuento, más el IVA.
    let total=subtotal-descuento+iva;
    return total;


}

