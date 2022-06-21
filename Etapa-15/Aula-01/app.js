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
objects' (embrulhar objetos). Repare que é possível invocarmos métodos e propriedades 
em tipos primitivos mesmo eles não sendo objetos, isso porque quando tratamos 
um dado primitivo, o JS automaticamente 'embrulha' esse dado dentro de um objeto 
equivalente ao seu tipo, trata ele na memória e em seguida remove da memória e 
converte de novo para seu tipo primitivo. E esse objeto que envolve o tipo contém 
os métodos e propriedades embutidos nele.

Ou seja, quando estamos manipulando uma string, o JS automaticamente embrulha essa 
string dentro de um objeto do tipo String, que contém todas as propriedades 
necessárias para manipular strings e quando terminamos de manipular essa string, 
ele a converte novamente para tipo primitivo e segue normalmente.

Quando criamos um novo objeto com um construtor, é criado um 'object wrapper' 
que envolve um tipo. Vale lembrar que 'null' e 'undefined' não contém 'wrapper 
objects'.

*/

// criando objetos com constructors

const string = new String('Roger') // objeto wrapper do tipo string
const number = new Number(10) // objeto wrapper do tipo number
const array = new Array(1, 2, 3) // objeto wrapper do tipo array
const object = new Object() // objeto wrapper do tipo object

/*
  Isso que foi feito logo acima é exatamente o que o javascript faz 
  automaticamente quando tratamos com algum dado primitivo.
*/

/*
  =============== INTRODUÇÃO A CLASSES ===============

  Em alguns momentos do nosso código será mais recomendado criarmos objetos 
  através de construtores do que objetos literais. Veja o caso de uso a seguir 
  mostrando que utilizar construtores em casos como esse é a melhor opção.

  Vale lembrar que não estamos restritos a apenas os objetos disponibilizados 
  pelo javascript. Nós podemos também criar os nossos próprios objetos com seus 
  métodos e propriedades únicos e invocar o construtor para gerá-los.

  Digamos que precisamos criar alguns objetos 'user' com métodos e propriedades, 
  cada objeto user terá os mesmos métodos e propriedades mas com valores diferentes. 
  Utilizando objetos literias teremos que criar um objeto para cada usuário, 
  tornando o código ilegível depois de um tempo.

  Quando precisarmos criar um ou outro objeto específico, podemos criar 
  de forma literal, mas se precisarmos criar diversos objetos com as mesmas 
  características mas com valores diferentes, precisamos utilizar outras maneiras 
  de criar de forma mais eficiente.

*/

// criando objetos literais com os mesmos métodos e propriedades
// contém métodos e propriedades iguais, mas valores diferenetes
// quanto mais usuários, mais códigos repetidos, mais ilegível fica o código
const user1 = {
  name: 'Roger',
  email: 'roger@gmail.com',
  login: () => 'O usuário logou',
  logout: () => 'O usuário deslogou'
}

const user2 = {
  ...user1, // copiando os valores que são padrões para todo objeto
  name: 'Alessandra',
  email: 'alessandra@gmail.com',
}

const user3 = {
  ...user1,
  name: 'Maria',
  email: 'maria@gmail.com',
}

/*
  Além dos construtores embutidos na linguagem: Array, Number, String, Object, etc. 
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
  classe e esse método irá criar e setar as propriedades do novo objeto. A palavra 
  chave 'new' é a responsável por invocar o método constructor dentro da classe.

  O operador 'new' cria um novo objeto vazio, independente se existe um método 
  constructor ou não dentro de uma classe. O new também faz com que dentro da classe 
  a palavra chave 'this' referencie esse novo objeto que está sendo criado. Todo 
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
    this.name = name, // this referencia esse novo objeto que está sendo craido
    this.lastName = lastName,
    this.age = age
  }

  // caso a propriedade e o parâmetro tenham o mesmo nome, podemos utilizar o 
  // shorthand property name para encurtas a declaração
}

// invocando classe construtora
const user = new User('Roger', 'Santos', 25) // criando instância de User

/*
  =============== MÉTODOS EM CLASSES ===============

  Uma classe é um template de um objeto e para que todos os objetos que ela crie 
  contenha um método, precisaremos criar o método dentro dela, mas vale lembrar que, 
  nós não iremos criar o método dentro da função constructor.

  A função constructor é reservada apenas para as propriedades do objeto, para 
  criar os métodos devemos criar fora da função constructor, declarando um 
  método normalmente. Lembre-que também que o bloco de uma classe não é um objeto, 
  portanto não precisamos separar as declarações com vírgula.

  Os métodos do objeto gerado ficam armazenados dentro da propriedade prototype 
  que veremos futuramente.
  
*/

class Usuario {
  constructor (name, lastName, age) {
    this.name = name,
    this.lastName = lastName,
    this.age = age,
    this.points = 0
  }

  login () {
    console.log(`${this.name} logou na aplicação.`)
    return this 
    // retornando o objeto para podermos encadear o addPoint sempre 
    // que for feito login

    /*
      Quando precisarmos encadear invocações de métodos de um objeto criado por 
      uma classe, precisamos fazer com que as invocações dos métodos da classe 
      retornem o próprio objeto (this).
    */
  }

  logout () {
    return `${this.name} deslogou da aplicação.`
  }
  
  addPoint () {
    this.points++
    return `${this.name} agora tem ${this.points > 1 ? 'pontos' : 'ponto'}`
  }
}

const usuario = new Usuario('Roger', 'Santos', 25)

usuario.login().addPoint()
console.log(usuario)

/*
  =============== HERANÇA ENTRE CLASSES ===============

  Herença entre classes significa fazer com que uma subclasse herde propriedades 
  e métodos de uma outra classe, mas mesmo assim podendo ter as suas próprias 
  propriedades e métodos.

  Isso será usado quando quisermos ter um novo objeto que herda as características 
  de outro mas que tenha características únicas. E para não repetirmos código 
  desnecessariamente, utilizados a herença de classes para obter as características 
  que irão se repetir nos objetos.

  Para herdarmos propriedades e métodos de uma classe, na declaração da classe 
  devemos inserir 'extends' e o nome da classe que queremos herdas as características.

  Quando uma classe não contém um constructor declarado e nós extendemos uma classe 
  de outra, essa outra classe irá usar o constructor da classe que ela está 
  herdando. Mas quando criamos um novo constructor na nova classe, o this desse 
  novo constructor não irá conseguir obter as propriedades da classe herdada, pois 
  haverão dois constructors entrando em conflito.

  O constructor da classe pai só é executado quando não existe um constructor na 
  classe filho, se passar a existir, o constructor a classe pai não será mais 
  executado e o this não conseguirá referenciar o objeto.

  Para resolver isso precisaremos receber todos os argumentos inseridos na 
  invocação da classe e em seguida, dentro da constructor da classe filho 
  iremos invocar a constructor da classe pai, só que para o JS entender que estamos 
  invocando o constructor da classe pai e não do filho, precisaremos trocar o nome 
  'constructor' por 'super'. 

*/

class Mammal {
  constructor (species, name, age) {
    this.spacies = species
    this.name = name
    this.mammaryGland = true
    this.age = age
  }

  incrementAge () {
    this.age++
  }
}

class Lion extends Mammal{ // Lion (subclasse) herdando propriedades e métodos de Mammal (classe)
  constructor (species, name, age, manEater) {
    super(species, name, age) // invocando constructor da classe pai e setando propriedades
    this.manEater = manEater // propriedade única da Lion
  }

  eatZebras (animals) {
    return animals.filter(animal => animal.species !== 'zebra')
  }
}

const zeca = new Mammal('zebra', 'Zeca', 6)
const pompeu = new Mammal('gnu', 'Pompeu', 5)
const angus = new Mammal('macaco', 'Cesar', 8)
const mufase = new Mammal('leão', 'mufasa', 4, false)

const animals = [zeca, pompeu, angus]

console.log(zeca)