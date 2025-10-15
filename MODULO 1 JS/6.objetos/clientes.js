let clientes = [
    { cedula: "54564564", nombre: "juan", edad: "25" },
    { cedula: "5456445", nombre: "miguel", edad: "33" },
    { cedula: "45645648", nombre: "grace", edad: "28" }
];

guardarCambios = function(){    
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarFloat("txtEdad");
    let datosCliente ={};
    datosCliente.cedula=valorCedula;
    datosCliente.nombre=valorNombre;
    datosCliente.edad=valorEdad;
    modificarCliente(datosCliente);
    mostrarClientes();

    
}

modificarCliente = function (cliente) {
    let clienteEncontrado=buscarCliente(cliente.cedula);
    if(clienteEncontrado!=null){
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;
        
    }

}

agregarCliente = function (cliente) {
    let resultado;
    resultado = buscarCliente(cliente.cedula);
    if (resultado == null) {
        clientes.push(cliente);
    }else{
        alert("ya existe el cliente con la cedula:" +cliente.cedula);
    }

}

crearCliente=function(){
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarFloat("txtEdad");
    let nuevoCliente ={}
        nuevoCliente.cedula=valorCedula;
        nuevoCliente.nombre=valorNombre;
        nuevoCliente.edad=valorEdad;
        
        agregarCliente(nuevoCliente);
    


}

buscarCliente = function (cedula) {
    let elementoCliente;
    let clienteEncontrado = null;
    for (let i = 0; clientes.length; i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente;
            break;
        }

    }
    return clienteEncontrado;
}

ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtCedulaBuscar");
    let cliente = buscarCliente(valorCedula);
    if(respuesta == null){
        alert ("cliente no encontrado");
    }else{
        mostrarTextoEnCaja("txtCedula", cliente.cedula);
        mostrarTextoEnCaja("txtNombre", cliente.nombre);
        mostrarTextoEnCaja("txtEdad", cliente.edad);

    }
}


mostrarClientes = function () {
    let cmpTabla = document.getElementById("tablaClientes");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>EDAD</th>" +
        "</tr>";
    let elementoCliente;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        contenidoTabla +=
            "<tr><td>" + elementoCliente.cedula + "</td>"
            + "<td>" + elementoCliente.nombre + "</td>"
            + "<td>" + elementoCliente.edad + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}