let votosMinecraft=0;
let votosRoblox=0;


sumarLikeMinecraft=function(){
    let cmpLike;
    let cmpResultado;   
    //recuperar el valor del campo de texto
    cmpLike = document.getElementById("lblMinecraft"); 
    //convertir el valor recuperado en entero
    cmpLike = parseInt(cmpLike.innerText);          
    //incrementar el valor del campo de texto
    cmpLike = cmpLike + 1;  
    //mostrar el resultado en pantalla
    cmpResultado = document.getElementById("lblMinecraft");
    cmpResultado.innerText = cmpLike;
    votosMinecraft = cmpLike;  
        
    }
sumarCorazonMinecraft=function(){
    let cmpCorazon;
    let cmpResultado;
    //recuperar el valor del campo de texto
    cmpCorazon = document.getElementById("lblMinecraft");
    //convertir el valor recuperado en entero
    cmpCorazon = parseInt(cmpCorazon.innerText);    
    //incrementar el valor del campo de texto en 5
    cmpCorazon = cmpCorazon + 5;
    //mostrar el resultado en pantalla
    cmpResultado = document.getElementById("lblMinecraft");
    cmpResultado.innerText = cmpCorazon;
    votosMinecraft = cmpCorazon;

  
}
restarLikeMinecraft=function(){
    let cmpdislike;
    let cmpResultado;
    //recuperar el valor del campo de texto
    cmpdislike = document.getElementById("lblMinecraft");
    //convertir el valor recuperado en entero
    cmpdislike = parseInt(cmpdislike.innerText);
    //decrementar el valor del campo de texto
    cmpdislike = cmpdislike - 1;
    //mostrar el resultado en pantalla
    cmpResultado = document.getElementById("lblMinecraft");
    cmpResultado.innerText = cmpdislike;
    votosMinecraft = cmpdislike;
      
}
sumarLikeRoblox=function(){
    let cmpLike;
    let cmpResultado;   
    //recuperar el valor del campo de texto
    cmpLike = document.getElementById("lblRoblox"); 
    //convertir el valor recuperado en entero
    cmpLike = parseInt(cmpLike.innerText);          
    //incrementar el valor del campo de texto
    cmpLike = cmpLike + 1;  
    //mostrar el resultado en pantalla
    cmpResultado = document.getElementById("lblRoblox");
    cmpResultado.innerText = cmpLike;
    votosRoblox = cmpLike;
   
}
sumarCorazonRoblox=function(){
    let cmpCorazon;
    let cmpResultado;
    //recuperar el valor del campo de texto
    cmpCorazon = document.getElementById("lblRoblox");
    //convertir el valor recuperado en entero
    cmpCorazon = parseInt(cmpCorazon.innerText);    
    //incrementar el valor del campo de texto en 5
    cmpCorazon = cmpCorazon + 5;
    //mostrar el resultado en pantalla
    cmpResultado = document.getElementById("lblRoblox");
    cmpResultado.innerText = cmpCorazon;
    votosRoblox = cmpCorazon;
   
}
restarLikeRoblox=function(){
  
    let cmpdislike;
    let cmpResultado;
    //recuperar el valor del campo de texto
    cmpdislike = document.getElementById("lblRoblox");
    //convertir el valor recuperado en entero
    cmpdislike = parseInt(cmpdislike.innerText);
    //decrementar el valor del campo de texto
    cmpdislike = cmpdislike - 1;
    //mostrar el resultado en pantalla
    cmpResultado = document.getElementById("lblRoblox");
    cmpResultado.innerText = cmpdislike;
    votosRoblox = cmpdislike;
}