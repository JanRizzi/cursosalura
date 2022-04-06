// metodo callback
// usando o map

let nomes = ['ana Julia', 'Caio', 'BIA silva', 'BaRbArA']

const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizados)

// filter

const notas = [7, 3.5, 8, 1.5]

const reprovados = nomesAtualizados.filter((_, indice) => notas[indice] < 7)

console.log(`reprovados: ${reprovados}`)

// reduce

const numeros = [43, 50, 65, 12]

//const soma = numeros.reduce((acum, atual) => atual + acum, 0)

// const soma = numeros.reduce(function (acum, atual) {
//     return atual + acum
// }, 0)

function operacaoNumerica(acum, atual) {
    return atual + acum
   }
   
   const soma = numeros.reduce(operacaoNumerica, 0)

console.log(soma) 