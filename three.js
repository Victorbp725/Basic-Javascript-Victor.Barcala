const input = require ("prompt-sync")({sigint: true})

let cancelar = false
let numInput 
let num
let SUMAR = 0

while (!cancelar) {
    numInput = input ('Introduce un numero para sumar')

    if (Number(numInput)) {
        num = Number(numInput)
        SUMAR += num
    } else if (numInput !== 'cancelar'){
        console.log("Escribe un numero")
    } else {
        cancelar = true
    }
}

console.log("El total de la SUMAR es "+ SUMAR)