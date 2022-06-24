// ===== BOOLEANS E OPERADORES DE COMPARAÇÃO =================================

/*
   Booleans representam dois valores especiais em javascript: true e false.
   São usados para verificar uma condição do código, ou seja, quando
   for necessário checar se um pedaço de código é verdadeiro ou falso.
*/

// Booleans e Comparações
console.log(true, false, 'true', 'false')

// Alguns métodos que retornam true ou false
const email = "roger.santos33@gmail.com"

const includes = email.includes('@') // true
// método de array
// verifica se uma string existe dentro de outra
// existe? true, não existe? false
// true ou false é atribuído na variável includes

const contains = menu.classList.contains('class-name')
// método de DOMTokenList
// verifica se uma classe existe no domtokemlist
// true ou false será atribuído na classe contains

const names = ['dio', 'roger', 'robert']
const arrayIncludes = names.includes('roger') // true
// também funciona em arrays
// includes tentará dar um match no valor passado como argumento em algum item do array

// Operadores de Comparação

// esses operadores retornam um boolean

const age = 25 // atribuição

console.log(age == 25) // true
// age (é igual a) 25
// igualdade ampla

console.log(age == 30) // false
// age (é igual a) 30

console.log(age != 25) // false
// age (não é igual a) 25

console.log(age != 30) // true
// age (não é igual a) 30

console.log(age > 20) // true
// age (é maior que) 20

console.log(age < 20) // false
// age (é menor que) 20

console.log(age >= 25) // true
// age (é maior ou igual) 25

console.log(age <= 20) // false
// age (é menor ou igual a) 20

const name = 'roger'

console.log(name == 'roger') // true

console.log(name == 'Roger') // false
// o javascript é case sensitive, para ele essas duas palavras são diferentes

console.log(name > 'belinha') // true
// no alfabeto a letra 'r' vem depois da letra 'b', portanto é maior
// a letra que vem depois é sempre maior que a anterior

console.log(name > 'Roger') // true
// uma letra minúscula é maior que uma maiúscula, tem maior prioridade
// javascript dará prioridade maior para letras minúsculas

console.log(name > 'Belinha') // true
// letra minúscula é maior que qualquer letra maiúscula
// letra 'r' vem antes da letra 'b'

console.log('Roger' > 'belinha') // false
// letra minúscula tem prioridade

console.log(name > 'Sula') // true

/*
   Mesmo a maiúscula sendo maior na ordem alfabética, a minúscula será
   ainda maior que ela.
*/

// ===== COMPARAÇÕES COM IGUALDADE AMPLA E ESTRITA ===========================

// 'igual' a' e 'diferente de' (ampla)

console.log(age == 25) // true
console.log(age == '25') // true *
console.log(age != 25) // false
console.log(age != '25') // false *

// isso acontece porque todo vez que se usa (==) ou (!=) ambos os operadores
// executam conversão de tipos, a string '25' será convertida para tipo number
// essa conversão acontece antes do início da comparação
// esses dois comparadores não são a forma mais confiável de comparar valores

// 'igual a, e do mesmo tipo' e 'diferente de, e do mesmo tipo' (estrita)

console.log(age === 25) // true
console.log(age === '25') // false
console.log(age !== 25) // false
console.log(age !== '25') // true

// recomendado!

// ===== CONVERSÃO DE TIPOS =================================

let score = '100'

score = Number(score)
// função construtora que converte para número

console.log(score + 1)
console.log(typeof score)

const crazyConvertion = Number('Maçã') // NaN, pois não faz sentido
const crazyConvertion = String(97) // '97' string
const booleanConvertion = Boolean(10) // true, tipo boolean

// Number(), Boolean(), String() converte explicitamente seus valores

/*
   - concatenação de string e número terá resultado uma string
   - função construtura a princípio converte um valor para outro
   - typeof verifica o tipo de dado, em algumas situações não é a melhor escolha
   - tentar converter strings em número ou vice-versa resulta em NaN quando a
   conversão não fizer sentido
*/

/*
   Valores falsy:
      - false
      - 0
      - "", '', ``
      - null
      - undefined
      - NaN

   Qualquer um desses valores convertidos para boolean resultam em false

   Valores truthy:
      - É qualquer valor que não seja falsy
*/
