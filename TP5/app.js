let ej1 = document.querySelector('#ej1')
let botonEj1 = document.querySelector('#botonEj1')
let edad = 25
botonEj1.onclick = function () {
    //ej1.textContent = "resultado"
    if (edad >= 18) {
        ej1.textContent = "sos mayor de edad"
    } else {
        ej1.textContent = "Sos menor de edad"
    }
}

let ej2 = document.querySelector('#ej2')
let botonEj2 = document.querySelector('#botonEj2')
let nombreUsuario = 'sofia'
botonEj2.onclick = function () {
    //Escribis la condicion
    if (nombreUsuario == Nahuel) {
        ej2.textContent = "¿como estas?"

    } else {
        ej2.textContent = "bienvenido usuario"

    }
}
let ej3 = document.querySelector("#ej3")
let botonEj3 = document.querySelector("botonEj3")
let nombreUsuario = "sofia"
botonEj3.onclick = function () {
    //Escribis la condicion
    if ((nombreUsuario == 'nahuel') || (nombreUsuario == 'marcos')) {
        ej3.textContent = "bienvenido" + nombreUsuario + "¿como estás?"
    } else {
        ej3.textContent = "bienvenido" + nombreUsuario

    }

}
let ej4 = document.querySelector("#ej4")
let botonEj4 = document.querySelector("botonEj4")
let nombreUsuario = "12"
botonEj2.onclick = function () {
    //Escribis la condicion
    if (nombreUsuario == 0) {
        ej4.textContent = "el numero es igual a cero"
    }
    else if (nombreUsuario < "0") {
        ej4.textContent = "el numero es negativo "
    }
    else if (nombreUsuario > "0") {
        ej4.textContent = "el numero es positivo"
    }
}
let ej5 = document.querySelector("#ej5")
let botonej5 = document.querySelector("botonej5")
let nombreUsuario = 16
botonEj2.onclick = function () {
    //Escribis la condicion
    if ((nombreUsuario < 6) && (nombreUsuario > 11) ){
        ej5.textContent = ("es niño")
    }
    else if ((nombreUsuario < 12) && (nombreUsuario > 18)){
        ej5.textContent = ("es adolescente")
    }
    else if ((nombreUsuario < 19) && (nombreUsuario > 26) ){

ej5.textContent = ("es joven")
    }
else if ((nombreUsuario < 27) && (nombreUsuario > 59)){
    ej5.textContent = ("es adulto")
}
else if (nombreUsuario < 60){
    ej5.textContent = ("es un anciano")
}
    let ej5 = document.querySelector("#ej6")
    let botonej6 = document.querySelector("botonej6")
let nombreUsuario = ("sabado")
botonEj2.onclick = function () {
    //Escribis la condicion

if ((nombreUsuario = "lunes") || (nombreUsuario =" martes") || (nombreUsuario = "miercoles") || (nombreUsuario = "jueves") || (nombreUsuario = "viernes"))
{ej6.textContent = ("Es un día laborable")}

else if ((nombreUsuario = "sabado") || (nombreUsuario = "domingo") ){
    ej6.textContent = "Es fin de semana"
}
let ej7 = (document.querySelector("#ej7"))
let botonej7 = document.querySelector ("botonej7")
let nombreUsuario =("hola")
if (nombreUsuario = "secreto"){
    ej7.textContent =("Acceso concedido")
}
else if (nombreUsuario != "secreto"){
    ej7.textContent = ("Acceso denegado")
}