console.log(`loops`)

const listaDeDestinos = new Array(
    'Salvador',
    'Sao Paulo',
    'Rio de Janeiro'
)
listaDeDestinos.push(`Joinville`)// adicionando destinos
listaDeDestinos.push(`Santo André`)

console.log(listaDeDestinos)

//condicional ==> vender só para maiores de idade

let idadeComprador = 18
let estaAcompanhado = false
let passagemComprada = false
const destino = 'Santo André'
const podeComprar = idadeComprador >= 18 || estaAcompanhado == true
let contador = 0
let destinoExiste = false

while (contador < 5) {
    if (listaDeDestinos[contador] == destino) {
        console.log(`destino ${listaDeDestinos[contador]} está disponivel`)
        destinoExiste = true
        if (podeComprar) {
            console.log(`pode comprar, ele tem ${idadeComprador} anos 
e/ou está acompanhado 
Passagem vendida para ${listaDeDestinos[contador]}`)
            passagemComprada = true
            listaDeDestinos.splice((contador), 1)
        } else {
            console.log(`não pode comprar pois tem só ${idadeComprador} anos
não vai nem fudendo para ${listaDeDestinos[contador]}`)
            passagemComprada = false
        }
        break
    }
    contador += 1 // é semelhante contador = contador +1
}

if (destinoExiste == false) {
    console.log(`destino ${destino} não está disponivel`)
}
console.log(listaDeDestinos)

