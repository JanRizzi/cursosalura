// declaração de função

function minhaFuncao(parametro){
    // códigos e retorno
}

minhaFuncao('parametro');

// expressão de função

const soma = function(num1, num2){return num1+num2}

console.log(soma(3,3))

// Diferenças: a expressão tem que passar os parametros depois de declarada
// a declaração pode ser feito em qualquer lugar do código

console.log(apresentar('Jander'))

function apresentar(nome){
    return `meu nome é ${nome}`
}

//console.log(apresentar1('Jander'))
//Esse vai dar erro porque não chama a constante
// as funçoes e as var são inicializadas todas antes (hoisting)

const apresentar1 = function(nome){return `meu nome é ${nome}`}

console.log(apresentar1('Jander'))



