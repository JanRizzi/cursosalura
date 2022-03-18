console.log('comando parse')

const numero1 = "1"
const numero2 = "2"

console.log(numero1 + numero2)

console.log(parseInt(numero1) + parseInt(numero2))

console.log(`listas "Array`)

// exemplos de listas (agencia de viagens)

const listaDeDestinos = new Array(
    'Salvador',
    'Sao Paulo',
    'Rio de Janeiro'
)
console.log(listaDeDestinos)

listaDeDestinos.push(`Joinville`)// adicionando destinos
listaDeDestinos.push(`Santo André`)

console.log(listaDeDestinos)

listaDeDestinos.push(`teste com números ${numero1} ${numero2}`)// da para concatenar

console.log(listaDeDestinos)

listaDeDestinos.splice(2,1)// remove o terceiro item da lista (Rio de Janeiro == é muito violento)

console.log(listaDeDestinos)

console.log(listaDeDestinos[1])//exibir somente um item da lista

