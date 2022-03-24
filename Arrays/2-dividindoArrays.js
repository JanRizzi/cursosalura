// Dividindo arrays

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie',
    'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian',
    'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']

// console.log(alunos.length)
// console.log (alunos)

const sala1 = alunos.slice(0, alunos.length / 2)// indice de 0 a 10 (sem o 10)
const sala2 = alunos.slice(alunos.length / 2)// indice de 10 ao final

console.log('alunos da sala 1', sala1)
console.log('alunos da sala 2', sala2)

//atualizando lista

const listaDeChamada = sala1

listaDeChamada.splice(2, 2, 'Rodrigo')// no terceiro indice(2) remove 2 elementos e acrescenta Rodrigo

console.log(listaDeChamada)

listaDeChamada.splice(3, 0, 'Irmão do Rodrigo')// no quarto indice(3) remove 0 elementos e acrescenta irmãode rodrigo

console.log(listaDeChamada)

// juntando listas

const salasUnificadas = sala1.concat(sala2)

console.log(salasUnificadas)
