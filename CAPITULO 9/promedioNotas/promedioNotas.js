
calcularPromedioNotas=function(){
    let nota1=parseFloat(document.getElementById("nota1").value);
    let nota2=parseFloat(document.getElementById("nota2").value);
    let nota3=parseFloat(document.getElementById("nota3").value);
    let promedio=calcularPromedio(nota1,nota2,nota3);
    document.getElementById("resultado").innerHTML=promedio.toFixed(2);

    if(promedio>7){
        document.getElementById("image").src="feliz.jpg";
    }
    else{
        document.getElementById("image").src="triste.jpg";
    }

}
limpiarFormulario=function(){
    document.getElementById("nota1").value="";
    document.getElementById("nota2").value=""; 
    document.getElementById("nota3").value="";
    document.getElementById("resultado").innerHTML=""; 
    document.getElementById("image").src="";
}
