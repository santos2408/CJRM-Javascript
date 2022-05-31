/*
   MÉTODO SORT()

   Ordena os itens de um array. Muito útil quando precisamos ordenar itens de 
   um array em ordem alfabética, crescente ou decrescente, objetos, entre outros.

   Lembre-se que o método sort altera o array original, diferente de outros 
   métodos. Portanto, caso não deseje que isso acontece, armazene o novo array 
   numa outra constante ou crie uma cópia utilizando o método map.

   Apenas invocando o sort, por padrão ele ordenará os itens por ordem 
   alfabética ou crescente. Vale lembrar que o ordenamento de números é feito 
   baseado apenas na primeira casa decimal do item, as unidades.

   Para ordenarmos itens de forma mais complexa, por exemplo, em objetos, 
   precisamos inserir um argumento opcional no sort que é uma função de 
   comparação. Ela será usada para ordenar e comparar valores do array.

   Essa função recebe dois parâmetros que representam dois itens consecutivos 
   do array, e dentro dessa função iremos comparar esses itens e decidir qual 
   deles deve vir primeiro no array.

   Essa função deve retornar um valor com base na seguinte situação: Ela deve 
   retornar um valor maior que 0, menor que 0 ou igual a 0. Por exemplo:

   * se o segundo parâmetro é maior que o primeiro parâmetro, a função deve 
   retornar um número positivo e o segundo parâmetro virá antes do primeiro.

   * se o primeiro parâmetro for maior que o segundo parâmetro, a função deve 
   retornar um número negativo e o primeiro parâmetro vai vir antes do segundo 
   parâmetro.

   * Se os dois parâmetros forem iguais e não tivermos que ordená-los, a 
   função deve retornar o número zero, ou seja, "nada será feito".

   Se quisermos que o ordenamento seja feito em ordem decrescente, o segundo 
   argumento deve vir antes do primeiro.
*/

// exemplo 1: ordenando strings
const names = ['Christian', 'Alfredo', 'Edson']

names.sort()

// exemplo 2: ordenando números
const scores = [10, 50, 20, 5, 35, 70, 45]

scores.sort()

// exemplo 1: ordenando objetos
const theBigFamily = [
   { name: 'Lineu', score: 20 },
   { name: 'Nenê', score: 10 },
   { name: 'Tuco', score: 50 },
   { name: 'Bebel', score: 30 },
   { name: 'Agostinho', score: 70 }
]

theBigFamily.sort((item1, item2) => {
   if (item1.score > item2.score) {
      return -1
   } else if (item2.score > item1.score) {
      return 1
   }

   return 0
})

// código refatorado
theBigFamily.sort((item1, item2) => item2.score - item1.score)

// ============== ENCADEANDO MÉTODOS ==============

/* 

   Podemos encadear métodos de array, prestando atenção sempre no que a 
   expressão retorna para podermos inserir o método adequado.

   Imagina que queremos obter desse array de objetos apenas os livros que 
   estão com o preço a partir de 20 reais e a partir dessa informação gerar 
   para todos esses livros uma string informando o nome e o preço do livro em 
   promoção

*/

const books = [
   { name: 'Código Limpo', price: 30 },
   { name: 'O milagre da manhã', price: 5 },
   { name: 'Alice no País das Maravilhas', price: 10 },
   { name: 'Quem Pensa Enriquece', price: 50 },
   { name: 'O livro da ciência', price: 40 }
]

const booksOnSale = books
   .filter(({ price }) => price > 20)
   .map(({ name, price }) => `O preço do livro "${name}" caiu para ${price} reais.`)

// debugger
