calcularUtilidad=function(ingresos, gastos){
    let resutadoUtilidad;
    resutadoUtilidad=ingresos-gastos;
    return resutadoUtilidad;


}
ejecutarUtilidad=function(){
    //1. recuperar ingresos como entero
    let cmpIngresos;
    let ingresos;
    let ingresosEntero;
    cmpIngresos=document.getElementById("txtIngresos");
    ingresos=cmpIngresos.value;
    ingresosEntero=parseInt(ingresos);
    
    
    //2. recuperar gastos
    let cmpGastos;
    let gastos;
    let gastosEntero;
    cmpGastos=document.getElementById("txtGastos");    
    gastos=cmpGastos.value;
    gastosEntero=parseInt(gastos);
    
     //3. invocar a calcularUtilidad
    let utilidad;
     utilidad=calcularUtilidad(ingresosEntero,gastosEntero);

    //4. mostrar resultado en pantalla
    let cmpUtilidad;
    console.log("La utilidad es: " + utilidad);
    cmpUtilidad=document.getElementById("lblUtilidad");
    cmpUtilidad.innerText="La utilidad es: " + utilidad;    

}
