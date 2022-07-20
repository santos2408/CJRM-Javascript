// === IF E ELSE IF STATEMENTS ==========

/*
   São estruturas condicionais que executam um bloco de código (statements) 
   apenas se a condição resultar em valor verdadeiro. O bloco de código é 
   executado apenas uma vez. Portanto, o if e if else só executarão condições 
   que tenham o valor truthy.

   Para mútliplos statements utilizamos um bloco de código, mas caso o if 
   retorne apenas uma linha podemos utilizar um retorno implícito que diminui 
   a quantidade de linhas e em alguns casos deixa o código mais legível. Vale 
   lembrar que nem sempre essa é uma prática recomendável devido a problemas de 
   segurança e entendimento do JS. Dê preferência para if em blocos e evite inline.

   Evite também inserir uma atribuição como condição de um if, por exemplo:
   if (x = 1). Na aula de while veremos o uso desse tipo de atribuição.

   Caso nenhum bloco de código resulte em verdadeiro, o javascript irá executar
   o bloco de código else, caso exista.

   O IF E ELSE IF STATEMENTS só executarão um bloco de código, mesmo
   que o código tenha múltiplas condições diferentes.

   É possível ter múltiplas condições encadeadas com else if, mas cuidado pois
   dificulta um pouco a leitura, em alguns casos dê preferências para blocos de 
   if únicos com return, assim evitando if else e else.
*/

const age = 19

if (age >= 18) {
   console.log('Você tem mais de 18 anos.')
}

const simpsons = ['Marge', 'Homer', 'Lisa', 'Bart']

if (simpsons.length >= 5) {
   console.log('o array tem bastante personagens')
} else {
   console.log('o array tem poucos personagens')
}

// ELSE IF

/*
   Com o else if é possível executar um bloco de código caso a condição
   if seja false, nesse caso o javascript vai pular para o else if, verificar
   a condição e se verdadeira irá executar o bloco dentro dele. Caso o else if 
   também seja false, o JS irá pular para o bloco else, se houver.

   Em alguns caso o uso de else if pode começar a sujar o código, nesse caso 
   podemos optar por colocar apenas blocos de if único para cada condição e 
   retornálos com return, invés de interpolar um else if.

   if (... return)
   if (... return)
*/

const password = 'oi123'

// ===== forma clássica =====
if (password >= 12) {
   console.log('Essa senha é forte')
} else if (password >= 8) {
   console.log('Essa senha tem 8 ou mais caracteres')
} else {
   console.log('Essa senha é muito fraca.')
}

// ===== if's unícos / mais legível =====

/* 

Obs: nesse estilo, caso todo esses if's estejam dentro de outro bloco de código 
como por exemplo uma função, o último if pode ser excluído e no lugar dele ser 
inserido apenas a declaração que seria executada caso nenhum if satisfizesse a 
condição. Nesse caso, em cada if colocaríamos um return, para que o código abaixo 
não fosse executado e caso todos os if's sejam falsy, o último código é executado.

*/

if (password >= 12) {
   console.log('Essa senha é forte')
   return
}

if (password >= 8) {
   console.log('Essa senha tem 8 ou mais caracteres')
   return
}

if (password < 8) {
   console.log('Essa senha é muito fraca.')
   return
}

// ===== talvez não tanto legível / retorno implícito / evite =====
if (password >= 12) console.log('Essa senha é forte')
if (password >= 8) console.log('Essa senha tem 8 ou mais caracteres') 
if (password < 8) console.log('Essa senha é muito fraca.')

// ===== OPERADORES LÓGICOS - "OU" || e "E" && =========================

/*
   São curto-circuitos que executam o código se a combinação de condições 
   diferentes resultar em true. A combinação de condições diferentes pode ser 
   inserida dentro dos parênteses da condicional if ou else if.

   O operador && verifica se duas ou mais condições são verdadeiras,
   se qualquer uma das condições resultar em false, toda a expressão
   resultará em false e o bloco de código não será executado. Adicionar
   diversas condições lógicas não é uma prática recomendada, pois dificulta
   a manutenção e leitura do código. Existem formas mais eficientes.

   Portanto, o operador && retornará true se e apenas se TODOS os operandos 
   forem true, caso contrário, toda a expressão retornará false.

   Em geral, a expressão é lida da esquerda para a direita, o operador && irá 
   avaliar as combinações e ele retornará o primeiro valor(operando) falsy que 
   ele encontrar. Caso todas as combinações sejam truthy, ele irá retornar o 
   último valor(operando).

   true && true = true
   true && false = false

   ==========================================

   O operador || retornará verdadeiro se pelo menos uma das condições analisadas
   forem verdadeiras. Diferente do && que necessita que todas as expressões
   retornem true para retornar true, o operador || só precisa que uma retorne
   true para que toda expresão retorna true.

   A expressão é lida da esquerda para a direita e o operador && é lido antes 
   do operador ||, independente de sua posição na expressão, o && sempre será
   analisado primeiro. Ou seja, o operador && tem uma precedência maior do que 
   o ||.

   password.length >= 8 || password.length.includes('1') && password.length >= 5

   Primeiro executa as expressões com && e depois analisa com a ||

   Se encontrar um código com diversos operadores lógicos executando uma 
   operação, o mais recomendado é analisar o que está acontecendo e refatorar 
   ele para boas práticas, deixando mais legível e de fácil manutenção, por exemplo 
   armazenando o curto-circuito numa variável.

   true || true = true
   true || false = true

*/

const password = 'oi1dr'

if (password >= 12 && password.includes('1')) {
   console.log('Essa senha é forte')
} else if (password >= 8 || password.includes('1') && password.length >= 5) {
   console.log('Essa senha tem 8 ou mais caracteres')
} else {
   console.log('Essa senha é muito fraca.')
}
