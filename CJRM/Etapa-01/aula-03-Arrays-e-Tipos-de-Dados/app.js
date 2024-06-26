/*
  ======== TÓPICOS DESTA AULA ========

    - ARRAYS
    - MÉTODOS E PROPRIEDADES DE ARRAYS
    - NULL E UNDEFINED

   ===== TIPOS DE DADOS PRIMITIVOS =================================

   - String
   - Number
   - Boolean
   - Null
   - Undefined
   - Symbol
   - BigInt

   ===== ARRAYS =================================
   
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
   push() e pop(), pois são métodos que modificam o array original. Mas existem 
   também outros métodos que podem alterar o array original, deve-se ter atenção 
   quanto a isso, pois pode não ser o comportamento que você deseja.
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

const indexOf25 = ages.indexOf(25) // busca por 25 dentro do array
console.log(indexOf25)
// assim como na string, busca a primeira ocorrência do valor inserido
// caso o valor informado não exista no array o retorno será sempre -1.
// retorna a posição (index) do valor inserido

const moreHeroes = heroes.concat(['Superman', 'Wolverine'])
console.log(moreHeroes)
// irá concatenar dois ou mais arrays e retornar esse novo array
// não modifica o array original
// no ES6 surgiu o spread operator que realiza a mesma operação (recomendado)

const pushToHeroes = heroes.push('Cyclops', 'Hulk')
console.log(pushToHeroes) // total de itens
console.log(heroes) // array modificado
// adiciona item ao final do array e retorna o total de itens
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
// recebe array e index como parametros opcionais
// pelo menos um item atende a função passada? boolean

const numbers = [10, 20, 30, 40, 50]
numbers.find(number => number > 30) // item: 40
// retorna o primeiro elemento que satisfaça a função de teste
// semelhante ao método some, mas retorna o item e não um boolean

const numbers = [10, 20, 30, 40, 50]
numbers.findIndex(number => number > 30) // index: 3
// semelhante ao método find, o findIndex invés de retornar o primeiro item
// que atende a função passada, ele irá retornar o index desse item

const array1 = ['one', 'two', 'three']
array1.reverse()
// inverte a posição dos elementos
// o primeiro se torna o último e o último se torna o primeiro para todos os pares

const array1 = ['one', 'two', 'three', 'four', 'five']
array1.slice(1)
array1.slice(2, 4)
// retorna uma cópia rasa de um pedaço de um array em um novo array
// seleciona o index (initial e final), sendo o final não incluído no 'corte'
// os valores iniciais e finais representam o index do item
// não modifica o array original
// a partir de qual índice você deseja cortar ?
// -1 equivale ao último item

const array1 = ['one', 'two', 'three', 'four']
array1.splice(1, 0, 'banana')
array1.splice(2, 1, 'segundo')
// muda o conteúdo de um array, removendo, alterando ou adicionando elementos
// modifica o array original
// valor inicial: index onde ocorrerá as modificações
// valor de delete: numero de elementos que serao deletados a partir do valor inicial
// valor de replace: elementos que serao adicionados a partir do valor inicial

const array1 = ['one', 'two', 'three']
array1.every(item => item === 1) // false
// verifica se todos os elementos passam na função de teste passada como argumento
// se todos passarem no teste, retorna true
// se ao menos um não passar, toda função retorna false

const array1 = 'roger'
array1.split('') // separa cada caracter ['r', 'o', 'g', 'e', 'r']
array1.split(' ') // separa os itens a cada 'espaço' encontrado
array1.split(':') // separa os itens a cada ':' encontrado
// divide uma string em uma lista ordenada separada com base no padrão passado
// recebe por argumento um padrão como parâmetro de separação dos itens do elemento
// no final insere tudo dentro de um array e retorna

const myObj = { a: 1, b: 2, c: 3 }
const myObjArray = Object.keys(myObj) // [ a, b, c ]
// retorna um array com as 'property names' do objeto passado como argumento
// são criados na mesma ordem dos itens do objeto

const myObj = { a: 1, b: 2, c: 3 }
const myObjArray = Object.values(myObj) // [ 1, 2, 3 ]
// retorna um array com os 'values' do objeto passado como argumento
// são criados na mesma ordem dos itens do objeto

const myObj = { a: 1, b: 2, c: 3 }
const myObjArray = Object.entries(myObj) // [ [a, 1], [b, 2], [c, 3] ]
// retorna um array com 'chave e valor' do objeto dentro de um array 
// cada 'chave e valor' separados por array
// são criados na mesma ordem dos itens do objeto

const shiftMethod = [1, 2, 3, 4, 5]
const firstElement = shiftMethod.shift()
// remove o primeiro elemento do array e retorna esse elemento
// modifica o array original (mutação de valores)
// se length do array for 0, retorna undefined

const deth1 = [1, 2, 3, [4, 5, 6], [7, 8, 9]]
const deth2 = [1, 2, 3, [4, 5, 6, [7, 8]], 9, 10]

const resultDeth1 = deth1.flat()
const reusultDeth2 = deth2.flat(2)
// cria um novo array com todos os sub-arrays concatenados recursivamente
// a recursividade é feita com base na 'profundidade' especificada

// unshift
// copyWithin
// fill
// at

console.log('========================================')


/*
   ===== NULL E UNDEFINED =================================
   
   São tipos de dados similares e representam a falta de um valor.
   
   === UNDEFINED ===

   Valores que não são atribuídos a uma variável são atribuídos automaticamente 
   pelo javascript como undefined. Não é possível realizar operações com variáveis 
   undefined, caso tente o valor retornado será NaN ( Not a Number )

   Ao inserir undefined como variável dentro de uma string, o valor retornado 
   será uma string. Ex:

   `${variavelUndefined}` === 'undefined'

*/

let emptiness
console.log(emptiness, emptiness + 3, `O valor é ${emptiness}`)
// output: undefined NaN undefined

/*
   === NULL ===

   Esse dado deve ser atribuído de forma proposital, quando quisermos
   indicar intencionalmente que não existe um valor para a variável.

   O null será interpretado como valor 0 em operações matemáticas. Ao inserir 
   null como variável dentro de uma string, o valor retornado será uma string
*/

let nullValue = null

console.log(nullValue, nullValue + 3, `O valor é ${nullValue}`)
//output: null 3 null
