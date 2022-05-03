// objetos

// Array = const listaCpfs = ["12542156542","15475485799","12345678999"]

// Array = const cliente = ["nome", "André","idade",36]

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "15415415477",
    email: "andre@email.com.br"
}
console.log('--------------------------------1')
// Desafio 1 print infos

console.log(`meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`)

//substring exibe parte de uma string
console.log(cliente.cpf.substring(0, 3))

console.log('--------------------------------2')
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

console.log('--------------------------------3')
// desafio 3 adicionar campos

cliente.fone = "991382857"
console.log(cliente)

delete cliente.fone
console.log(cliente)

console.log('--------------------------------4')
//desafio 4 imprimir telefones

cliente.fones = ["47991382857", "47991463556"]
cliente.fones.forEach(fone => console.log(fone))

console.log('--------------------------------5')
//desafio 5 objeto dentro de objeto

cliente.dependente = {
    nome: 'sara',
    idade: 16,
    parentesco: 'filha'
}

//alterando

cliente.dependente.nome = 'Sara winter'
console.log(cliente)

console.log('--------------------------------6')
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

cliente.dependentes.push({
    nome: 'Abelardo Barbosa',
    idade: 8,
    parentesco: 'filho'
})

console.log(cliente)

const filhosMenores = cliente.dependentes.filter(dep => dep.idade < 18)

for (i = 0; i < filhosMenores.length; i++) {
    console.log(`dependente menor \$ ${filhosMenores[i].nome} é ${filhosMenores[i].parentesco}.`)
}

console.log('--------------------------------7')
// desafio 7 fazer depósitos
cliente.limite = 10000
cliente.saldo = 0

cliente.depositar = function (valor) {
    this.saldo += valor
    console.log(`disponivel para saque ${this.limite + this.saldo}`)
}

cliente.sacar = function (valor) {
    console.log(valor)
    if (valor > (this.saldo + this.limite)) {
        console.log(`limite estourado em ${valor - (this.saldo + this.limite)} operação não efetuada `)
        console.log(`seu saldo é ${cliente.saldo}`)
        console.log(`seu limite de crédito é ${cliente.limite}`)
    } else {
        this.saldo -= valor
        if (this.saldo < 0) {
            console.log(`saldo negativo ${this.saldo}`)
            console.log(`seu limite de crédito é ${cliente.limite}`)
        }
        console.log(`disponivel para saque ${this.limite + this.saldo}`)
    }
}

cliente.depositar(1300)
cliente.sacar(130)
cliente.sacar(8000)
cliente.sacar(382)
cliente.depositar(400000)
cliente.sacar(392788)
console.log(cliente)



