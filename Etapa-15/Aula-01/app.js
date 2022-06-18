/*
=============== ORIENTAÇÃO A OBJETOS ===============

É uma abordagem, um paradigma para a forma de programar no qual os dados são 
encapsulados em objetos e esses objetos são trabalhados no decorrear da aplicação.
O JavaScript é uma linguagem fortemente orientada a objetos sendo baseado em 
prototypes.

Como o JS é uma linguagem multiparadigma, nós podemos programar orientado a objetos, 
imperativo, funcional ou todas as formas combinados. Combinando os paradigmas em 
um código, podemos extrair o melhor de cada estilo.

Para começarmos devemos entender mais sobre os tipos primitivos e referência. 
Repare que mesmo não sendo objetos, os tipos primitivos contém métodos e propriedades 
embutidos neles. Isso porque quando acessamos um tipo primitivo, o JS automaticamente 
insere esse tipo dentro de um objeto equivalente ao tipo de dado.

Sabemos que funções, arrays, objetos literais são todos objetos, mas há outras 
formas de criarmos objetos, que é usando os construtores embutidos da linguagem. 
São objetos ou funções que constroem novos objetos, eles são praticamente os tipos 
de dados que o JavaScript tem.

Existem diversos construtores de objetos no JavaScript, alguns são: 
  - String  - Number  
  - BigInt  - Boolean 
  - Symbol

Para invocarmos o construtor devemos inserir a palavra chave 'new' antes dele 
para que um novo objeto do tipo desejado seja criado. Se não inserirmos o 'new' 
significa que só estamos querendo converter aquele dado para o tipo do objeto 
desejado.

Mesmo sendo uma das formas de criar objetos no dia dia, dê preferência para 
a criação de objetos literais, isso porque o resultado será sempre o mesmo e um 
objeto literal dá menos trabalho.

Se precisarmos converter um valor, aí pode ser necessário usarmos um construtor, 
mas sem utilizar a palavra chave 'new', pois não queremos gerar um novo objeto mas 
apenas retornar o valor convertido.

Construtores são usados por baixo dos panos pelo JS para agirem como 'wrapper 
objects'. Repare que é possível invocarmos métodos e propriedades em tipos primitivos 
mesmo eles não sendo objetos, isso porque quando tratamamos um dado primitivo, o JS
automaticamente 'embrulha' esse dado dentro de um objeto equivalente ao seu tipo, 
trata ele na memória e em seguida remove da memória e converte de novo para seu 
tipo primitivo. E esse objeto que envolve o tipo contém os métodos e propriedades 
embutidos nele.

Quando criamos um novo objeto com um construtor, é criado um 'object wrapper' 
que envolve um tipo. Vale lembrar que 'null' e 'undefined' não contém 'wrapper 
objects'.

*/

// criando objetos com constructors

const string = new String('Roger')
const number = new Number(10)
const array = new Array(1, 2, 3)
const object = new Object()

/*
  =============== INTRODUÇÃO A CLASSES ===============

  Em alguns momentos do nosso código será mais recomendado criarmos objetos 
  através de construtores do que objetos literais. Veja o caso de uso a seguir 
  mostrando que utilizar construtores em casos como esse é a melhor opção.

  Digamos que precisamos criar alguns objetos 'user' com métodos e propriedades, 
  cada objeto user terá os mesmos métodos e propriedades mas com valores diferentes. 
  Utilizando objetos literias teremos que criar um objeto para cada usuário, 
  tornando o código ilegível depois de um tempo.

  Quando precisarmos criar um objeto ou outro objeto específico, podemos criar 
  de forma literal, mas se precisarmos criar diversos objetos com as mesmas 
  características, precisamos utilizar outras maneiras de criar de forma mais 
  eficiente.

*/

// criando objetos literais com os mesmos métodos e propriedades
// quanto mais usuários, mais códigos repetidos, mais ilegível fica o código
const user = {
  name: 'Roger',
  email: 'roger@gmail.com',
  login: () => 'O usuário logou',
  logout: () => 'O usuário deslogou'
}

const user2 = {
  ...user,
  name: 'Alessandra',
  email: 'alessandra@gmail.com',
}

const user3 = {
  ...user,
  name: 'Maria',
  email: 'maria@gmail.com',
}

/*
  Além dos construtores embutidos na linguagem: Array, Number, String, etc. 
  Podemos também criar os nossos próprios construtores de objetos com as 
  características desejadas.

  Existem diversas maneiras de construirmos o nosso próprio objeto, usando 
  factory functions, classes, etc. Antigamente uma das formas era usar prototypes 
  diretamente, mas com a chegada do ES6 podemos utilizar a palavra chave 'class' 
  para construir objetos. O nome 'class' é apenas uma abstração para nos facilitar 
  de entendermos melhor o que está acontecendo, pois por baixo dos panos elas estão 
  usando prototypes para construir os objetos.

  Elas foram adicionados como uma tentativa de deixar mais fácil o entendimento 
  da sintaxe para se trabalhar com prototypes.

  Class é a planta de um objeto, um template que descreve quais serão as propriedades 
  básicas de um objeto quando ele for construído. A class terá o objeto com as 
  características básicas mas com valores diferentes para cada construção.

  Todo construtor embutido na linguagem tem a primeira letra do nome maiúscula, 
  então, por convenção, quando formos criar os nossos objetos, declareremos 
  também com letras maiúsculas. Isso é usado para diferenciarmos propositalmente 
  das funções comuns do JS.

  Class em javascript é um tipo de construtor, e um construtor por sua vez é uma 
  função. Dentro da class iremos declarar um método chamado 'constructor' que é 
  o método que irá de fato setar as propriedades do novo objeto.

  Quando invocamos a 'new User()', o método 'constructor' será invocado dentro da
  classe e esse método irá criar e setar as propriedades do novo ojbeto. A palavra 
  chave 'new' é a responsável por invocar o método constructor dentro da classe.

  O operador 'new' cria um novo objeto vazio, independente se existe um método 
  constructor ou não dentro de uma classe. Ele também faz com que dentro da classe 
  a palavra chave 'this' referencia esse novo objeto que está sendo criado. Todo 
  this dentro da classe corresponde ao novo objeto que está sendo criado.

  Quando objetos são criados através de uma classe, tecnicamente chamamos esses 
  novos objetos de instância da classe, esse termo é usado para se referir a um 
  objeto que foi criado por uma classe.

  Agora podemos criar quantos objetos quisermos com as mesmas propriedades e 
  utilizando apenas uma classe construtora sem ter que criar divernos objetos 
  para 'users' diferentes.
*/

// declarando class para construir objeto User
class User {
  constructor (name, lastName, age) { // criando novo objeto
    this.name = name,
    this.lastName = lastName,
    this.age = age
  }
}

// invocando classe construtora
const user = new User('Roger', 'Santos', 25) // criando instância de User
