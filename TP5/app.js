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
    if ((nombreUsuario == 'nahuel') || (nombreUsuario == 'marcos'))
    {
        ej3.textContent = "bienvenido" + nombreUsuario + "¿como estás?"
    }else{ ej3.textContent = "bienvenido" + nombreUsuario

    }
    
}
let ej4 = document.querySelector ("#ej4")
let botonEj4 = document.querySelector("botonEj4")
let nombreUsuario = "12"
botonEj2.onclick = function () {
    //Escribis la condicion


