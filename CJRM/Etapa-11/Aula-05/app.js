/*
  ================= FETCH API =================

  Nas aulas anteriores aprendemos como fazer um request HTTP usando o objeto 
  XMLHttpRequest, que pode ser útil quando trabalharmos com código legado em 
  algum projeto. Nós aprendemos a fazer requests utilizando o XMLHttpRequest 
  para podermos entender como funciona um request por baixo dos panos e todo 
  o passo a passo para o request retornar uma resposta.

  Mas atualmente existe uma forma mais moderna e rápida de realizar requests 
  http, que é usando a FETCH API, uma interface nativa do Javascript para 
  fazermos requisições.

  A FETCH API utiliza Promises por baixo dos panos, facilitando a escrita do 
  código tanto quando ele for bem sucedido ou mal sucedido na resposta.

  * A invocação da FETCH retorna uma promise, que contém dois resultados
  possíveis: resolved ou rejected.

  * Para tratarmos o retorno da promise nós invocamos o método THEN, para caso 
  a resposta tenha sido obtida com sucesso. E o método CATCH para caso a resposta 
  tenha sido rejeitada.

  * Os métodos then e catch recebem como argumento uma função que será executada 
  quando a promise for resolvida com sucesso ou quando for rejeitada, com essa 
  função podemos tratar a resposta da requisição como quisermos. O parâmetro 
  da função do then recebe a resposta de sucesso e o catch recebe a de erro.

  Note que, a FETCH API só rejeita a promise quando acontece um erro de conexão 
  na rede, se simplesmente errarmos a URL do endpoint, o objeto response ainda 
  será retornado, no entanto será com status 404 e sem conteúdo de respota.

  Quando a resposta de sucesso é retornada, repare que o status no objeto é 200 
  e tudo ocorreu bem, mas não há conteúdo de resposta semelhante ao que contém 
  na propriedade responseText do XMLHttpRequest.

  Ou seja, para obtermos o conteúdo da resposta, devemos executar o método 'json' 
  que existe dentro do objeto Response, que irá pegar a resposta que o response 
  está armazenando e parsear essa resposta, retornando um "array de objetos em 
  javascript". Esse método é semelhante ao que acontece com o objeto JSON.parse(),
  usado em requests com XMLHttpRequest.

  Repare que, o retorno da resposta parseada será também uma "promise", portanto, 
  invés de armazenarmos essa promise, podemos simplesmente retorná-la diretamente 
  e assim o método then estará retornando uma promise que será encadeada com outro 
  then. Criando assim um encadeando de promises. Na promisse seguinte é que teremos 
  de fato a resposta da requisição onde poderemos manipulá-la.

  Resumo:

  Passo 1: Buscamos os dados através da invocação do método FETCH
  Passo 2: Obtemos a resposta e retornamos uma promise com 'response.json()'
  Passo 3: Encadeia um segundo then na promise do primeiro then para fazermos algo com os dados obtidos

*/

fetch("https://anapioficeandfire.com/api/houses")
  .then((response) => response.json()) // parseando response da promise / retorna promise do JSON
  .then((houses) => console.log(houses)) // desempacota e obtem resposta da promise anterior
  .catch((error) => console.log(error));

/*
  ================= ASYNC / AWAIT =================

  Async/Await são sintax sugar, abstrações de promises que usam promises por 
  baixo dos panos que nos permitem escrever código ainda mais legível que é lido 
  como se fosse um código síncrono.

  Repare que no código anterior estamos executando a FETCH API, encadeando 
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

  * Sabemos que o FETCH retorna uma promise e para obter os dados retornados
    nós encadeávamos o método THEN para tratar os dados. Agora não precisaremos 
    disso, nós vamos inserir o 'await' antes da chamada do FETCH.

  * Esse await irá 'aguardar' a resposta da requisição, enquanto essa resposta 
    não chegar, o await não deixa o código abaixo dele ser executado. Ou seja, 
    ele vai se comparar a um código síncrono. Essa pausa acontece apenas dentro 
    do bloco da função assíncrona, ou seja, o await não trava toda a aplicação 
    por causa do request, por isso estamos usando 'async' na função.

  * Caso ocorra tudo bem com a requisição, o fetch irá retornar uma promise 
    e logo em seguida o await irá pegar essa promise e retornar o valor resolvido 
    dela (desempacotar), que é o objeto Response. Após isso as linhas abaixo dele 
    serão executadas. Ou seja, além de impedir a execução do restante do código 
    do bloco da função antes de obter a resposta da requisição, o await também irá 
    desempacotar a Promise para obter apenas a resposta/valor resolvido dela.

  Para obtermos os dados da resposta do request, precisaremos encadear no objeto 
  response o método json() que irá obter esse objeto response, irá parsear para 
  um array de objetos javascript (JSON) e retornará também uma promise que contém 
  essa resposta parseada, e para obtermos o valor resolvido dessa promise, iremos 
  também inserir um 'await'.

  Veja abaixo:
*/

const getUsers = async () => {
  // tornando a função assíncrona / também aceita function declaration / retorna uma promise
  const response = await fetch("https://anapioficeandfire.com/api/houses"); // fetch retorna objeto promise / await pega a resposta e desempacota
  const users = await response.json(); // json() retorna promise e await desempacota pegando apenas a reposta json
  return users; // retorna apenas o objeto json, mas ainda dentro de uma promise
};

const logUsers = async () => {
  // retorna promise porque é async
  const users = await getUsers(); // desempacota promise e pega resposta json
  console.log(users);
};

logUsers();

/*
  ================= IMPLEMENTING A PROMISE-BASED API =================

  Já vimos como usar API's baseadas em promises, por exemplo, a FETCH API. Agora 
  veremos como implementar nossas próprias API's baseadas em promessas, uma 
  prática pouco comum mas que vale a pena conhecer.
  
  Implementares uma API de alarme baseada em promises, que receberá como argumento 
  o nome da pessoa a ser acordada e o delay em milisegundos para aguardar antes 
  do alarme disparar. Usaremos a API setTimeout() para implementar o alarme.

  A vantagem de usarmos uma função baseada em Promise para alguma operação 
  assíncrona é termos o controle do fluxo, tratar o erro corretamente e poder 
  definir quando a operação deu certo ou errado, além de ter um controle maior 
  sobre cada etapa da operação.

  Vale lembrar que, se um erro é lançado dentro da callback da Promise, a função 
  "rejected" é automaticamente chamada, não sendo necessário invocá-la diretamente.

  O Que Define uma API em JavaScript:

  Em termos técnicos, qualquer função em JavaScript pode ser considerada uma API 
  se ela fornece uma interface para realizar uma operação ou tarefa específica. 
  
  Interface Programática: Qualquer função que expõe uma operação que pode ser 
  usada por outras partes de um programa é uma interface programática, ou API. 
  Essa operação pode ser simples ou complexa, mas a função oferece uma maneira 
  de interagir com ela.

  Reutilização e Abstração: Funções que encapsulam lógica para serem reutilizadas 
  em diferentes partes de um programa ou em diferentes projetos são consideradas 
  APIs porque oferecem uma abstração sobre um conjunto de operações.

  Conceito de API: No nível mais básico, uma API é qualquer coisa que fornece 
  uma interface para interação. Em JavaScript, isso pode ser uma única função, 
  um conjunto de funções, uma classe, ou um módulo.

  API abaixo é baseada em Promise, por isso chamamos de "Promise-based API", no 
  entanto, qualquer função pode ser uma API, já que ela se enquada na definição 
  de API, mesmo que simples.

  No entanto, vale lembrar que esse tipo de API javascript é simples e difere das 
  API's mais complexas que lidam com ENDPOINTS, REST, etc.

*/

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
      // chama 'rejected' automaticamente
    }

    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

/*
  [X] - Implementing a promise-based API
  [ ] - Promise() constructor
  [ ] - API

  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
*/
