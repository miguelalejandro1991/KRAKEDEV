/* 1.Crear una función que no reciba parámetros y retorne un 
número aleatorio entero entre 1 y 100 (incluidos)
2.  Crear una función llamada generarAleatorios que no reciba 
parámetros y realice la siguiente lógica:
a. Declarar e inicializar un arreglo llamado aleatorios.
b. Tomar el número que ingresa el usuario en la caja de texto (validar que sea un número entre 5 y 20 incluidos)
c. Crear un for que vaya desde 0 hasta el número que ingresó el usuario en la caja de texto (excluido), imprimir 
en consola el valor del índice que está iterando.
Por ejemplo: si el usuario ingresó 8, debería imprimir los números del 0 al 7
d. En la página, agregar una caja de texto y un botón que invoque a generarAleatorios. Probar el funcionamiento 
hasta este punto
e. Dentro del for, en cada iteración invocar a la función creada en el paso 2, guardar el resultado en una variable 
y agregar este valor al arreglo.
3. Crear una función mostrarResultados, que recibe un parámetro llamado arregloNumeros. La función muestra el arreglo
 en la pantalla, generando una tabla de forma dinámica.
4. En la función generarAleatorios, al salir del for, invocar a la función mostrarResultados.
5. Probar el funcionamiento*/



generarNumeroAleatorio=function(){
    let numeroAleatorio=Math.floor(Math.random()*100)+1;
    return numeroAleatorio;
    
}

generarAleatorios=function(){
    let aleatorios=[];
    
}
