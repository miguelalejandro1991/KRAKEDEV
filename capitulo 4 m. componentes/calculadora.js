sumar=function(){
    let cmpCaja1;
    let valor1; 
    let cmpCaja2;
    let valor2;
    let resultado;
    let cmpResultado;    
    //1.Recuperar el valor de la primera caja de texto
    cmpCaja1=document.getElementById("txtValor1");
    valor1=cmpCaja1.value;     
    //2.Recuperar el valor de la segunda caja de texto
    cmpCaja2=document.getElementById("txtValor2");
    valor2=cmpCaja2.value;
    //Convertir los valores a enteros
    valor1=parseInt(valor1);
    valor2=parseInt(valor2);    
    //3.Sumar los dos valores
    resultado=valor1+valor2;   
    //4.Mostrar el valor en pantalla
    cmpResultado=document.getElementById("lblResultado");
    cmpResultado.innerText="Resultado "+resultado;       
}
restar=function(){
    let cmpCaja1;
    let valor1; 
    let cmpCaja2;
    let valor2;
    let resultado;
    let cmpResultado;    
    //1.Recuperar el valor de la primera caja de texto
    cmpCaja1=document.getElementById("txtValor1");
    valor1=cmpCaja1.value;     
    //2.Recuperar el valor de la segunda caja de texto
    cmpCaja2=document.getElementById("txtValor2");
    valor2=cmpCaja2.value;
    //Convertir los valores a enteros
    valor1=parseInt(valor1);
    valor2=parseInt(valor2);    
    //3.Restar los dos valores
    resultado=valor1-valor2;   
    //4.Mostrar el valor en pantalla
    cmpResultado=document.getElementById("lblResultado");
    cmpResultado.innerText="Resultado "+resultado;   

}

multiplicar=function(){
    let cmpCaja1;
    let valor1; 
    let cmpCaja2;
    let valor2;
    let resultado;
    let cmpResultado;    
    //1.Recuperar el valor de la primera caja de texto
    cmpCaja1=document.getElementById("txtValor1");
    valor1=cmpCaja1.value;     
    //2.Recuperar el valor de la segunda caja de texto
    cmpCaja2=document.getElementById("txtValor2");
    valor2=cmpCaja2.value;
    //Convertir los valores a enteros
    valor1=parseInt(valor1);
    valor2=parseInt(valor2);    
    //3.Multiplicar los dos valores
    resultado=valor1*valor2;   
    //4.Mostrar el valor en pantalla
    cmpResultado=document.getElementById("lblResultado");
    cmpResultado.innerText="Resultado "+resultado;  
}
dividir=function(){
    let cmpCaja1;
    let valor1; 
    let cmpCaja2;
    let valor2;
    let resultado;
    let cmpResultado;
    
    //1.Recuperar el valor de la primera caja de texto
    cmpCaja1=document.getElementById("txtValor1");
    valor1=cmpCaja1.value;     
    //2.Recuperar el valor de la segunda caja de texto
    cmpCaja2=document.getElementById("txtValor2");
    valor2=cmpCaja2.value;
    //Convertir los valores a enteros
    valor1=parseInt(valor1);
    valor2=parseInt(valor2);    
    //3.Dividir los dos valores
    resultado=valor1/valor2;   
    //4.Mostrar el valor en pantalla
    cmpResultado=document.getElementById("lblResultado");
    cmpResultado.innerText="Resultado "+resultado;  
} 

limpiar=function(){
    let cmpCaja1;
    let valor1; 
    let cmpCaja2;
    let valor2;
    let resultado;
    let cmpResultado;
    
    //1.Recuperar el valor de la primera caja de texto
    cmpCaja1=document.getElementById("txtValor1");
    valor1=cmpCaja1.value;     
    //2.Recuperar el valor de la segunda caja de texto
    cmpCaja2=document.getElementById("txtValor2");
    valor2=cmpCaja2.value;
    //Convertir los valores a enteros
    valor1=parseInt(valor1);
    valor2=parseInt(valor2);    
        resultado="0";   
    //4.Mostrar el valor en pantalla
    cmpResultado=document.getElementById("lblResultado");
    cmpResultado.innerText="Resultado "+resultado;  
    cmpCaja1.value = "0";
    cmpCaja2.value = "0";    

}



