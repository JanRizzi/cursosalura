function soma(numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(2,2))
console.log(soma(2455 ,20))
console.log(soma(-500, 60))

// parametros e argumentos são sinonimos

// ordem dos parametros importa

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(50, 'Jander'))
console.log(nomeIdade('Jander', 50))

//função chamando função

function multiplica(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplica(soma(2,8), soma(25,9)));

// se faltar parametro da NaN
// Deixar um valor provisório nos parametros

function multiplica2(numero1 =1, numero2 =1){
    return numero1 * numero2;
}

console.log(multiplica(soma(2,8)));
console.log(multiplica2(soma(2,8), soma(25,9)));
console.log(multiplica2(soma(2,8)));




