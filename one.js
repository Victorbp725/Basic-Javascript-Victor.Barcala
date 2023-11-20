const input = require ('prompt-sync') ({sigint:true})

let nombre = input ('Introduce tu nombre :')
let edad = input ('Introduce tu edad :')

if (edad > 17) {
    console.log ('¡ Ya puedes conducir !')
} else {
    console.log (' ¡ No puedes conducir !')
}