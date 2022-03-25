// fazendo a média de um array usando o for

const numeros = [10, 2.5, 8, 6.75, 7]

let somaNumeros = 0

for (i = 0; i < numeros.length; i++) {
    if (numeros[i] < 7) {
        console.log(`${i + 1} ====> ${numeros[i]} nota abaixo da média exigida`)
        somaNumeros = somaNumeros + numeros[i]
    } else {
        console.log(`${i + 1} ====> ${numeros[i]} boa nota parabens`)
        somaNumeros = somaNumeros + numeros[i]
    }
}

media = somaNumeros / numeros.length

console.log(`a média é ${media}`)

somaNumeros = 0

let contador = 1

numeros.forEach(chamaFuncao)

function chamaFuncao(numero){
    if (numero < 7) {
        console.log(`${contador} ====> ${numero} nota abaixo da média exigida`)
        somaNumeros = somaNumeros + numero
        contador++
    } else {
        console.log(`${contador} ====> ${numero} boa nota parabens`)
        somaNumeros = somaNumeros + numero
        contador++
    }
}

console.log(`a média é ${media}`)

contador =1
numeros.forEach(numero =>{
    if (numero < 7) {
        console.log(`${contador} ====> ${numero} nota abaixo da média exigida`)
        somaNumeros = somaNumeros + numero
        contador++
    } else {
        console.log(`${contador} ====> ${numero} boa nota parabens`)
        somaNumeros = somaNumeros + numero
        contador++
    }
})

console.log(`a média é ${media}`)

somaNumeros = 0
contador =1
numeros.forEach(chamaFuncao)

media = somaNumeros / numeros.length

console.log(`a média é ${media}`)

