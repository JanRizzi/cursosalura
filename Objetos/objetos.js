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

cliente.dependentes.push({
    nome: 'Abelardo Barbosa',
    idade: 8,
    parentesco: 'filho'
})

console.log(cliente)

const filhosMenores = cliente.dependentes.filter(dep => dep.idade < 18)

for (i = 0; i < filhosMenores.length; i++) {
    console.log(`dependente menor ${filhosMenores[i].nome} é ${filhosMenores[i].parentesco}.`)
}

console.log('--------------------------------')
// desafio 7 fazer depósitos
cliente.limite = 10
cliente.saldo = 0

cliente.depositar = function (valor) {
    this.saldo += valor
}

cliente.sacar = function (valor) {
    //console.log(this.saldo + this.limite)
    if (valor > (this.saldo + this.limite)) {
        console.log(`limite estourado em ${valor - (this.saldo + this.limite)} operação não efetuada `)

    } else {
        this.saldo -= valor
        if (this.saldo < 0) {
            console.log(`saldo negativo ${this.saldo}`)
        }
    }
}

cliente.depositar(30)
cliente.sacar(30)
console.log(`seu saldo é ${cliente.saldo}`)
console.log(`seu limite de crédito é ${cliente.limite}`)

