// objetos

// Array = const listaCpfs = ["12542156542","15475485799","12345678999"]

// Array = const cliente = ["nome", "André","idade",36]

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "15415415477",
    email: "andre@email.com.br"
}

// Desafio 1 print infos

console.log(`meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`)

//substring exibe parte de uma string
console.log(cliente.cpf.substring(0, 3))

// desafio 2 acessar lista
// ao invés de usar notação de ponto se usa colchetes

const chaves = ['nome', 'idade', 'cpf', 'email']

console.log(cliente[chaves[0]])
console.log('--------------------------------')
chaves.forEach(info => {
    if (info == 'cpf') {
        console.log(`${cliente.cpf.substring(0, 3)}********`)
    } else {
        console.log(cliente[info])
    }
})
console.log('--------------------------------')

console.log(cliente['email'])

// desafio 3 adicionar campos

cliente.fone="991382857"
console.log(cliente)

delete cliente.idade
console.log(cliente)


