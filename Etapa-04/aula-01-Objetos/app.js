// ====== O QUE SÃO OBJETOS ==============================

/*
   Para entender o que são objetos é possível compará-los com objetos do mundo
   real, sendo assim podemos definir que objetos tem algumas características, 
   ou seja, propriedades e também contém algumas ações, ou seja, métodos 
   disponíveis que podem ser executados neles.

   Objetos em Javascript irão possibilitar que criemos estruturas de dados
   que representam certos elementos do código ou das aplicações web.

   É possível criar objetos explicitamente, chamados de objetos individuais ou
   objetos literais. Mas o javascript também possui alguns objetos acoplados 
   nele, por exemplo, objeto Date e objeto Math, além de nos permitir criar 
   nossos próprios objetos com propriedades e métodos únicos.
   
   Por exemplo:

   Objeto Celular:

   propriedades (características):
      - cor
      - tamanho
      - modelo
   
   métodos (ações):
      - fazer ligações
      - tirar fotos
      - tocar música
   
   Objeto User:
      
   propriedades:
      - e-mail
      - nome de usuário
      - idade
   
   métodos:
      - login
      - logout
*/

// ====== CRIANDO UM OBJETO LITERAL ==============================

/*
   Cria-se um objeto literal inserindo chaves como atribuição a uma variável. 
   Dentro do objeto existem propriedades e métodos formadas por um par de 
   propriedade(chave) e valor da propriedade.

   A atribuição de um valor a uma chave é feita através de dois pontos. Caso
   queira adicionar mais propriedades nesse objeto, elas devem ser separadas por
   vírgula. Lembre-se que a última propriedade não precisa ter vírgula no final.

   É possível declarar as propriedades de forma inline, no entanto, atente-se
   para a dificuldade que possa ter em ler o código. Por convenção, declara-se
   as propriedades em novas linhas para manter a legibilidade do código.

   Se quando for utilizar as propriedades do objeto a chave do objeto e a sua 
   propriedade tiver o mesmo nome, é possível utilizar uma feature chamada 
   "shorthand property names" para eliminar essa redundância, podemos apenas 
   deixar o nome da propriedade que automaticamente o JS irá saber que o valor 
   tem o mesmo nome da chave. Veja abaixo:

   Isso só vale para chave e valor com o mesmo nome.

   let cat = {
      name: 'Pintada',
      age: 4
   }

   // antes
   return { name: name, age: age }

   // depois
   return { name, age }

*/

// declaração de objeto literal
let user = {
  name: "Roger",
  age: "25",
  city: "Rio de Janeiro",
  email: "roger.santos36@gmail.com",
  favoriteHouses: ["Stark", "Lannister", "Targaryen"],
}

/*
   Para obtermos ou alterarmos o valor de uma determinada propriedade, podemos 
   acessa-lá utilizando a notação de ponto seguido do nome da propriedade, ou
   também acessá-la através da notação de colchetes colocando a chave entre
   aspas.

   Repare que ao utilizar colchetes, a chave deve ser informada dentro de uma
   string, mas é possível também passar uma variável que contém uma string, nesse
   caso não será necessário colocar entre aspas. Dê preferência para a notação
   de ponto, mas em alguns casos será necessário utilizar colchetes, como ao
   passar variáveis nos colchetes.

   Veja abaixo:
*/

// acessando ou alterando determinada propriedade através da notação de ponto
console.log(user.favoriteHouses)
console.log(user.favoriteHouses = ["Tully", "Tyrell", "Mormont"])

// acessando ou alterando determinada propriedade através da notação de colchetes
console.log(user["age"])
console.log(user["age"] = 28)

// ====== ADICIONANDO MÉTODOS A UM OBJETO ==============================

/*
   Métodos são ações que um objeto pode realizar, em essência métodos são
   funções, mas dentro de objetos são chamados de métodos. 

   Também é composto de uma propriedade composta de um par com chave e valor. Os
   métodos são escritos com function declarations, podendo ser escritas também
   com arrow functions, mas vale uma atenção nesse fato, pois arrow functions
   mudarão o comportamento no uso do this que veremos mais a frente. Functions
   declarations também podem ser encurtadas para melhor legibilidade, utilizando
   shorcut method name.
*/

let user = {
  name: "Roger",
  age: "25",
  city: "Rio de Janeiro",
  email: "roger.santos36@gmail.com",
  favoriteHouses: ["Stark", "Lannister", "Targaryen"],
  login: function () { // declaração normal
    console.log("Usuário logado.")
  },
  logout () { // declaração com shorcut
    console.log("Usuário deslogado.")
  },
}

user.login() // método de user
user.logout() // método de user
name.toUpperCase() // método de String

// estudar 

// ====== MAIS SOBRE OBJETOS ==============================

/*
   Além de utilizar um inicializador de objeto, que é uma sintaxe literal para 
   criar objetos, podemos também utilizar o construtor Object() para criarmos 
   objetos.

   Quase todos os objetos são instâncias de Object, portanto a maioria irá 
   herdar métodos e propriedades de Object.prototype.

   É possível passarmos um objeto como 'callback' de um eventListener em que 
   dentro existirá um método chamado handleEvent() que será o método que 
   disparará quando o eventListener for executado. Com isso, dentro desse 
   objeto passado como argumento podemos utilizar propriedades. Consulte também 
   a aula-03 da etapa-05 para entender melhor.

   ======== Métodos de Object ========

/*
   Object.keys: retorna um array do próprio objeto passado como argumento do 
   método, esse array irá retornar de forma ordenada os nomes das propriedades 
   desse objeto em formato de string. Ex:
*/ 

const person = {
   name: 'Roger',
   age: 25,
   '1996': 1996
}

Object.key(person) // output: ["name", "age", "1996"]

/*
   Object.entries: retorna um array do próprio objeto passado como argumento do 
   método, esse array irá retornar um array de arrays em que cada array 
   corresponde a uma propriedade e valor do objeto. Ex:
*/ 

const person = {
   name: 'Roger',
   age: 25,
   '1996': 1996
}

Object.entries(person) // output: [ ["name", "Roger"], ["age", "25"], ["1996", "1996"] ]