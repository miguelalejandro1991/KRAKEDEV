/* crear la funcion validarPassword con la siguiente descripcion.
verificar que la cadena cumpla con las siguientes condiciones:
*tiene una longitud minima de 8 caracteres.
*tiene una longitud maxima de 16 caracteres.
*tiene al menos una letra mayuscula
*tiene al menos un digito
*tiene al menos un caracter especial. asterisco(*), guion medio(-) o guion bajo(_)
sugerencia: crear una variable local para guardar los mensajes de error, en caso de que no cumpla alguna de las condiciones,
concatenar el mensaje de error. al final retornar la cadena de errores.
sugerencia: para validar si tiene una letra mayuscula, se puede barrer la cadena e ir validando caracter por caracter si tiene 
una letra mayuscula.
lo mismo con un digito y el caracter especial.
Retorna el mensaje con los errores de validacion. si todo es correcto retorna una cadena vacia(cadena de longitud 0)*/





validarPassword = function (password) {

    let mensaje = "";

    if (password.length < 8) {
        mensaje += "la contraseña debe tener al menos 8 caracteres <br>";
    }
    if (password.length > 16) {
        mensaje += "la contraseña debe tener como maximo 16 caracteres <br>";
    }
    let tieneMayuscula = false;
    let tieneDigito = false;
    let tieneEspecial = false;
    let especiales = "*-_";
    for (let i = 0; i < password.length; i++) {
        let char = password.charAt(i);
        if (char >= 'A' && char <= 'Z') {
            tieneMayuscula = true;
        }
        if (char >= '0' && char <= '9') {
            tieneDigito = true;
        }   
        if (especiales.indexOf(char) !== -1) {
            tieneEspecial = true;
        }
    }
    if (!tieneMayuscula) {
        mensaje += "la contraseña debe tener al menos una letra mayuscula <br>";
    }       
    if (!tieneDigito) {
        mensaje += "la contraseña debe tener al menos un digito <br>";
    }   
    if (!tieneEspecial) {
        mensaje += "la contraseña debe tener al menos un caracter especial (*, -, _) <br>";
    }   
    return mensaje;
        


}

/* crear la fun cion ejecutarValidacion que se ejecuta al hacer click en el boton validar.
recupera la caja de texto de la pagina. invocar a validarPassword, si el retorno es cadena vacia, mostrar un mensaje 
password correcto, caso contrario mostrar los mensajes de errores de validacion. */


ejecutarValidacion = function () {
    console.log("estoy dentro")
    let password = document.getElementById("txtpass").value;
    console.log(password);
    let mensaje = validarPassword(password);
    if (mensaje.length == 0) {
        document.getElementById("errores").innerHTML = "contraseña correcta ";
    } else {
        document.getElementById("errores").innerHTML = mensaje;
    }


}