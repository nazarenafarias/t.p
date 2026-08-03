let ej1 = document.querySelector('#ej1')
let botonEj1 = document.querySelector('#botonEj1')
let edad = 15
botonEj1.onclick = function(){
//ej1.textContent = "resultado"
if(edad >= 18){
    ej1.texgtContent="sos mayor de edad"
}else{
    ej1.textContent="Sos menor de edad"
}
}