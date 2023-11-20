const input = require ('prompt-sync') ({sigint:true})

let nota = input ('Dime que nota de mierda has sacado :')

if (nota > 0 && nota < 4) {
    console.log ('Muy Deficiente')
}

if (nota > 3 && nota < 6) {
    console.log ('Insuficiente')
}

if (nota > 5 && nota < 7) {
    console.log ('Suficiente')
}

if (nota > 6 && nota < 8) {
    console.log ('Bien')
}

if (nota > 7 && nota < 9) {
    console.log ('Notable')
}

if (nota > 9 && nota < 10) {
    console.log ('Sobresaliente')
}
