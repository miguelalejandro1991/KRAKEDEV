// crear funcion calcularTasalnteres
//La tasa de interés que le otorga el banco a una empresa, varía 
//dependiendo de los ingresos de la empresa, de acuerdo a la siguiente definición:
//Si los ingresos son menores a 300 000, la tasa es del 16%
//Entre 300 000 y 500 000(excluido), la tasa es del 15%
//Entre 500 000 y 1000 000(excluido), la tasa es del 14%
//Entre1 000 000 y 2 000 000 (excluido), la tasa es del 13%
//Si la empresa vende 2 000 000 o más, la tasa es del 12%
//Esta función retona el valor de la tasa de interés que le brinda el banco a la empresa, según sus ingresos
//retorna el valor de la tasa de interés

calcularTasaInteres=function(ingresoAnual){
    if(ingresoAnual<300000){
        return 0.16;
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        return 0.15;
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        return 0.14;
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        return 0.13;
    }else{
        return 0.12;
    }    

}


//crear la funcion calcularCapacidadPago
//Calcula el valor de la cuota mensual que puede pagar un cliente cuando
//se le asigna un préstamo. El banco hace los cálculos considerando lo siguiente:
//Si su edad es mayor a 50 años, su capacidad es el 30% de lo que le sobra luego de restar egresos de ingresos.
//Si tiene hasta 50 años, su capacidad es del 40% de lo que le sobra luego de restar egresos de ingresos.
//retorna El valor de la cuota que puede pagar mensualmente

calcularCapacidadPago=function(edad, ingresos, egresos){
    if(edad>50){
        return (ingresos-egresos)*0.30;
    }else{
        return (ingresos-egresos)*0.40;
    }

}


//crear la funcion calcularDescuento
//Determina el valor del descuento que va a recibir un usuario por la compra de un producto. Este descuento depende del número de
//productos que compre del mismo tipo. De acuerdo a la siguiente tabla:
//Si compra menos de 3 productos no recibe descuento.
//Si compra de 3 a 5 productos recibe el 2% de descuento.
//Si compra de 6 a 11 productos recibe el 3% de descuento.
//Si compra 12 productos o más recibe el 4% de descuento.
//retorna El valor a pagar luego del descuento

calcularDescuento=function(precio, cantidad){
    if(cantidad<3){
        return precio*cantidad;
    }else if(cantidad>=3 && cantidad<=5){
        return (precio*cantidad)*0.98;
    }else if(cantidad>=6 && cantidad<=11){
        return (precio*cantidad)*0.97;
    }else{
        return (precio*cantidad)*0.96;
    }

}


//crear la funcion determinarColesteroILDL
//Determina la categoría de colesterol LDL, de acuerdo al nivel de colesterol que se mide en un examen.
//Puede encontrar los rangos de valores en este link:
//https://medlineplus.goy/spanish/pruebas-de-laboratorio/niveles-de-colesterol
//retorna Un String con el texto que indica su nivel de colesterol LDL

determinarColesteroILDL=function(nivelColesterol){
    if(nivelColesterol <170 || nivelColesterol <200){
        return ("colesterol total")
    } else if (nivelColesterol<120 || nivelColesterol<130){
        return "NO-HDL"
    }else if(nivelColesterol<110 || nivelColesterol<100){
        return "LDL"
    }else if(nivelColesterol>45 || nivelColesterol>=60){
        return "HDL"
    }


       

}


//crear la funcion validarClave
//Valida la clave ingresada por el usuario, la considera válida si cumple la siguiente condición:
//Tiene al menos 8 caracteres
//Tiene máximo 16 caracteres
//retorna true si la clave es válida, caso contrario false

validarClave=function(clave){
    if(clave>=8 && clave<=16){
        return true;
        
    }else{
        return false;
    }


}



//crear la funcion esMayuscula
//Determina si la letra que recibe como parámetro es una letra mayúscula Algoritmo
//Obtiene el código ascii de la letra
//Verifica si el código está dentro del rango de las mayúsculas.
//Tabla: https://elcodigoascii.com.ar/
//NOTA: Considerar solamente las mayúsculas sin tilde
//retorna true si la letra es mayúscula, caso contrario retorna false

esMayuscula=function(caracter){
    if(caracter.charCodeAt(0)>=65 && caracter.charCodeAt(0)<=90){
        return true;
    }else{
        return false;
    }   


}


//crear la funcion esMinuscula
//Determina si la letra que recibe como parámetro es una letra minúscula Algoritmo
//Obtiene el código ascii de la letra
//Verifica si el código está dentro del rango de las minúsculas o si es una minúscula con tilde.
//Tabla: https://elcodigoascii.com.ar/
//NOTA: Considerar también las minúsculas con tilde
//retorna true si la letra es minúscula, caso contrario retorna false

esMinuscula=function(caracter){
    if((caracter.charCodeAt(0)>=97 && caracter.charCodeAt(0)<=122) || (caracter.charCodeAt(0)>=224 && caracter.charCodeAt(0)<=252)){
        return true;
    }else{
        return false;
    }

}




//crear la funcion esDigito
//Determina si la letra que recibe como parámetro es un dígito. Obtiene elcódigo ascqui del caracter
//Verifica si el código está dentro del rango de los dígitos
//Tabla: https://elcodigoascii.com.ar/
//retorna true si el caracter es un dígito, caso contrario retorna false

esDigito=function(caracter){
    if(caracter.charCodeAt(0)>=48 && caracter.charCodeAt(0)<=57){
        return true;
    }else{
        return false;
    }

}



//crear la funcion darPermiso
//Un padre condicionó el permiso de salida de su hijo, de manera que puede salir solamente si saca más de 90 en cualquiera de estas tres
//materias: matemática, física o geometría
//retorna true si tiene permiso o false si no tiene permiso

darPermiso=function(notaMatematica, notaFisica, notaGeometria){
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90){
        return true;
    }else{
        return false;
    }

}



//crear la funcion otorgarPermiso
//Un padre condicionó el permiso de salida de su hijo, de manera que puede salir solamente si saca más de 90 en Matemática o Física y más
//de 80 en geometría
//retorna true si tiene permiso o false si no tiene permiso

otorgarPermiso=function(notaMatematica, notaFisica, notaGeometria){
    if((notaMatematica>90 || notaFisica>90) && notaGeometria>80){
        return true;
    }else{
        return false;
    }

}


//crear funcion dejarSalir
//Un padre condicionó el permiso de salida de su hijo, de manera que puede salir solamente si saca más de 90 en Matemática, Física o
//Geometría y además si la nota de Física es mayor a la de Matemática
//retorna true si tiene permiso o false si no tiene permiso

dejarSalir=function(notaMatematica, notaFisica, notaGeometria){
    if((notaMatematica>90 || notaFisica>90 || notaGeometria>90) && notaFisica>notaMatematica){
        return true;
    }else{
        return false;
    }

}

