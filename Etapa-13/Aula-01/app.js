// ABSTRAÇAO: Expor o essencial e ocultar o menos importante.

/*
   ============= LOCAL STORE =============
   
   Nas etapas anteriores nós construímos 3 aplicações: Quiz Interativo, To-do 
   List e Weather Application. O que essas aplicações tem em comum é que, os 
   dados que são inseridos nelas não ficam salvos após recarrergamos a página 
   da aplicação, ou seja, as informação desaparecem. Isso porque não estamos 
   salvando as informação em nenhum lugar, ou seja, persistindo os dados.
   
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
   ferramentas que o browser fornece, sendo uma delas o Web Storage API. Essa API 
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
   também a cache API, para armazenar dados para que a aplicação funciona offline.

   O local storage NÃO substitui um banco de dados, podemos usa-los em conjunto, 
   ele pode ser usado para fazer um funcionamento rápido de uma aplicação ou 
   também o seguinte:

      - Podemos fazer uma primeira requisição de dados para um banco de dados e 
      salvar os dados na primeira vez ou os mais importantes e também salvar os 
      dados no local storage, enquanto o usuário utiliza a aplicação nós usamos 
      o local storage, caso o usuário faça uma atualização nos dados, aí sim 
      podemos fazer uma nova requisição para o banco de dados para salvar esses 
      novos dados. Isso evita de consumirmos banda do usuário em todo request.

   Vale lembrar que salvar dados dados no browser não é a opção mais segura.

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
   propriedade 'proto' que possui alguns métodos e propriedades que podemos usar 
   para interagir com o objeto 'storage'.

   Os dados que entram são armazenados na 'storage' e são considerados itens, ou 
   seja, é um par de chave e valor, semelhante a um objeto javascript. Cada chave 
   e valor deve ser uma string, semelhante ao que fazemos com JSON. O nome disso 
   é serialização, que é quando transformamos um valor em algum formato, 
   transferimos ele para outro lugar e nesse lugar podemos 'destransformar' 
   esse valor para o seu valor original.

   Para armazenarmos um item na local storage, utilizamos os métodos da propriedade 
   prototype.

   setItem: insere/altera um item na local storage, recebe dois argumentos 
   com chave e valor.

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

   Podemos remover um item específico ou remover todos de uma vez.

   removeItem: remove item específico
   clear: remove todos os itens da local storage

*/

localStorage.removeItem('name') // remove item específico
localStorage.clear() // limpa todos os dados

/*
   ============= STRINGNIFICANDO E PARSEANDO DADOS =============

   Os dados que armazenamos na local storage devem sempre ser strings, mesmo se 
   passarmos um number como valor de uma chave, esse number será convertido 
   para string antes de ser armazenado.

   Para armazenarmos um array de objetos na local storage (lembrando que um array 
   também é um objeto) primeiro devemos converter essa array de objetos em uma 
   string, com isso poderemos armazenar esse array convertido dentro de uma 
   storage, em seguida quando obtermos esse 'array' da local storage, ele retornará 
   uma string e precisaremos parsear de volta para um array, essa técnica é 
   conhecida como serialização.

   Para convertermos array em strings podemos utilizar um método de um objeto 
   global JSON que está embutido na linguagem. Esse método se chama stringify()
   e ao convertermos esse array para string, ele irá retornar um JSON.
*/

const myArray = [
   {a: 1, b: 2},
   {c: 3, d: 4},
   {e: 5, f: 6}
]

localStorage.setItem('myArray', JSON.stringify(myArray)) // convertendo para string

const JSONFromLocalStorage = localStorage.getItem('myArray') // obtendo string

console.log(JSON.parse(JSONFromLocalStorage)) // convertendo json para javascript
