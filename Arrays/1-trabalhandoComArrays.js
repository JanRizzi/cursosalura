// função Push

const notas = [10,6,8]
notas.push(7,3)

console.log(notas)

let media = (notas [0] + notas [1] + notas [2] + notas [3] + notas [4]) /notas.length

console.log (`a média é ${media}`)

// não passar nenhum parametro ele insere um indfined

// notas.push()

// media = (notas [0] + notas [1] + notas [2] + notas [3] + notas [4] + notas[5]) /notas.length
// console.log(notas)
// console.log (`a média é ${media}`)

// função Pop
console.log(notas)
notas.pop()
console.log(notas)

// array vazia

const arrayVazia = [,,,]
console.log(arrayVazia.length)
console.log(arrayVazia)
console.log(arrayVazia[0])

arrayVazia.push(50)
console.log(arrayVazia.length)
console.log(arrayVazia)
console.log(arrayVazia[0])

