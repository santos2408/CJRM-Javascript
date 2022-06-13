/*
  // ======= REQUESTS PARALELOS E SEQUENCIAIS =======

  Quando realizamos uma requisição com await, esses requests serão sequenciais, 
  ou seja, o código abaixo só será executado após o anterior ser finalizado.

  Dependendo do código, alguns requests talvez não precisem ser sequenciais, 
  por exemplo o do código abaixo, já que um request não está dependendo de 
  informações do outro. Nós estamos pegando pokemons diferentes em cada requisição.

  Então podemos remover o await e deixar com que eles sejam requests paralelos. 
  Fazendo com que eles sejam executados quase que instantaneamente.

  Agora, para podermos ainda obter o valor das promises, devemos utilizar o 
  método do objeto construtor Promise, chamado all. Ele recebe como argumento 
  um array de promises e quando todas essas promises recebidas forem resolvidas 
  ele retornará uma única promise que com o await obtemos as respostas da promise 
  resolvida.
  
  Se uma das promises que o promise.all recebeu for rejeitada, a promise que o 
  promise.all retorna será uma promise rejeitada que contém a mensagem e o erro 
  que causou a rejeição.
*/

const getPokemon = async () => {
  const bulbasaur = fetch('https://pokeapi.co/api/v2/pokemon/1')
  const charmander = fetch('https://pokeapi.co/api/v2/pokemon/4')
  const squirtle = fetch('https://pokeapi.co/api/v2/pokemon/7')

  const pokemons = await Promise.all([bulbasaur, charmander, squirtle])
  pokemons.forEach(async pokemon => console.log(await pokemon.json()))
}

getPokemon()

/*
  // ======= TRATANDO ERROS COM TRY / CATCH =======

  Quando um erro é lançado em uma aplicação javascript, o código abaixo deste 
  código que disparou o erro não é executado, e isso pode gerar um poblema, pois 
  quando o código for lançado, a aplicação irá parar de executar.

  Para eviar isso podemos usar um try...catch, que é uma cláusula que irá tentar 
  executar um código, se esse código que for tentado executar lançar um erro, nós 
  poderemos executar um outro código para que o erro lançado não trave a aplicação.

  Em javascript todo objeto de erro tem as propriedades name e message que 
  armazenam o nome e mensagem do erro.

  Nós devemos usar o try...catch quando desejarmos fazer alguma coisa em relação ao 
  objeto de erro que o catch recebe. Essa cláusula serve para lidarmos com o erro 
  que o código pode lançar. Se esse não for o caso podemos normalmente utilizar o 
  if.

  Try...catch exige mais poder de processamento do que condicionais como o if.

*/

try {
  console.log(oi)
} catch (error) {
  if (error.name === 'ReferenceError' && error.message === 'oi is not defined') {
    const oi = 'const oi criada'
    console.log(oi)
  }
}

console.log(oi)

/*
  // ======= TRY / CATCH EM REQUESTS E ERROS PERSONALIZADOS =======

*/

const getUsers = async () => {
  try {
    const response = await fetch('./json/todoss/.json')

    if (!request.ok) {
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

logUsers()