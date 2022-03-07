//outros valores podem ser comparados com true e false
// 0 e 1 onde 0 = false e 1 = true
// string vazia pode ser false


let texto = '123'
let numero = 123
let varNull = null
verificaBoleano = (0 == false)

console.log(verificaBoleano)

console.log(1 == true)

console.log('' == false)

console.log(texto == numero)

//dois iguais compara o valor e nao o tipo

console.log(0 === false);

console.log(1 === true)

console.log(texto === numero)

//tres iguais compara valor e tipo

//typeof retorna o tipo de variavel ==> Null retorna objeto


console.log (typeof texto)
console.log (typeof numero)
console.log(typeof verificaBoleano)
console.log(typeof varNull)

//da para transformar string em numero e numero em strig

textoTransformado = Number(texto)

console.log(textoTransformado)
console.log(typeof textoTransformado)
console.log(typeof String (numero) + " " + numero)

