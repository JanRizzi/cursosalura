// exemplo sem template sting

const nome = 'Jander';
const idade = 2022-2005;
const cidadeNascimento = 'Santo André';
const apresentacao1 = 'Meu nome é ' + nome + ', minha idade é ' + idade + 
' e nasci em ' + cidadeNascimento;

console.log(apresentacao1)
// exemplo com template string

                    // abre e fecha com acento grave
const apresentacao = `meu nome é ${nome}, minha idade é ${idade} 
e nasci em ${cidadeNascimento}`;

console.log(apresentacao);

// usando template string com operador ternario

console.log(`oi, meu nome é ${nome} e quero beber ${idade >= 18 ? "cerveja" : "suco"}`
)







