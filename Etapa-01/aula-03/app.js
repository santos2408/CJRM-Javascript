// ===== ARRAYS =================================

/*
   Arrays são utilizados para armazenar uma lista de dados que geralmente
   tem uma relação entre si, arrays são tipos de dados que se enquadram
   como objetos.

   Assim como strings, é possível acessar uma posição do array utilizando
   os colchetes e passando o index desejado, pode-se também inserir uma
   expressão dentro dos colchetes já que a operação irá retornar um valor
   como index.

   É possível atribuir um novo valor a um array existente, basta referenciar
   o index que deseja-se ter outro valor atribuído e inserir o valor.

   Pode-se inserir diferentes tipos de dados no mesmo array, apesar de não
   fazer sentido, pois o uso de arrays geralmente é utilizado para armazenar
   dados que tem uma relação entre si.

   De alguns métodos apresentados abaixo, atente-se para o método
   push() e pop(), pois são métodos que modificam o array original.

*/

let heroes = ['Batman', 'Catwoman', 'Iron Man']

heroes[2] = 'Spider-Man' // atribuindo novo valor

const ages = [31, 25, 39, 40, 25]

const randomArray = ['Parker', 'Diana', 19, 18] // não recomendado

// ===== ALGUNS MÉTODOS E PROPRIEDADES DE ARRAYS =============================

const lengthHeroes = heroes.length
console.log(lengthHeroes)
// assim como em strings, retorna o tamanho do array

const joinHeroes = heroes.join('|')
console.log(joinHeroes)
// retorna uma nova string com todos os itens concatenados e separados por vírgula
// recebe como argumento opcional um separador, vírgula é o padrão

const indexOf25 = ages.indexOf(25)
console.log(indexOf25)
// assim como na string, busca a primeira ocorrência do valor inserido
// caso o valor informado não exista no array, o retorno será -1, sempre.
// retorna a posição do valor inserido

const moreHeroes = heroes.concat(['Superman', 'Wolverine'])
console.log(moreHeroes)
// irá concatenar dois ou mais arrays
// não modifica o array original

const pushToHeroes = heroes.push('Cyclops', 'Hulk')
console.log(pushToHeroes) // total de itens
console.log(heroes) // array modificado
// adiciona valor ao final do array e retorna o total de itens
// modifica o array original (mutação de valores)
// o valor inserido fica no array original

const popHeroes = heroes.pop()
console.log(popHeroes)
// remove o último item do array e retorna este item
// modifica o array original (mutação de valores)
// remove o valor do array original

const numbers = [1, 2, 3, 4, 5, 6]
numbers.some(number => number % 2 === 0) // true
// testa a função passada em cada item do array / retorna um boolean
// se o teste retornar true em pelo menos um item, toda função retorna true
// recebe mais array e index como parametros opcionais
// pelo menos um item atende a função passada?

const numbers = [10, 20, 30, 40, 50]
numbers.find(number => number > 30) // item: 40
// retorna o primeiro elemento que satisfaça a função de teste

const numbers = [10, 20, 30, 40, 50]
numbers.findIndex(number => number > 30) // index: 3
// semelhante ao método find, o findIndex invés de retornar o primeiro item
// que atende a função passada, ele irá retornar o index desse item

const array1 = ['one', 'two', 'three']
array1.reverse()
// inverte a posição dos elementos
// o primeiro se torna o último e o último se torna o primeiro

// slice...
// splice...
// every...
// split
// Object.keys

console.log('========================================')

// ===== NULL E UNDEFINED =================================

/*
   São tipos de dados similares e representam a falta de um valor.
*/

/*
   UNDEFINED

   valores que não são atribuídos a uma variável são atribuídos
   automaticamente pelo javascript como undefined.

   Não é possível realizar operações com variáveis undefined,
   caso tente o valor retornado será NaN ( Not a Number )

   Ao inserir undefined como variável dentro de uma string,
   o valor retornado será uma string. Ex:

   `${variavelUndefined}` === 'undefined'

*/

let emptiness
console.log(emptiness, emptiness + 3, `O valor é ${emptiness}`)
// output: undefined NaN undefined

/*
   NULL

   Esse dado deve ser atribuído de forma proposital, quando quisermos
   indicar intencionalmente que não existe um valor para a variável.

   O null será interpretado como valor 0 em operações matemáticas.

   Ao inserir null como variável dentro de uma string,
   o valor retornado será uma string
*/

let nullValue = null

console.log(nullValue, nullValue + 3, `O valor é ${nullValue}`)
//output: null 3 null
