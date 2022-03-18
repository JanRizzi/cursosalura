// exemplos de listas (agencia de viagens)
const numero1 = "12"
const numero2 = 3
const listaDeDestinos = new Array(
    'Salvador',
    'Sao Paulo',
    'Rio de Janeiro'
)
//console.log(listaDeDestinos)

listaDeDestinos.push(`Joinville`)// adicionando destinos
listaDeDestinos.push(`Santo André`)
listaDeDestinos.push(`teste com números ${numero1} ${numero2}`)// da para concatenar

console.log(listaDeDestinos)

//condicional ==> vender só para maiores de idade

let idadeComprador = 118
let estaAcompanhado = false
if (idadeComprador >= 18) {
    console.log(`pode comprar, ele tem ${idadeComprador} anos,
    passagem vendida para ${listaDeDestinos[2]}`)
    //console.log(listaDeDestinos[2])//exibir somente um item da lista
    listaDeDestinos.splice(2, 1)
} else if (estaAcompanhado) {
    console.log(`pode comprar, tem ${idadeComprador} anos mas está acompanhado
        passagem vendida para ${listaDeDestinos[2]}`)
    //console.log(listaDeDestinos[2])
    listaDeDestinos.splice(2, 1)
} else {
    console.log(`não pode comprar pois tem só ${idadeComprador} anos
            não vai nem fudendo para ${listaDeDestinos[2]}`)
}

console.log(listaDeDestinos)

//console.log(listaDeDestinos[1])
