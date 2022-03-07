// exemplos com Null

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

input = "informação presente";

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

// Indefined

let imput2;

console.log(imput2)

// podem ser comparadas com os dois operadores == e ===

console.log(null == undefined); // true
console.log(null === undefined); // false