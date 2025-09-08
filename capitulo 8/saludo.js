saludar=function(){
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    let mensajeBienvenida = "Bienvenido" + " " + nombre + " " + apellido + ". Tienes " + edad + " años y mides " + estatura + " mts."; 
    mostrarTexto("lblResultado",mensajeBienvenida);
    mostrarImagen("imgSaludo", "./utilitarios/imagenes/saludo1.gif");
    mostrarTextoEnCaja("txtNombre", " ");


    
}

