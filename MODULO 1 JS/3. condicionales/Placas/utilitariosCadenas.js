//verifica si el caracter es un aletra mayuscula.
//obtiene el codigo ASCII del caracter valida si el codigo corresponde a las letras mayusculas de acuerdo a la tabla ASCII
//retorna true si es mayuscula, false en caso contrario
esMayuscula=function(caracter){
    if(caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90){
        return true
    }else{
        return false
    } 

}
esMinucula=function(caracter){
    if(caracter.charCodeAt(0) >= 97 && caracter.charCodeAt(0) <= 122){
        return true
    }else{
        return false
    }
}


//verifica si el caracter es un digito (numero del 0 al 9)
//obtiene el codigo ASCII del caracter valida si el codigo corresponde a los digitos de acuerdo a la tabla ASCII
//retorna true si es digito, false en caso contrario
esDigito=function(caracter){
    if(caracter.charCodeAt(0) >= 48 && caracter.charCodeAt(0) <= 57){
        return true
    }else{
        return false
    }

}

//verifica si el caracter es un guion '-'
//obtiene el codigo ASCII del caracter valida si el codigo corresponde al guion de acuerdo a la tabla ASCII
//retorna true si es guion, false en caso contrario
esGuion=function(caracter){
    if(caracter.charCodeAt(0) == 45){
        return true;
    }else{
        return false;
    }

}

numberDigitsPlate = function(placa){
    if(placa.length >= 7 && placa.length <= 8){
        return true;
    }else{
        return false;
    }
}


console.log(numberDigitsPlate("CK-0147"))
