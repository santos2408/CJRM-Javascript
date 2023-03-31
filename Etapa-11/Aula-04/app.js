/*

  // EXEMPLO SIMPLES DE PROMISES

  Ao realizar diversos requests, notamos que o código começa a ficar ilegível, 
  pois ele começa a criar uma pirâmide de requests chamada de callback hell. 
  Para evitarmos esse tipo de código podemos utilizar uma nova funcionalidade do
  JS chamada de Promises.

  Promise é um objeto que representa o sucesso ou a falha de uma operação 
  assíncrona. Na maioria das vezes consumiremos uma promise já criada por alguém 
  ou por bibliotecas de terceiros.

  Uma promise sempre terá dois resultados possíveis:
    - resolve: os dados foram obtidos.
    - reject: promise rejeitada.

  Dentro da promise iremos passar uma função de callback que recebe dois parâmetros: 
    - resolve e reject
  
  Esses parâmetros são funções embutidas na API de promises que recebemos como 
  parâmetros nessa função de callback. Esses parâmetros podem ter qualquer nome 
  mas 'resolve' e 'reject' são convenções usadas globalmente.

  Dentro dessa função geralmente é onde buscamos os dados e realizamos a 
  requisição e quando obtemos os dados com sucesso nós invocamos a função 
  'resolve' e passamos os dados obtidos como argumento.

  Caso a operação assíncrona falhe, a função 'reject' será invocada e retornará 
  o erro como argumento.

  A promise incapsula o valor retornado dentro da propriedade 'fulfilled' dela e 
  para consumirmos esse valor precisamos utilizar o método THEN. Ele é o responsável 
  por receber a resposta de 'sucesso' da promise. Ou seja, assim que invocarmos 
  o método then, passaremos uma função que irá obter e retornar o valor de 'sucesso'. 
  O then automaticamente irá obter o valor da função 'resolve'.

  Como a promisse encapsula a resposta e o then obtém essa resposta, nós dizemos 
  que o then 'desempacota' a promise para pegar a resposta retornada por ela.

  Caso ocorra um erro na requisiçao, podemos encadear o método CATCH no THEN, 
  também passando uma função como argumento e através dele iremos tratar os dados 
  caso a resposta da requisição não for uma resposta de sucesso. O catch só será 
  executado em duas situações: 
    - quando a função reject é invocada dentro da criação da promise
    - quando algum método then lança um erro

  Lembre-se que o then recebe dois argumentos: error, success. Portanto o método 
  catch é uma abreviação do THEN que trata apenas do erro do then, ou seja, 
  separando as obrigações de cada um para ficar mais legível. Ex:

  .then((error, success) => {
    if (error) {
      console.log('error)
      return
    }

    console.log(success)
  })

  Quando invocamos uma resolve ou reject, o código abaixo dela não é lido, pois 
  elas tem um return implícito, então para certas situações não precisamos inserir 
  um return após ela.

*/

// criando uma promise
const getData = () => {
  return new Promise((resolve, reject) => {
    resolve('Dados obtidos aqui')
    reject('Erro obtido aqui')
  }) // criando uma nova promise
}

getData() // retornou uma promise com a resposta dentro
  .then(value => console.log(value)) // desempacota a promise e pega a resposta
  .catch(error => console.log(error)) // desempacota a promise e pega a resposta de erro caso exista

// ==========================================================

// fazendo requests usando promises

const getPokemon = url => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4
    
    if (isRequestOk) { // checking status
      const data = JSON.parse(request.responseText) // convertendo para JSON
      resolve(data.name)
      // não precasa de return pois a resolve já contem um implícito
    }
  
    if (isRequestNotOk) {
      reject('Não foi possível obter os dados da API')
      // não precasa de return pois a resolve já contem um implícito
    }
  })
  
  request.open('GET', url)
  request.send()
})

// getPokemon('https://pokeapi.co/api/v2/pokemon/1')
  // .then(pokemon => console.log(pokemon))
  // .catch(error => console.log(error))

// executando e encadeando promises
getPokemon('https://pokeapi.co/api/v2/pokemon/1') // promise / bulbasaur
  .then(bulbasaur => {
    console.log(bulbasaur)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/4') // promise charmander
  })
  .then(charmander => {
    console.log(charmander)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/7') // promise squirtle
  })
  .then((console.log)) // retorno implícito = squirtle
  .catch(error => console.log(error))

/* 
  Como desejamos requests sequenciais, repare que em cada then nós estamos no 
  final retornando uma nova requisição, ou seja, o then está exibindo a resposta
  no console e após isso estamos retornando uma nova requisição/promise. E nesse 
  then estamos encadeando outro then que irá obter a resposta da requisição do 
  then anterior e executar o processo novamente. 

  Vale lembrar que o método CATCH será executado se a função reject dentro da 
  função de criação da promise for invocada ou se o código dentro de algum then 
  lançar um erro. Nessas duas ocasiões o CATCH será executado.

  Devido a isso, não há necessidade de inserirmos um catch para cada then que 
  for implementado. Como são requests sequenciais e não paralelos, quando um 
  erro é lançado a inovocação dos requests é parado naquele ponto do erro.

  Obs: Repare que, na última execução do then estamos apenas obtendo os dados da 
  requisição e exibindo no console. Como a função não está retornando nada, 
  podemos apenas referenciar o console como parâmetro desse then que o retorno 
  da requisição será inserido como argumento do console implicitamente.

  A conclusão que temos utilizando promises, then e catch é que o código fica 
  mais organizado, legível, com boas práticas ES6 e não temos mais o fenômeno
  de callback hell que sujava o código e atrapalhava a manutenabilidade dele, como 
  foi apresentado nas aulas anteriores, mas repare que, mesmo utilizando promises, 
  dependendo da complexidade do código ele pode começar a ficar ilegível. Nas 
  próximas aulas veremos como deixar o código ainda mais limpo com novas 
  funcionalidades.

  Note também que o uso de promises evita o uso de funções de callback.
*/

/*
   [ ] - How to use promises
   [ ] - Implementing a promise-based API
   [ ] - Introducing workers
   [ ] - Sequencing animations
*/