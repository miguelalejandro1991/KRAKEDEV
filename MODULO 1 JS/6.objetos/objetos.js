probarAtributos = function () {
    let persona = {
        nombre: "Miguel",
        apellido: "Rodriguez",
        edad: "33",
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.apellido);
    if (persona.estaVivo == false) {
        console.log("La persona no está viva");
    } else {
        console.log("La persona está viva");
    }
}

/*En objetos.js crear una función llamada crearProducto, no recibe parámetros y ejecuta la siguiente lógica:
1. Crea una variable llamada producto1, esta variable será un objeto con atributos nombre (String), precio (float), 
stock (int). Colocar los valores que usted desee en cada atributo.
2. Crear una variable llamada producto2, con los mismos atributos, pero distintos valores asignados en cada uno.
3. Imprimir en consola el nombre del producto1
4. Imprimir en consola el precio del producto2
5. Comparar el stock del producto1 con el stock del producto2. Imprimir una de las 3 sentencias según el caso: Producto 
1 tiene mayor stock, Producto 2 tiene mayor stock o Ambos productos tienen el mismo stock.
6. Agregar un botón a la página y probar.*/

crearProducto = function () {
    let producto1 = {
        nombre: "camisa",
        precio: "250.50",
        stock: "10"
    }
    let producto2 = {
        nombre: "pantalon",
        precio: "300.75",
        stock: "5"
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if (producto1.stock > producto2.stock){
        console.log("Producto 1 tiene mayor stock");
    }else {producto1.stock < producto2.stock
        console.log("Producto 2 tiene mayor stock");
    }
}