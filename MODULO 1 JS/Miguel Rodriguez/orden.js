let = [
    { identificacion: 0, nombre: "Marcos", edad: "18", },
    { identificacion: 1, nombre: "Roberto", edad: "15", },
    { identificacion: 2, nombre: "Kate", edad: "25", },
    { identificacion: 3, nombre: "Diana", edad: "12", },
    { identificacion: 4, nombre: "Benja", edad: "5", },

];

let identificacion = 5;

/*Crear una función agregarPersona, no recibe parámetros y realiza la siguiente
lógica:
a. Toma de la pantalla el nombre de la persona, valida que tenga al menos 3
caracteres, si no cumple la condición muestra el error en pantalla
b. Toma de la pantalla la edad de la persona, valida que sea un entero entre 0 y
C.
100, si no cumple la condición muestra el error en pantalla
Solamente si pasa todas las validaciones:
i. Crea un objeto nuevaPersona, sin atributos.
ii. Agrega a nuevaPersona los atributos nombre y edad al objeto, con los
valores recuperados de la pantalla
iii. Agrega el objeto al arreglo personas
iv. Muestra un alert PERSONA AGREGADA CORRECTAMENTE*/

function agregarPersona() {
    let nombre = recuperarTexto("txtNombre");
    let edad = recuperarInt("txtEdad");
    if (nombre.length <= 3) {
        mostrarTexto("divErrores", "El nombre debe tener al menos 3 caracteres");
        return;
    }     
    if (isNaN(edad) || edad < 0 || edad > 100) {
        mostrarTexto("divErrores", "La edad debe ser un número entre 0 y 100");
        return;
    }
    let nuevaPersona = {};
    nuevaPersona.identificacion = identificacion;
    nuevaPersona.nombre = nombre;
    nuevaPersona.edad = edad;
    personas.push(nuevaPersona);
    identificacion++;
    mostrarTexto("divErrores", "");
    mostrarPersonas();
    alert("PERSONA AGREGADA CORRECTAMENTE");

}

/*PARTE 2- MOSTRAR PERSONAS
Muestra una tabla en pantalla con todas las personas del arreglo, el orden de las
columnas es: EDAD NOMBRE
La tabla se debe mostrar apenas se carga la página (evento onload, en el body)
La tabla se debe refrescar cada vez que se agrega una persona
Agregar estilos a la tabla
*/
function mostrarPersonas() {
    let tabla = `<table border="1">
    <tr>
        <th>EDAD</th>
        <th>NOMBRE</th>
    </tr>`;
}


