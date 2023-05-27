/*
  // ======= REQUESTS PARALELOS E SEQUENCIAIS =======

  Quando realizamos uma requisição com await, esses requests serão sequenciais, 
  ou seja, o código abaixo só será executado após o anterior ser finalizado.

  Dependendo do código, alguns requests talvez não precisem ser sequenciais, 
  por exemplo o do código abaixo, já que um request não está dependendo de 
  informações do outro. Nós estamos pegando pokemons diferentes em cada requisição.

  Então podemos remover o await e deixar com que eles sejam requests paralelos. 
  Fazendo com que eles sejam executados quase que instantaneamente, de forma 
  independente um do outro.

  Agora, para podermos ainda obter o valor das promises, devemos utilizar o 
  método do objeto construtor Promise, chamado all. 
  
  O método Promise.all() recebe como argumento um array de promises e quando 
  todas essas promises recebidas forem resolvidas ele retornará uma única promise 
  que terá como resultado um array com as respostas de cada promise resolvida, 
  e usando o await podemos desempacotar essa resposta e obter esse array com as 
  respostas de cada promise.
  
  Se uma das promises que o Promise.all recebeu for rejeitada, o array das respostas 
  das promises será retornado normalmente mas aquela promise que deu erro será 
  retornada com uma mensagem de erro informando o que causou a rejeição. Ex:

  [ promise1, promise2, promise3 ]
  [ promise1, promise2 com erro, promise3]
*/

const getPokemon = async () => {
  // requests paralelos
  const bulbasaur = await fetch('https://pokeapi.co/api/v2/pokemon/1')
  const charmander = fetch('https://pokeapi.co/api/v2/pokemon/4')
  const squirtle = fetch('https://pokeapi.co/api/v2/pokemon/7')

  const pokemons = await Promise.all([bulbasaur, charmander, squirtle])
  pokemons.forEach(async pokemon => console.log(await pokemon.json()))
}

getPokemon()

/*
  // ======= TRATANDO ERROS COM TRY / CATCH =======

  Quando um erro é lançado em uma aplicação javascript, o código abaixo desta 
  linha que disparou o erro não é executado, e isso pode gerar um problema, pois 
  quando o erro for lançado, a aplicação irá parar de executar.

  Para evitar isso podemos usar um try...catch, que é uma cláusula que irá tentar 
  executar um código e se esse código que for tentado executar lançar um erro, nós 
  poderemos executar um outro código para que o erro lançado não trave a aplicação.

  O cláusa try...catch é composta de um bloco 'try', um bloco 'catch' e um 
  terceiro bloco opcional chamado 'finally'. O código dentro do 'try' é executado 
  primeiro, e se ele lançar alguma exceção (erro), o bloco do 'catch' será 
  executado, caso nenhum erro ocorra o bloco do 'catch' será ignorado.

  O bloco do 'finally' sempre será executado antes do controle de fluxo do 
  código sair da estrutura de execução do try...catch. Independente se foi 
  lançado um erro ou não.

  Em javascript todo objeto de erro tem as propriedades name e message que 
  armazenam o nome e mensagem do erro.

  Nós devemos usar o try...catch quando desejarmos fazer alguma coisa em relação ao 
  objeto de erro que o catch recebe. Essa cláusula serve para lidarmos com os erros
  que o código pode lançar. Se esse não for o caso podemos normalmente utilizar o 
  if.

  Try...catch exige mais poder de processamento do que condicionais como o if, 
  portanto use-o em casos que realmente necessite dessa cláusula.

*/

try {
  console.log(oi) // lançando erro porque variável 'oi' não está definida
} catch (error) { // captura o objeto de erro
  if (error.name === 'ReferenceError' && error.message === 'oi is not defined') {
    const oi = 'const oi criada'
    console.log(oi)
  }
}

// ======= TRY / CATCH EM REQUESTS E ERROS PERSONALIZADOS =======

const getUsers = async () => {
  try {
    const response = await fetch('./json/todos.json')

    if (!response.ok) { // se request der errado, lance um erro
      throw new Error('Não foi possível obter os dados')
    }

    return response.json()
  } catch (error) {
    console.log(error.message)
  }
}

const logUsers = async () => {
  const users = await getUsers()
  console.log(users)
}

/*
  Repaque que o código acima, mesmo que a requisição dê errado, o código irá 
  lançar uma mensagem de erro mas o restante do código da aplicação continuará 
  funcionando. O erro não impedirá o funcionamento da aplicação, diferente do 
  caso não estarmos usando try...catch, em que se ocorrer um erro, todo a 
  aplicação irá parar de funcionar e o código quebrará.
*/

logUsers()

/*
  estudar sobre:

  Promises.allSettled()
  Promises.all()

*/