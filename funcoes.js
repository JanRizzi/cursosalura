// declaração de função


function imprimeRetorno (retorno){
    console.log(retorno)

}

imprimeRetorno('oi');
imprimeRetorno('qualquer texto');
imprimeRetorno(soma(3,5));
imprimeRetorno(soma(548,3325));
imprimeRetorno(multipl(10,6));


function soma(num1, num2){
    const resultado = num1 + num2;
    return resultado
}

function multipl(num1, num2){
    return num1 * num2
}