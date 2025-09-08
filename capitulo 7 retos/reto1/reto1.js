probar = function(){
   var areaRectangulo = calcularAreaRectangulo(10,5);
   console.log("area Rectangulo: "+areaRectangulo);
   var areaCuadrado = calcularAreaCuadrado(8);
   console.log("area Cuadrado: "+areaCuadrado);
   var perimetroRectangulo = calcularPerimetroRectangulo(10,5);
   console.log("perimetro Rectangulo: "+perimetroRectangulo);
   var perimetroCuadrado = calcularPerimetroCuadrado(8);
   console.log("perimetro Cuadrado: "+perimetroCuadrado);
   var promedio=calcularPromedio(10,20,15,15);
   console.log("promedio:"+promedio);
   
}

calcularAreaRectangulo=function(base,altura){
   return base*altura;
}
calcularAreaCuadrado = function(lado){
   return lado*lado;
}
calcularPerimetroRectangulo = function(base,altura){
   return 2*(base+altura);
}
calcularPerimetroCuadrado = function(lado){
   return 4*lado;
}
calcularPromedio = function(valor1,valor2,valor3,valor4){
   return (valor1+valor2+valor3+valor4)/4;
}
