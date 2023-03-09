// ABSTRAÇAO: Expor o essencial e ocultar o menos importante.

/*
   ============= LOCAL STORAGE =============
   
   Nas etapas anteriores nós construímos 3 aplicações: Quiz Interativo, To-do 
   List e Weather Application. O que essas aplicações tem em comum é que, os 
   dados que são inseridos nelas não ficam salvos após recarregarmos a página 
   da aplicação, ou seja, as informações desaparecem. Isso porque não estamos 
   salvando as informações em nenhum lugar, ou seja, persistindo os dados.
   
   Então sempre que a página é recarregada, ela retorna para o seu estado 
   original. Haverá momentos em que precisaremos persistir dados na aplicação 
   mesmo que o usuário tenha fechado ou atualizado o browser.

   O localStorage resolve esse problema, ele nos permite armazenar dados no 
   browser mesmo que o browser seja fechado ou atualizado posteriormente.

   O browser possui uma API chamada Web Storage API, ela torna possível salvarmos 
   dados no browser do usuário e esse dados são salvos através de pares de chaves 
   e valor, portanto, o local storage é um mecanismo interno da Web Storage API
   que salva dados no browser.

   Existem pelo menos duas formas de salvar dados em uma aplicação: podemos usar 
   banco de dados, obtendo os dados através de requests ou podemos usar as 
   ferramentas que o browser fornece, sendo uma delas a Web Storage API. Essa API 
   é útil para armazenar informações simples como strings, numbers, username, 
   cores, etc.

   Vale lembrar que local storage não é a única forma de salvar dados no browser, 
   existe também o mecanismo 'session storage'.

   Local Storage: persiste os dados no browser mesmo quando o browser é fechado 
   ou atualizado, cerca de 10mb de armazenamento.

   Session Storage: persiste os dados no browser enquanto durar a sessão da página, 
   caso a aba ou janela do browser sejam fechados, os dados são removidos da 
   aplicação e do browser, cerca de 5mb de armazenamento.

   Existem mais formas de salvar dados no browser: cookies, Web Storage API e 
   indexedDB para grande volumes de dados como videos, imagens, áudios, etc. E 
   também a cache API, para armazenar dados para que a aplicação funcione offline.

   O local storage NÃO substitui um banco de dados, podemos usa-los em conjunto, 
   ele pode ser usado para fazer um funcionamento rápido de uma aplicação ou 
   também o seguinte:

      - Podemos fazer uma primeira requisição de dados para um banco de dados e 
      salvar os dados na primeira vez ou os mais importantes e também salvar os 
      dados no local storage, enquanto o usuário utiliza a aplicação nós usamos 
      o local storage, caso o usuário faça uma atualização nos dados, aí sim 
      podemos fazer uma nova requisição para o banco de dados para salvar esses 
      novos dados. Isso evita de consumirmos banda do usuário em todo request.

   Vale lembrar que salvar dados no browser não é a opção mais segura.

   * Cookies, indexedDB, cache API e segurança no front-end são assuntos mais 
   avançados que serão mostrados posterioremente.

*/

/*
   ============= ARMAZENANDO E OBTENDO DADOS =============

   localStorage é uma propriedade do objeto window, seu retorno será um objeto 
   do tipo 'storage'. Esse objeto é uma interface para trabalharmos com o 
   local storage da Web Storage API. 

   Nesse contexto, uma interface é um objeto que proporciona uma ligação entre 
   o código javascript e a Web Storage API.

   Quando vazio, o objeto 'storage' possui apenas uma propriedade 'length' que 
   armazena 0. Apesar de haver apenas uma propriedade oficialmente, existe uma 
   propriedade 'prototype' que possui alguns métodos e propriedades que podemos 
   usar para interagir com o objeto 'storage'.

   Os dados que entram são armazenados na 'storage' e são considerados itens, ou 
   seja, é um par de chave e valor, semelhante a um objeto javascript. Cada chave 
   e valor deve ser uma string, semelhante ao que fazemos com JSON. O nome disso 
   é serialização, que é quando transformamos um valor em algum formato, 
   transferimos ele para outro lugar e nesse lugar podemos 'destransformar' 
   esse valor para o seu valor original.

   Para armazenarmos um item na local storage, utilizamos os métodos da propriedade 
   prototype.

   setItem: insere/altera um item na local storage, recebe dois argumentos 
   com chave e valor, todos entre aspas.

   getItem: obtém os dados do item especificado, recebe um argumento com o nome 
   da chave que se deseja obter o valor.
   
*/

localStorage.setItem('name', 'Roger') // inserindo valor
localStorage.setItem('age', '25') // inserindo valor

let name = localStorage.getItem('name') // obtendo valor
let age = localStorage.getItem('age') // obtendo valor

name = localStorage.setItem('name', 'Santos') // alterando valor
age = localStorage.setItem('age', '26') // alterando valor

/*
   ============= REMOVENDO DADOS =============

   Podemos remover um item específico ou remover todos de uma vez usando os 
   métodos:

   removeItem(): remove item específico passando a sua 'chave'
   clear(): remove todos os itens da local storage

*/

localStorage.removeItem('name') // remove item específico
localStorage.clear() // limpa todos os dados

/*
   ============= STRINGNIFICANDO E PARSEANDO DADOS =============

   Os dados que armazenamos na local storage devem sempre ser strings, mesmo se 
   passarmos um number como valor de uma chave, esse number será convertido 
   para string antes de ser armazenado, já que ele é convertido para string, 
   escreve entre aspas direto mesmo que seja um número, assim mantém a consistência.

   Para armazenarmos um array de objetos na local storage (lembrando que um array 
   também é um objeto) primeiro devemos converter esse array de objetos em uma 
   string, com isso poderemos armazenar esse array convertido dentro de uma 
   storage, em seguida quando obtermos esse 'array' da local storage, ele retornará 
   uma string e precisaremos parsear de volta para um array, essa técnica é 
   conhecida como 'serialização', ou seja, transformar um dado em outro valor e 
   depois 'destranformar' para o seu valor original.

   Para convertermos array em strings podemos utilizar um método de um objeto 
   global JSON que está embutido na linguagem. Esse método se chama stringify()
   e ao convertermos esse array para string, ele irá retornar um JSON. Assim 
   poderemos inserir o array como valor de um local storage, pois ele só aceita 
   valores do tipo string. 
   
   Portanto:

   JSON.stringfy() => converte array/objeto para JSON (string)
   JSON.parse() => converte JSON para array/objeto javascript

   Com esses métodos é possível também realizarmos cópias de objetos quando 
   necessário, mas esse comportamento não é recomendado visto que é uma operação 
   custosa para a aplicação. E também, em objetos que contém métodos, quando 
   usamos a stringnificação ou parseamento, eles ignoram os métodos desses objetos, 
   isso porque funções não são valores JSON válidos.

   Ou seja, além do problema de performance ao criar uma cópia a partir de métodos 
   JSON, se o objeto convertido tiver qualquer valor que não seja 'string', 'number',
   'boolean', 'objeto' ou 'array', ele será ignorado pela conversão.

   Portanto, a melhor forma de criar uma cópia de um objeto usando javascript puro 
   é utilizando o 'spread operator', que veremos nas aulas seguintes.
*/

const myArray = [
   {a: 1, b: 2},
   {c: 3, d: 4},
   {e: 5, f: 6}
]

localStorage.setItem('myArray', JSON.stringify(myArray)) // convertendo para JSON/string

const JSONFromLocalStorage = localStorage.getItem('myArray') // obtendo/retornando string/JSON
const JSONToJavascriptObject = JSON.parse(JSONFromLocalStorage) // convertendo json para objeto javascript

// ============= PROGRAMAÇÃO FUNCIONAL PIPELINE =============

/*
   Um pipe é um encadeamento de elementos de processamento, como por exemplo 
   funções, que são organizadas para que o output de uma função seja o input 
   de uma próxima. Ou seja, o resultado de uma função seja inserido na próxima 
   função e assim por diante.
*/

