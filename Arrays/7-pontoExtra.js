const notas = [10,9,8,7,6,5]

const notasAtualizadas = notas.map( nota=> nota==10 ? nota : nota=nota+1)

console.log(notasAtualizadas)

notasAtualizzadas2 = notas.map(chamaFuncao)

console.log(notasAtualizzadas2)

function chamaFuncao (novaNota){
    if (novaNota == 10){
        return novaNota
    } else{
        novaNota = novaNota + 1
        return novaNota
    }
}