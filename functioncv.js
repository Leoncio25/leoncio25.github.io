

document.getElementById("boton").addEventListener("click",function() {
    document.getElementById("demo").innerHTML= "Nuevos Fondos"; 
 });

 document.getElementById("boton_color").addEventListener("click",function() {
    document.body.style.backgroundColor = "#D1FBA6";
 })
 
 document.getElementById("boton_default").addEventListener("click",function() {
    document.body.style.backgroundColor ="lightgray";
 })

 document.getElementById("boton_ocultar").addEventListener("click",function() {
    document.getElementById("demo").style.display = "none";
 })
