/*
   MÉTODO MAP()

   Já vimos algumas formas de iterar sobre arrays, por exemplo, for, while, 
   forEach, find, some. Esses três últimos executam uma função de callback para 
   cada item de um array.

   Conheceremos agora mais 3 métodos de array: Map, Filter e Reduce. Cada método 
   desses contém propósitos diferentes que veremos a seguir.

   MAP(): é utilizado quando desejamos gerar um novo array com a mesma quantidade 
   de itens do array original, só que com cada item transformado. Ele funciona 
   percorrendo cada item do array original executando alguma transformação 
   passada dentro de uma função que será passada por argumento dentro dele. Então 
   ele retornará um novo array com os itens transformados.

   Podemos transformar esses itens em objetos, strings, números etc, lembrando-se
   sempre que o map deve retornar a mesma quantidade de itens do original, mas 
   seus itens de retorno não necessariamente precisam ter o mesmo tipo de dado 
   do array original.

   Para cada execução da função no item do array original, a função retornará o 
   valor e armazenará num novo array, quando toda a iteração terminar é gerado 
   esse novo array com os itens transformados que podemos armazenar numa const.

   Vale lembrar que o método MAP não modifica o array original, na verdade ele 
   retorna um novo array com os itens do array original modificados.

   Como argumento do map nós vamos inserir uma função que irá executar uma ação 
   em cada item do array original. Essa função pode receber 3 parâmetros: ITEM, 
   INDEX e ARRAY.

   Desses 3 parâmetros o único obrigatório é o ITEM, o restante fica a seu 
   critério e necessidade.

   Atenção: Para o map retornar um novo array, a função passada como argumento 
   deve retornar um valor. Diferente do forEach que não retorna um valor.

   Quando utilizamos um MAP num array de tipos primitivos, o map gera 
   automaticamente um novo array. Mas quando utilizamos o MAP em array de objetos, 
   devemos lembrar que objetos são tipo referência, ou seja, o map não irá gerar 
   um novo array, mas sim irá criar uma cópia do array original. Para evitar isso, 
   no return do map devemos retornar um novo objeto com as mesmas propriedades 
   do array original, aí sim será criada uma cópia independente.
*/

const numbers = [1, 2, 3]

const doubleNumbers = numbers.map(item => item * 2)
// toda a expressão do map retornou um novo array e foi armazenado na const

const prices = [20, 10, 30, 25, 15, 40, 80, 5]

const salePrices = prices.map(price => price / 2)

// ======================================================

/*
   Exemplo: 
   
   Temos um array de objetos que contém o nome do produto e seu preço. 
   Queremos que, se o valor de determinado produto for maior do que 30, ele deve 
   receber um desconto de 50%, caso seja menor que 30, permanece o mesmo valor.
*/

const products = [
   {name: 'Mouse Sem Fio', price: 30},
   {name: 'Pen Drive', price: 25},
   {name: 'Cartucho de Tinta', price: 50},
   {name: 'Suporte Ergonômico para Notebook', price: 23},
   {name: 'Repetidor de Sinal Wi-Fi', price: 44}
]

const saleProducts = products.map(product => {
   if (product.price > 30) {
      return { name: product.name, price: product.price / 2 }
      // retornando um novo objeto, pois não queremos criar uma cópia do array original
      // isso porque objetos são tipo referência, se retornarmos o item diretamente
      // os dois array's estarão "sincronizados", não queremos isso
   }

   return product
})

/*
   Pode surgir a seguinte dúvida: Porque criamos e retornamos um novo objeto 
   sendo que podemos simplesmente modificar o valor da propriedade do objeto 
   recebido por parâmetro e retorná-lo. Invés de criar um novo objeto com nome 
   e preço e alterar o preço desse objeto?
   
   Se fizermos esse tipo de atribuição, estaremos modificando diretamente esse 
   objeto do array products, portanto o objeto do array original será modificado 
   e não é isso que queremos. Nós queremos usar o map para criar um novo array 
   com novos itens modificados.
*/

/*
   MÉTODO FILTER()

   Similar ao MAP, também recebe uma função como argumento e executa essa função 
   em cada item do array original. Usaremos esse método quando baseados numa 
   condição precisamos obter um novo array com apenas alguns itens do array 
   original.

   Pode receber também 3 valores como argumento e apenas o primeiro valor que é 
   o item atual sendo iterado que é obrigatório.

   A função passada como argumento deve sempre retornar um valor booleano. Caso 
   esse valor seja true, ele será inserido no novo array, se for false será 
   ignorado pelo método. Ou seja, o filter irá criar e inserir o item no array 
   apenas se esse item sendo iterado retornar true.

   Não modifica o array original.

   Digamos que temos um array de números e queremos obter apenas os números 
   maiores que 37. Veja:
*/

const randomNumbers = [36, 99, 37, 63]

const numbersGreaterThan37 = randomNumbers.filter(number => number > 37)

// =====================================================

// Filtrando apenas os usuários que são premium

const users = [
   { name: 'Ada Lovelace', premium: true },
   { name: 'Grace Hopper', premium: false },
   { name: 'Alan Turing', premium: true },
   { name: 'Linus Torvalds', premium: false },
   { name: 'Margaret Hamilton', premium: true }
]

const premiumUsers = users.filter(user => user.premium)

/*
   MÉTODO REDUCE()

   Também recebe uma função por argumento e executa essa função para cada item 
   do array. Nós usamos o reduce quando, baseado no array original, precisaremos 
   reduzir o array a algum outro tipo de dado como uma string, number, literal 
   object ou um novo array.

   Ao contrário dos métodos map e filter, o reduce tem poder e versatilidade 
   para gerar um output que não necessariamente precisa ser um array.

   A função recebe como parâmetro um 'accumulator' e 'item'. Também 
   podendo receber o 'index' e 'array' de forma opcional.

   No exemplo abaixo a função é executada para cada item do array e 
   apenas na primeira vez que a função for executada, o parâmetro 'accumulator' 
   receberá o segundo argumento do reduce que é o '0'. O parâmetro 'item' recebe 
   o primeiro item do array e a função retornará o resultado da expressão.

   O resultado da expressão será atribuído implicitamente no parâmetro 
   'accumulator', depois disso a função será executada novamente e o parâmetro 
   'item' irá armazenar o segundo item do array, que na expressão irá somar com 
   o 'accumulator' que armazena o valor do resultado anterior e assim por diante.

   * O segundo argumento do método reduce que é o '0', é opcional, ou seja, 
   ele serve para ser o valor do accumulator na primeira vez que a função é 
   executada, a partir disso ele passa a ser ignorado. Caso ele seja omitido, 
   na primeira execução o valor do 'accumulator' receberá o valor do primeiro item 
   do array e o parâmetro 'item' vai receber o segundo item do array, podendo 
   causar um resultado indesejado. Por isso, por boas práticas especificamos ele 
   para termos uma representação explícita do tipo de dado que o reduce irá 
   retornar.

   O segundo argumento da função indica qual dado você quer que seja gerado 
   no final da execução do método.
*/

const allNumbers = [1, 2, 3, 4, 5]

const sumResult = allNumbers.reduce((accumulator, item) => accumulator + item, 0) // 15

// ==================================

const phaseScores = [
   { name: 'Vinicius Costa', score: 337 },
   { name: 'Roger Melo', score: 43 },
   { name: 'Alfredo Braga', score: 234 },
   { name: 'Pedro H. Silva', score: 261 },
   { name: 'Ana Paula Rocha', score: 491 },
   { name: 'Vinicius Costa', score: 167 },
   { name: 'Roger Melo', score: 137 },
   { name: 'Alfredo Braga', score: 135 },
   { name: 'Ana Paula Rocha', score: 359 },
   { name: 'Pedro H. Silva', score: 133 }
]

const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
   if (phaseScore.name === 'Roger Melo') {
      accumulator += phaseScore.score
   }

   return accumulator
}, 0)

// rogerScore === 180

/*
   Dica:

   Ao lidarmos com arrays numa aplicação, antes podemos pensar nos três princípios 
   que podemos usar para trabalhar com arrays, isso ajudará a facilitar o caminho 
   que seguiremos para solucionar o problema, são eles:

   1 - A partir desse array, eu preciso gerar um novo array com a mesma quantidade 
   de itens do original ?

   2 - A partir desse array, eu preciso gerar um novo array que terá menos itens
   que o original ?

   3 - A partir desse array, eu preciso gerar um outro valor que não necessariamente 
   seja array ?

   Lembrando que nem sempre o que queremos fazer num array irá atender a um dos 
   princípios citados acima, pois em alguns casos não iremos querer retornar um 
   valor e sim realizar apenas um efeito colateral no código. Efeito colateral é 
   qualquer mudança de estado que pode ser percebida do lado de fora de uma função 
   e que não é um valor retornado pela função.

*/

/*
   Os métodos 'map', 'filter' e 'reduce' são consideradas 'Higher-Order Functions', 
   ou seja, 'funções de ordem superior'. São funções que recebem outras funções 
   como argumento ou retornam uma função como valor. Elas nos permitem escrever 
   códigos mais abstratos, reutilizáveis e com propósitos gerais que podem ser 
   aplicados em diferentes casos de uso.

*/

/*

   reduceRight()

*/