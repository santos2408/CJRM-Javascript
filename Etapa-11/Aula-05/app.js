/*
  ================= FETCH API =================

  Nas aulas anteriores aprendemos como fazer um request HTTP usando o objeto 
  XMLHttpRequest, que pode ser útil quando trabalharmos com código legado em 
  algum projeto. Nós aprendemos a fazer requests utilizando o XMLHttpRequest 
  para podermos entender como funciona um request por baixo dos panos, todo o 
  passo a passo para o request retornar uma resposta.

  Mas atualmente existe uma forma mais moderna e rápida de realizar requests 
  http, que é usando a FETCH API, uma interface nativa do Javascript para 
  fazermos requests.

  A FETCH API utiliza Promises por baixo dos panos, facilitando a escrita do 
  código tanto quando ele for bem sucedido ou mal sucedido na resposta.

  * A invocação do FETCH retorna uma promise, que contém dois resultados
  possíveis: resolved ou rejected.

  * Para tratarmos o retorno da promise nós invocamos o método THEN, para caso 
  a resposta tenha sido obtida com sucesso. E o método CATCH para caso a resposta 
  tenha sido rejeitada. 

  * Os métodos then e catch recebem como argumento uma função que será executada 
  quando a promise for resolvida com sucesso ou quando for rejeitada. O parâmetro 
  da função do then recebe a resposta de sucesso e o catch recebe a de erro.

  Note que, a FETCH API só rejeita a promise quando acontece um erro de conexão 
  na rede, se simplesmente errarmos a URL do endpoint, o objeto response ainda 
  será retornado, no entanto será com status 404 e sem conteúdo.

  Quando a resposta de sucesso é retornada, repare que o status é 200 e tudo 
  ocorreu bem, mas não há conteúdo de resposta, semelhante ao que contém na 
  propriedade responseText do XMLHttpRequest.

  Ou seja, para obtermos o conteúdo da resposta, devemos executar o método 
  "json" que irá pegar a resposta que o response está armazenando e parsear essa 
  resposta, retornando um "array de objetos em javascript". Semelhante ao objeto 
  JSON.parse().

  Repare que, o retorno da resposta parseada será também uma "promise", portanto, 
  invés de armazenarmos essa promise, podemos simplemente retorná-la diretamente 
  e assim o método then estará retornando uma promise que será encadeada com outro 
  then. Criando assim um encadeando de promises.

  Resumo:

  Passo 1: Buscamos os dados através da invocação do método FETCH
  Passo 2: Obtemos a resposta e retornamos uma promise com response.json()
  Passo 3: Encadeia um segundo then na promise do primeiro then para fazermos algo com os dados obtidos

*/

fetch('https://anapioficeandfire.com/api/houses')
  .then(response => response.json()) // paseando response da promise / retorna promise do JSON
  .then(houses => console.log(houses)) // obtem resposta da promise anterior
  .catch(error => console.log(error))

/*
  ================= ASYNC / AWAIT =================

  Async/Await são sintax sugar, abstrações de promises que usam promises por 
  baixo dos panos que nos permitem escrever código ainda mais legível que é lido 
  como se fosse um código síncrono.

  Repare que no código anterior, estamos executando a FETCH API, encadeando 
  várias promises que tratam do passo a passo para podermos manipular os dados 
  retornados.

  Esse código é melhor do que funções de callback com objetos XMLHttpRequest, 
  só que, quando o número de promises passa a aumentar, o código começa a ficar 
  ilegível e imanutenível. Para isso surgiu as palavras chave 'async/await' para 
  melhorar a legibilidade e manutenabilidade do código, fora as boas práticas.

  Quando usamos 'async/await' podemos setar o código assíncrono (async) em uma 
  função e usar dentro dessa função a palavra (await) para lidarmos com promises 
  de uma forma mais legível, evitando assim configurar explicitamente o 
  encadeamento de promsises.

  * Toda função assíncrona retorna uma Promise, independente do conteúdo que está 
    dentro dela.

  * Sabemos que o FETCH retorna uma promise e para obter os dados retornado 
    nós encadeávamos o método THEN para tratar os dados. Agora não precisaremos 
    disso, nós vamos inserir o 'await' antes da chamada do FETCH.

  * Esse await irá 'aguardar' a resposta da requisição, enquando essa resposta 
    não chegar, o await não deixa o código abaixo dele ser executado. Ou seja, 
    ele vai se comparar a um código síncrono.

  * Caso ocorra tudo bem com a requisição, o fetch irá retornar uma promise 
    e longo em seguida o await irá pegar essa promise e retornar o valor resolvido 
    dela (desempacotar) que é o objeto Response. Após isso as linhas abaixo dele 
    serão executadas. Ou seja, além de impedir a execução do restante do código 
    antes de obter a resposta da requisição, o await também irá desempacotar a 
    Promise para obter apenas a resposta dela.

  Para obtermos os dados da resposta do request, precisaremos encadear no objeto 
  response o método json() que irá obter esse objeto response, irá parsear para 
  um array de objetos javascript (JSON) e retorna-rá uma promise que contém essa 
  resposta parseada.

  Veja abaixo:
*/

const getUsers = async () => { // tornando a função assíncrona / também aceita function declaration / retorna uma promise
  const response = await fetch('https://anapioficeandfire.com/api/houses') // fetch retorna objeto promise / await pega a resposta
  const users = await response.json() // retorna promise e await desempacota pegando apenas a reposta json
  return users // retorna promise com resposta json
}

const logUsers = async () => {
  const users = await getUsers() // desempacota promise e pega json
  console.log(users)
}

logUsers()

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises