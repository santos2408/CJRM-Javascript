// ===== STRINGS =================================

console.log('Hello, World')

const email = 'roger.santos36@gmail.com'

console.log(email.charAt(0))
console.log(email)

/*
   Strings são cadeias de caracteres armazenadas dentro de aspas simples
   ou duplas. Independente da escolha, o comportamento é o mesmo. 
   É possível também armazer uma string dentro de uma variável

   Números dentro de strings são considerados strings

   '20' != 20
*/

// concatenação de strings
const firstName = 'Nathan'
const lastName = 'Drake'
const fullName = firstName + ' ' + lastName

console.log(fullName)

/*
   A concatenação é utilizada para juntar duas coisas, ou seja,
   é possível unir duas varíaveis que contém uma string em cada.
   A concatenação é feita inserindo o sinal de '+' entre elas.

   Vale lembrar que para criar um espaço entre as strings, é necessário
   inserir uma nova string com um espaço "em branco" para que seja criado
   o espaço entre elas.
*/

// acessando caracteres
console.log(fullName[0])

/*
   É possível acessar um caractere específico dentro da string,
   inserindo colchetes no fim do nome da variável e dentro inserir
   o valor do index(posição) que deseja acessar.

   Ou através do método charAt(index)
*/

// comprimento de uma string (propriedade)
console.log(fullName.length)

/*
   Length é uma propriedade de string que exibe o comprimento da mesma, 
   ou seja, o número de caracteres.

   Atenção: espaços em branco também são contados como um caractere.
*/

// métodos de string ("funções")
console.log(fullName.toUpperCase())

const result = fullName.toLowerCase()

console.log(result, fullName)

/*

   toUpperCase() = método que deixará todos os caracteres da string maiúsculos
   toLowerCase() = método que deixará todos os caracteres da string minúsculos

   Vale lembrar que para executar um método, é necessário inserir parênteses
   no final do nome, isso o invocará e executará.

   esses dois métodos não alteram a string original, mas existem alguns
   métodos que alteram.

   Funções são pedaços de código que executam uma ação específica.
   Método é uma função que está embutida por padrão em um objeto ou tipo 
   de dado em particular

   Os dois significam que ocorrerá algum tipo de função que executará uma
   função específica.

*/

// buscando index que contém o valor especificado nos parênteses

/* 
   existem métodos que esperam receber algum valor dentro dos parênteses
   de execução deles.

   o valor especificado nos parênteses da invocação de um método
   é chamado de argumento.

   o método indexOf() busca em que posição se encontra
   o caracter inserido dentro do seu argumento.

*/

const index = email.indexOf('@')
// @ se encontra na index 14 da string
// pegará a primeira ocorrência do caracter

console.log(index)

console.log('========================================')

// ===== ALGUNS MÉTODOS DE STRINGS =================================

// métodos comuns de string

/*
   Métodos são funções que pertencem a um objeto ou tipo de dado específico
*/

/*
   lastIndexOf()
   
   Irá obter o índice(posição) da última ocorrência do caracter
   que for passado como argumento.
*/

const meuEmail = 'roger.santos36@gmail.com'

const lastIndexOfO = meuEmail.lastIndexOf('o')

console.log(lastIndexOfO)

/*
   slice() 
   
   Irá pegar(fatiar) um pedaço da string, é usado para obter uma parte de
   uma string. Esse método não altera o valor original da string, na verdade
   o método retorna um cópia alterada. São passados dois argumentos para 
   esse método. 
   
   O primeiro argumento refere-se ao índice do caracter a partir do qual esse 
   pedaço da string deve ser pego. Ou seja, esse argumento será o ínicio. 
   
   O segundo argumento refere-se ao índice que a partir dele a string deve ser 
   cortada.

   Vale lembrar que o segundo argumento do método slice é opcional, ou seja,
   caso seja omitido o javascript entenderá que é para ser pego do índice 
   informado no primeiro argumento até o final da string.

*/

const emailSlice1 = meuEmail.slice(0, 5)
const emailSlice2 = meuEmail.slice(6, 12)
const emailSlice3 = meuEmail.slice(0, 14)
const emailSlice4 = meuEmail.slice(14)
const emailSlice4 = meuEmail.slice(-1) // último caracter

console.log(emailSlice1)
console.log(emailSlice2)
console.log(emailSlice3)
console.log(emailSlice4)

/*
   replace() 
   
   Substitui o caracter ou uma cadeia de caracteres de uma string por outro, 
   esse método recebe dois argumentos. O primeiro é a string que queremos 
   substituir e o segundo é a string que vai substituir a string passada 
   no primeiro argumento.

   Lembre-se que ao executar esse método, apenas a primeira ocorrência do
   caracter inserido que irá ser substituido, caso haja outras caracteres,
   eles não serão alterados. No entanto é possível alterar todas as ocorrências
   do caracter em aulas mais avançadas.

   O replace também não altera a string original.
*/

const emailReplace1 = meuEmail.replace('@', '&')
const emailReplace2 = meuEmail.replace('roger', 'alessandra')

console.log(emailReplace1)
console.log(emailReplace2)

console.log('========================================')

// ===== NUMBERS =================================

// === inteiros e decimais ===
const radius = 10
const pi = 3.14

/*
   - números decimais são representados utilizando ponto (.)

   - o valor de pi é utilizado na matemática para calcular a área do circulo

*/

// === operadores aritméticos ===

const area = pi * radius ** 2
// fórmula para calcular área do círculo


const somar = 10 + 5
const dividir = 8 / 2
const modulo = 5 % 2 // resto da divisao
const potencia = 5 ** 2 // cinco elevado a 2

console.log(somar, dividir, modulo, potencia)

// === ordem das operações ===

const crazyOperation = 5 * (10 - 3) ** 2

console.log(crazyOperation)

// 1º parênteses
// 2º expoentes ou raízes
// 3º multiplicação, divisão e módulo
// 4º adição e subtração

// === operadores de incremento e decremento ===

let postLikes = 10

// postLikes = postLikes + 1

// postLikes++ (incremento)
// postLikes-- (decremento)

// === operators addition, subtraction, multiplication and division assignment ===

// postLikes = postLikes + valor // expressão inteira
// postLikes += valor // shorthand (boas práticas)

// postLikes += 10 // addition assignment
// postLikes -= 5 // subtraction assignment
// postLikes *= 5 // multiplication assignment
// postLikes /= 2 // division assignment

console.log(postLikes)

// === NaN - Not a Number ===

// operação que não faz sentido

console.log(10 / 'Olá') // NaN

// === concatenção de strings com número ===

/*
   quando strings e números são concatenados,
   por baixo da linguagem o javascript transforma os números
   em strings. Ou seja, toda concateção entre strings e números
   sempre retornará uma string
*/

const likesMessage = 'O post tem ' + postLikes + ' likes.'

console.log(likesMessage)

// ===== TEMPLATE STRINGS  =================================

const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Mateus Saad'
const postComments = 15

// usando concatenação (ES5)
// pouco legível
const postMessage = 'O post "' + postTitle + '", do ' + postAuthor + ', tem ' + postComments + ' comentários.'

/*
   caso não queira utilizar aspas dentro de aspas para os nomes,
   é possível utilizar o escape notation para "escapar" o caracter desejado.
   Ou seja, o javascript interpretará o elemento com escape notation como um 
   caracter e não como um fechamento da string.

   Exemplo abaixo:
*/

console.log('Você manja do filme \"As branquelas\"?')
// aspas duplas estão sendo interpretadas como caracteres.

// usando template strings/template literals (ES6)
// mais legível

// crases = backticks
// expressões = interpolações / placeholders

const postMessage2 = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários.`

console.log(postMessage2)

// criando templates HTML

const html = `
   <h2>${postTitle}</h2>
   <p>${postAuthor}</p>
   <span>Este post tem ${postComments} comentários.</span>
`

console.log(html)

/*
   Quando não será interpolado variáveis na string ou usar aspas ou quebras
   linhas, não precisa utilizar template strings. Mas se a string sendo
   criada precisa conter variáveis, aspas ou templates html, a template strings
   facilitará a escrita do código e melhorará a leitura do mesmo.
*/






