/*
  // ======= REQUESTS PARALELOS E SEQUENCIAIS =======

  Quando realizamos uma requisição com await, esses requests serão sequenciais, 
  ou seja, o código abaixo só será executado após o anterior ser finalizado.

  Dependendo do código, alguns requests talvez não precisem ser sequenciais, 
  por exemplo o código abaixo, já que um request não está dependendo de 
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
  
  Se uma das promises que o Promise.all recebeu for rejeitada, será retornada uma 
  promise rejeitada contendo a promise que foi rejeitada. O uso de Promise.all é 
  recomendado quando você deseja que todas as promessas sejam bem-sucedidas e 
  uma falha deve rejeitar o conjunto completo das promessas.
*/

const getPokemon = async () => {
  // requests paralelos
  const bulbasaur = fetch("https://pokeapi.co/api/v2/pokemon/1");
  const charmander = fetch("https://pokeapi.co/api/v2/pokemon/4");
  const squirtle = fetch("https://pokeapi.co/api/v2/pokemon/7");

  const pokemons = await Promise.all([bulbasaur, charmander, squirtle]);
  pokemons.forEach(async (pokemon) => console.log(await pokemon.json()));
};

getPokemon();

/*
  // ======= Promises.allSetled =======

  Assim como Promise.all, o método allSelted irá pegar um array de promises e 
  retornar uma única promise, diferente de Promise.All, esse método irá aguardar
  até que todas as promises sejam resolvidas ou rejeitas, independente do seu 
  resultado, ela irá retornar todas as respostas.
  
  Portanto, a Promise retornada pode conter promises resolvidas ou rejeitas. As 
  resolvidas terão uma propriedade status e value e as rejeitas terão uma propriedade 
  status e reason com o motivo da rejeição.

  Esse método é recomendado quando você deseja que todas as promises sejam 
  consideradas, independentemente de serem resolvidas ou rejeitadas, e você quer 
  lidar com os resultados de todas elas.

*/

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

  Nós devemos usar o try...catch quando desejamos fazer alguma coisa em relação ao 
  objeto de erro que o catch recebe. Essa cláusula serve para lidarmos com os erros
  que o código pode lançar. Se esse não for o caso podemos normalmente utilizar o 
  if.

  Try...catch exige mais poder de processamento do que condicionais como o if, 
  portanto use-o em casos que realmente necessite dessa cláusula.

*/

try {
  console.log(oi); // lançando erro porque variável 'oi' não está definida
} catch (error) {
  // captura o objeto de erro
  if (error.name === "ReferenceError" && error.message === "oi is not defined") {
    const oi = "const oi criada";
    console.log(oi);
  }
}

// ======= TRY / CATCH EM REQUESTS E ERROS PERSONALIZADOS =======

const getUsers = async () => {
  try {
    const response = await fetch("./json/todos.json");

    if (!response.ok) {
      // se request der errado, lance um erro
      throw new Error("Não foi possível obter os dados");
    }

    return response.json();
  } catch (error) {
    console.log(error.message);
  }
};

const logUsers = async () => {
  const users = await getUsers();
  console.log(users);
};

/*
  Repaque que o código acima, mesmo que a requisição dê errado, o código irá 
  lançar uma mensagem de erro mas o restante do código da aplicação continuará 
  funcionando. O erro não impedirá o funcionamento da aplicação, diferente do 
  caso não estarmos usando try...catch, em que se ocorrer um erro, todo a 
  aplicação irá parar de funcionar e o código quebrará, isso porque execeções 
  travam a aplicação.
*/

logUsers();

/*
  ESTUDAR SOBRE:

  [ ] - Introducing workers
  [ ] - Sequencing animations
  [ ] - Thread

  Why using “setTimeout” is not a good practice, and how to workaround?
  https://developer.mozilla.org/en-US/docs/Glossary/Thread
  https://medium.com/@gildniy/why-using-settimeout-is-not-a-good-practice-and-how-to-work-around-da44f81117f0#:~:text=Instead%20of%20using%20setTimeout%20%2C%20it,easier%20to%20read%20and%20understand.
  https://medium.com/@idineshgarg/let-us-consider-an-example-a58bb1c11f55
  https://www.encora.com/insights/javascript-settimeout-and-promise-under-the-hood
*/
