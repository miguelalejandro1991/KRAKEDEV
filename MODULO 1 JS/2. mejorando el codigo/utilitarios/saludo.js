saludar=function(){
    let nombre;
    let apellido;
    nombre=recuperarTexto("txtNombre");
    apellido=recuperarTexto("txtApellido");
    let edad = recupararInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    let mensajeBienvenida="Bienvenido"+" " +nombre+" "+apellido;
    mostrarTexto("lblResultado",mensajeBienvenida);
    mostarImagen("imgSaludo", "./imagenes/saludar.gif");
    mostrarTextoEnCaja("txtNombre", " ");

   
}
