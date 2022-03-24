// repetições

const alunos = ['João', 'Juliana', 'Ana', 'Caio']
const mediaEFaltaDosAlunos = [10, 7, 9, 6]
const faltaAlunos = [1, 2, 10, 3]

let alunosEMedias = [alunos, mediaEFaltaDosAlunos, faltaAlunos]

console.log(alunoAprovado('Juliana'))

function alunoAprovado(nomeAluno) {
    if (alunosEMedias[0].includes(nomeAluno)) {
        let indice = alunosEMedias[0].indexOf(nomeAluno)
        if ((alunosEMedias[1][indice] < 7) || (alunosEMedias[2][indice] >= 10)) {
            return (`${alunosEMedias[0][indice]} voce foi reprovado, sua média é ${alunosEMedias[1][indice]} e voce tem ${alunosEMedias[2][indice]} faltas`)
        } else {
            return (`${alunosEMedias[0][indice]} voce foi aprovado, sua média é ${alunosEMedias[1][indice]} e voce tem ${alunosEMedias[2][indice]} faltas`)
        }
    } else {
        return (`aluno: ${nomeAluno}  não existe no banco de dados`)
    }
}

