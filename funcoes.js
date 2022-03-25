// declaração de função


function imprimeRetorno(retorno) {
    console.log(retorno)

}

imprimeRetorno('oi');
imprimeRetorno('qualquer texto');
imprimeRetorno(soma(3, 5));
imprimeRetorno(soma(12));
imprimeRetorno(soma(548, 3325));
imprimeRetorno(multipl(10, 6));
imprimeRetorno(multipl(400));
imprimeRetorno(multipl(8));




function soma(num1 = 1, num2 = 1) {
    const resultado = num1 + num2;
    return resultado
}

function multipl(num1 = 2, num2 = 1) {
    return num1 * num2
}