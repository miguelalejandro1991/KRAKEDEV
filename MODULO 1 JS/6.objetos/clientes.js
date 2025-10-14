let clientes = [
    { cedula: "54564564", nombre: "juan", edad: "25" },
    { cedula: "5456445", nombre: "miguel", edad: "33" },
    { cedula: "45645648", nombre: "grace", edad: "28" }
];

mostrarClientes = function () {
    let cmpTabla=document.getElementById("tablaClientes"); 
    let contenidoTabla = "<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
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
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}