// ====== OBJETOS EM ARRAYS =========================

let user = {
   name: 'João',
   age: 31,
   email: 'joaocardoso@gmail.com',
   city: 'São Paulo',
   blogPosts: [
      { title: 'Empadão de Frango', likes: 30 }, // ***
      { title: '4 receitas de purê de batata', likes: 50} // ***
   ],
   login () {
      console.log('Usuário logado.')
   },
   logout () {
      console.log('Usuário deslogado.')
   },
   logBlogPosts () {
      console.log(`${this.name} escreveu os seguintes posts:`)

      this.blogPosts.forEach(post => {
         console.log(post.title, post.likes)
      })
   }
}

user.logBlogPosts()

// ====== O OBJETO MATH =========================

// ====== ALGUMAS PROPRIEDADES ======

// objeto Math
console.log(Math)

// propriedade PI: relação entre a circunferência e diâmetro de um círculo
console.log(Math.PI)

// propriedade E: base dos logaritmos naturais
console.log(Math.E)

// ====== ALGUNS MÉTODOS ======

const area = 7.8

/* 
   método round(): 

   converte de forma padrão um número decimal em inteiro com a conversão
   baseada no número decimal atual. Ou seja, se o decimal do número for um valor
   abaixo de .5 o número será arredondado para baixo. Se for .5 ou acima disso,
   o número será arredondado para cima.
*/

console.log(Math.round(area))

/* 
   método floor(): 

   realiza uma conversão semelhante ao método round, no entanto, independente
   do valor do decimal, o método floor irá sempre arredondar para baixo.
*/

console.log(Math.floor(area))

/* 
   método ceil(): 

   realiza uma conversão semelhante ao método floor, no entanto, será oposto a 
   ele, independente do valor do decimal, o número irá sempre ser arredondado 
   para cima.
*/

console.log(Math.ceil(area))

/* 
   método trunc(): 

   remove o decimal do número e retorna a sua parte inteira.
*/

console.log(Math.trunc(area))

// ======== GERANDO NÚMEROS ALEATÓRIOS ========

// o método random() gera um número decimal aleatório entre 0 e 1.

const randomNumber = Math.random()

console.log(randomNumber)

// utilizando o método random() para gerar um número aleatório entre 0 e 100

console.log(Math.round(randomNumber * 100))

/*
   uma dica para entender a geração de números aleatórios entre números, basta
   perceber que o número que o randomNumber é multiplicado é referente ao limite
   de geração de números aleatórios.
*/

// ====== TIPO REFERÊNCIA E TIPO PRIMITIVO =========================

// ===== TIPOS PRIMITIVOS ===============

/*
   - String
   - Number
   - Boolean
   - Null
   - Undefined
   - Symbol
   - BigInt
*/

// ===== TIPOS REFERÊNCIA ===============

/*
   - Objetos literais
   - Arrays
   - Funções
   - Objeto Data
   - Todos os outros objetos
*/

/*
   A diferença entre eles está na forma de como são armazenados na memória. Ao
   atribuirmos um valor de tipo primitivo a uma variável ou constante, esse valor
   será armazenado numa "stack" que é uma pilha de diferentes valores armazenados
   na memória que podem ser acessados rapidamente quando necessário.

   Os espaços na "stack" são limitados, portanto não comportam "valores complexos" 
   como são os objetos. Devido a isso os objetos são armazenados em outro local
   diferente da "stack", que são chamados de "heap" que é um amontoado de maior
   espaço disponível para armazenar objetos maiores e mais complexos.

   O "heap" é mais lento que a "stack" que é mais rápida. Eles são duas partes
   na memória para duas coisas diferentes.

   Valores primitivos são armazenados na "stack" e são acessados através do nome 
   da variável, já valores mais complexos como objetos são armazenados no "heap"
   e um ponteiro é criado na "stack" e esse ponteiro "aponta" para o objeto localizado
   no "heap". Portanto quando chamamos um objeto que está no "heap", essa chamada
   entra na "stack" localiza o ponteiro e puxa o objeto da "heap".

   Portanto, valores no "heap" são acessados através de ponteiros e valores
   na "stack" são acessados através do nome da variável.
*/

// valores primitivos armazenados na "stack"
let scoreOne = 50
let scoreTwo = scoreOne // cópia do scoreOne

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`) // 50 50

scoreTwo = 100

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`) // 50 100

// valores de referência
let userOne = { name: 'Roger', age: 25 }
let userTwo = userOne // tentando criar uma cópia, mas como é um objeto tipo
// referencia, está sendo copiado o ponteiro da userOne, portanto estão 
// apontando para o mesmo local.

console.log(userOne, userTwo) // userOne = userTwo

userOne.age = 30

console.log(userOne, userTwo) // userOne = userTwo
// as duas 'ages' foram modificados pois apontam pro mesmo objeto.

/*
   Se desejássemos criar de fato uma cópia independente de um objeto, evitando 
   que ele seja copiado por referência, ou seja, que tenha um ponteiro apontando 
   para o objeto original, podemos usar a sintaxe de 'spread operator'.
*/

const userThree = { name: 'Santos', age: 26 }
const userFour = { ...userThree } // cópia independente / sem ponteiro

console.log(userThree, userFour) // { name: 'Santos', age: 26 }, { name: 'Santos', age: 26 }

userFour.name = 'Campelo'
// alterando apenas a cópia

console.log(userThree, userFour) // { name: 'Santos', age: 26 }, { name: 'Campelo', age: 26 }


