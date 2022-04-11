// objetos

// Array = const listaCpfs = ["12542156542","15475485799","12345678999"]

// Array = const cliente = ["nome", "André","idade",36]

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "15415415477",
    email: "andre@email.com.br"
}
console.log('--------------------------------')
// Desafio 1 print infos

console.log(`meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`)

//substring exibe parte de uma string
console.log(cliente.cpf.substring(0, 3))

console.log('--------------------------------')
// desafio 2 acessar lista
// ao invés de usar notação de ponto se usa colchetes

const chaves = ['nome', 'idade', 'cpf', 'email']

console.log(cliente[chaves[0]])

chaves.forEach(info => {
    if (info == 'cpf') {
        console.log(`${cliente.cpf.substring(0, 3)}********`)
    } else {
        console.log(cliente[info])
    }
})

console.log(cliente['email'])

console.log('--------------------------------')
// desafio 3 adicionar campos

cliente.fone = "991382857"
console.log(cliente)

delete cliente.fone
console.log(cliente)

console.log('--------------------------------')
//desafio 4 imprimir telefones

cliente.fones = ["47991382857", "47991463556"]
cliente.fones.forEach(fone => console.log(fone))

console.log('--------------------------------')
//desafio 5 objeto dentro de objeto

cliente.dependente = {
    nome: 'sara',
    idade: 16,
    parentesco: 'filha'
}

//alterando

cliente.dependente.nome = 'Sara winter'
console.log(cliente)

console.log('--------------------------------')
// desafio 6 criando dependentes como arrays

delete cliente.dependente
console.log(cliente)

cliente.dependentes = [{
    nome: 'Sara Winter',
    idade: 19,
    parentesco: 'filha'
}, {
    nome: 'Sandra Bigorna',
    idade: 13,
    parentesco: 'filha'
}]

console.log(cliente)

