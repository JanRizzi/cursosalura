//arrow function (flexa)

// função declarada
//function teste(parametro){
    //linhas de código
    //return
//}
// funçao expressão
//const teste1 = function(parametro){return parametro}
// função arrow
//const Arrow = parametro => retorno sem precisar return

//exempos

const apresentarArrow = nome => `meu nome é ${nome}`

console.log (apresentarArrow("Jander"))

// expressão

const expressao = function(nome){return `meu nome é ${nome}`}

console.log(expressao('Jander'))

// declarada

function declarada(nome){
    return `meu nome é ${nome}`
}

console.log (declarada('Jander'))

// Arrow com mais de uma linha

const somaNumerosPequenos = (num1, num2) => {
    if (num1 >= 10 || num2 >= 10){
        return "somente numeros menores que 10"
    } else{
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(10,5));
console.log(somaNumerosPequenos(0,1));

