const cliente = {
    nome: "André",
    idade: 36,
    cpf: "15415415477",
    email: "andre@email.com.br",
    fones: ['47991382857', '47991463556']

}
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
cliente.saldo = 0
cliente.limite = 1000

cliente.depositar = function (valor) {
    this.saldo += valor
    console.log(`Saldo disponivel = ${this.saldo + this.limite}`)
}



function imprimeRelarorio() {
    let relatorio = ""
    for (let info in cliente) {
        if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {

        } else {
            relatorio += `
            -${info} ==> ${cliente[info]}
            `
        }
    }
    console.log(`relatório  
    ${relatorio}`)
}

imprimeRelarorio()
cliente.depositar(1000)
imprimeRelarorio()

// operador de espalhamento

// Criando novo Array objeto Clientes
const clientes = [cliente]



clientes.push({
    nome: "Juliana",
    cpf: "15215215288",
    dependentes: [{
        nome: "Sophia",
        parentesco: "filha",
        idade: 12
    }]
})

for (i = 0; i < clientes.length; i++) {
    console.log(`correntista: ${clientes[i].nome}`)
    console.table([...clientes[i].dependentes])
     
}
