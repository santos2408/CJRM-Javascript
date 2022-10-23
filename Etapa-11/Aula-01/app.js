/* =========== JAVASCRIPT ASSÍNCRONO =========== */

/*
   O Javascript é uma linguagem síncrona ou seja, ele executa uma instrução 
   por vez de cima para baixo, top-down, uma depois da outra. A linha seguinte 
   só é executada após a linha anterior terminar de ser executada, isso porque 
   na promogração síncrona, a linha seguinte dapende da finalização da linha 
   anterior.
   
   Isso caracteriza o javascript como uma linguagem de single-thread, seguindo 
   sempre uma sequência de instruções, uma de cada vez, de forma síncrona.

   Uma operação assíncrona é um código que inicia um processo agora e finaliza 
   esse processo posteriormente.

   Em alguns momentos de uma aplicação podemos ter uma requisição a um banco de 
   dados, essa requisição pode levar um tempo para obter uma resposta. Programando 
   de forma síncrona o javascript só irá continuar a execução do código quando a 
   requisão feita obtiver uma resposta, e dependendo da quantidade de requisições 
   em uma aplicação, isso pode gerar problemas de performance. Esse código da 
   requisição que fica travando a aplicação é chamado de código blocante, ou 
   blocking code.
   
   Utilizando a requisição no servidor de forma assíncrona, o javascript irá 
   executar essa requisição e passaremos uma função de callback nesse código. 
   O javascript continuará executando o restante do código e quando a resposta 
   for obtida lá na frente, o javascript irá pegar a resposta e executar a 
   função de callback. Isso permite que a aplicação não pare durante a 
   requisição.

   No momento que a requisição é feita, o browser lida com a request fora da 
   thread atual, em outra parte do browser e executa a função de callback quando 
   os dados forem obtidos. Enquanto a requisição é feita em outro local a thread 
   principal continua executando os códigos contidos nela.
*/

/* =========== CÓDIGO ASSÍNCRONO NA PRÁTICA =========== */

// CÓDIGO SINGLE THREAD
console.log(1)
console.log(2)

// CÓDIGO ASSÍNCRONO
setInterval(() => {
   console.log('callback executada')
}, 2000)

// CÓDIGO SINGLE THREAD
console.log(3)
console.log(4)

// execução da callback...

/* =========== O QUE SÃO REQUESTS HTTP =========== */

/*
   Em alguns momentos da nossa aplicação, pode ser que desejemos requisitar
   dados de um outro servidor ou API.

   Para nos conectarmos a uma API ou banco de dados, precisamos realizar uma 
   requisição HTTP, ou seja, é feito um pedido/solicitação de informações que 
   estão nessa API.

   Quando essa requisição é realizada para uma API, o request será feito 
   para um endpoint disponibilizado pela API para podermos nos conectarmos com ela.

   A resposta dessa requisição será geralmente em formato JSON, que é um padrão 
   usado para troca e armazenamento de informações entre sistemas, que é suportado 
   pela maioria das linguagens de programação atuais.

   API: Application Programming Interface, é uma ferramenta para que um sistema 
   se comunique com outro sistema.

   HTTP: Hypertext Transference Protocol, protocolo de transferência de hipertexto. 
   Esse é o protocolo principal utilizado por computadores na internet.

   Endpoint: URL que a API ou servidor disponibiliza para usarmos e obtermos 
   informações que a API ou servidor armazena.

   JSON: JavaScript Object Notation, notação de objetos javascript, é um formato 
   que se parece com um objeto em javascript mas na verdade é uma string e é 
   retornado como resposta a requisição da API através de um endpoint.
*/

// realizando um request para um endpoint na API de Ice and Fire
// solicitando especificamente informações de um personagem
fetch('https://anapioficeandfire.com/api/characters/583')
  .then(response => response.json())
  .then(json => console.log(json))

/*

   CONTEÚDO COMPLEMENTAR PARA ADICIONAR NA AULA:
   https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous

   [X] - Introducing asynchronous JavaScript
   [ ] - How to use promises
   [ ] - Implementing a promise-based API
   [ ] - Introducing workers
   [ ] - Sequencing animations

*/