const clientes = [{
    nome: 'André',
    idade: 36,
    cpf: '15415415477',
    email: 'andre@email.com.br',
    fones: ['47991382857', '47991463556'],
    dependentes: [
        { nome: 'Sara Winter', idade: 19, parentesco: 'filha' },
        { nome: 'Sandra Bigorna', idade: 13, parentesco: 'filha' },
        { nome: 'Abelardo Barbosa', idade: 8, parentesco: 'filho' }
    ]
},
{
    nome: "Juliana",
    cpf: "15215215288",
    dependentes: [{
        nome: "Sophia",
        parentesco: "filha",
        idade: 12
    }]
}
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)

const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}

const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}
const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro)