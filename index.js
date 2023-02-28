document.getElementById("contacto").addEventListener("click", function(){       
    document.getElementById("datos").style.display = "block"; 
    document.getElementById("contacto").style.display= "none"   
})
document.getElementById("ocultar").addEventListener("click", function(){    
    document.getElementById("datos").style.display = "none";
    document.getElementById("contacto").style.display = ""    
})

document.getElementById("habilidades").addEventListener("click", function(){        
    document.getElementById("habil").style.display = "block"; 
    document.getElementById("habilidades").style.display = "none";   
})
document.getElementById("ocultar1").addEventListener("click", function(){
    document.getElementById("habil").style.display = "none";
    document.getElementById("habilidades").style.display = "";    
})

document.getElementById("idiomas").addEventListener("click", function(){        
    document.getElementById("idiom").style.display = "block";
    document.getElementById("idiomas").style.display = "none";    
})
document.getElementById("ocultar2").addEventListener("click", function(){
    document.getElementById("idiom").style.display = "none"; 
    document.getElementById("idiomas").style.display = "";   
})

document.getElementById("mPersonal").addEventListener("click", function(){        
    document.getElementById("personal").style.display = "block"; 
    document.getElementById("foto").style.display = "none";   
})
document.getElementById("mFoto").addEventListener("click", function(){
    document.getElementById("personal").style.display = "none";
    document.getElementById("foto").style.display = "";    
})

//Intente hacer algo mas generico para no repetir codigo pero no pude hacerlo funcionar!!!
// const botonMostrar = document.querySelectorAll(".boton1");
// const botonOcultar = document.querySelectorAll(".boton2");

// const mostrar = function (evento) {
//     console.log("Muestra") 
//     // document.querySelectorAll(".menu").style.display = "block"; 
//     // document.querySelectorAll(".boton1").style.display= "none";
// } 

// const ocultar = function (evento) {
//     console.log("oculto")
//     // document.querySelectorAll(".boton1").style.display = "none";
//     // document.querySelectorAll(".menu").style.display = "" 
// }

// botonMostrar.forEach ( boton=> {
//     boton.addEventListener("click", mostrar);
// });

// botonOcultar.forEach( boton=> {
//     boton.addEventListener("click", ocultar)
// })

