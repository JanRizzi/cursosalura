// diferencas entre var let e const

let altura = 20
let cumprimento = 13
let resultado
let forma = 'retangulo'

// Let voce tem que declarar antes, var em qualquer lugar


if (forma === 'retangulo'){
resultado = altura * cumprimento;
    }
    else{
    resultado = (altura * cumprimento)/2
    }

console.log(resultado)

forma = "triangulo"

if (forma === 'retangulo'){
    resultado = altura * cumprimento;
    }
    else{
        resultado = (altura * cumprimento)/2
    }
  
    
console.log(resultado)
