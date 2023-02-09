/*
=============== ORIENTAÇÃO A OBJETOS ===============

É uma abordagem, um paradigma para a forma de programar no qual os dados são 
encapsulados em objetos e esses objetos são trabalhados no decorrer da aplicação.
O JavaScript é uma linguagem fortemente orientada a objetos sendo baseado em 
prototypes.

Como o JS é uma linguagem multiparadigma, nós podemos programar orientado a objetos, 
imperativo, funcional ou todas as formas combinadas. Combinando os paradigmas em 
um código podemos extrair o melhor de cada estilo.

Para começar devemos entender mais sobre os tipos primitivos e referência. 
Repare que mesmo não sendo objetos, os tipos primitivos contém métodos e propriedades 
embutidos neles, isso porque quando acessamos um tipo primitivo, o JS automaticamente 
insere esse tipo dentro de um objeto equivalente ao tipo de dado dele.

Sabemos que funções, arrays e objetos literais são todos objetos, mas há outras 
formas de criarmos objetos, que é usando os construtores embutidos da linguagem. 
Esses construtores são objetos ou funções que constroem novos objetos, eles são 
praticamente os tipos de dados que o JavaScript tem.

Existem diversos construtores de objetos no JavaScript, alguns são: 
  - String  - Number  
  - BigInt  - Boolean 
  - Symbol  - Object

Para invocarmos o construtor devemos inserir a palavra chave 'new' antes dele 
para que um novo objeto do tipo desejado seja criado. Se não inserirmos o 'new' 
significa que só estamos querendo converter aquele dado para o tipo do objeto 
desejado.

Mesmo sendo uma das formas de criar objetos no dia dia, dê preferência para 
a criação de objetos literais, isso porque o resultado será sempre o mesmo e um 
objeto literal dá menos trabalho.

Se precisarmos converter um valor, aí pode ser necessário usarmos um construtor, 
mas sem utilizar a palavra chave 'new', pois não queremos gerar um novo objeto 
mas apenas retornar o valor convertido.

Construtores são usados por baixo dos panos pelo JS para agirem como 'wrapper 
objects' (embrulhar objetos). Repare que é possível invocarmos métodos e propriedades 
em tipos primitivos mesmo eles não sendo objetos, isso porque quando tratamos 
um dado primitivo o JS automaticamente 'embrulha' esse dado dentro de um objeto 
equivalente ao seu tipo, trata ele na memória e em seguida remove da memória e 
converte de novo para seu tipo primitivo. E esse objeto que envolve o tipo contém 
os métodos e propriedades para aquele tipo de dado embutido nele.

Ou seja, quando estamos manipulando uma string, o JS automaticamente embrulha essa 
string dentro de um objeto do tipo String(), que contém em seu prototype todas as 
propriedades necessárias para manipular strings e quando terminamos de manipular 
essa string, ele a converte novamente para tipo primitivo e segue normalmente. 
Isso acontece porque não é possível manipularmos tipos primitivos, mas embrulhando 
a string num objeto do tipo String, esse objeto irá conter um prototype com 
métodos e propriedades que modificam a string, aí sim será possível manipulá-la.
Essa ação de embrulhar o dado primitivo, realizar a ação e desembrulhar novamente 
acontece quase que instantaneamente e é imperceptível.

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

  Vale lembrar que não estamos restritos apenas aos objetos disponibilizados 
  pelo javascript. Nós podemos também criar os nossos próprios objetos com seus 
  métodos e propriedades únicos e invocar o construtor para gerá-los.

  Digamos que precisamos criar alguns objetos 'user' com métodos e propriedades, 
  e cada objeto 'user' terá os mesmos métodos e propriedades mas com valores 
  diferentes. Utilizando objetos literais teremos que criar um objeto para cada 
  usuário, tornando o código ilegível depois de um tempo.

  Quando precisarmos criar um ou outro objeto específico, podemos criar 
  de forma literal, mas se precisarmos criar diversos objetos com as mesmas 
  características mas com valores diferentes, precisamos utilizar outras maneiras 
  de criar de forma mais eficiente.

*/

// criando objetos literais com os mesmos métodos e propriedades
// contém métodos e propriedades iguais, mas valores diferentes
// quanto mais usuários, mais códigos repetidos, mais ilegível fica o código
const user1 = {
  name: "Roger",
  email: "roger@gmail.com",
  login: () => "O usuário logou",
  logout: () => "O usuário deslogou",
}

const user2 = {
  ...user1, // copiando os valores que são padrões para todo objeto
  name: "Alessandra",
  email: "alessandra@gmail.com",
}

const user3 = {
  ...user1, // copiando os valores que são padrões para todo objeto
  name: "Maria",
  email: "maria@gmail.com",
}

/*
  Além dos construtores embutidos na linguagem: Array, Number, String, Object, 
  etc. Podemos também criar os nossos próprios construtores de objetos com as 
  características desejadas.

  Existem diversas maneiras de construirmos o nosso próprio objeto, usando 
  'funções construtoras', 'factory functions' ou 'classes'. Antigamente uma das 
  formas era usar prototypes diretamente, mas com a chegada do ES6 podemos utilizar 
  a palavra chave 'class' para construir objetos. O nome 'class' é apenas uma 
  abstração para nos facilitar de entendermos melhor o que está acontecendo, pois 
  por baixo dos panos elas estão usando prototypes para construir os objetos.

  As classes foram adicionadas como uma tentativa de deixar mais fácil o entendimento 
  da sintaxe para se trabalhar com prototypes. Veremos mais a frente o que são 
  prototypes e o que a abstração 'class' faz por baixa dos panos usando prototype.

  Class é a planta de um objeto, um template que descreve quais serão as propriedades 
  básicas de um objeto quando ele for construído. A class terá o objeto com as 
  características básicas mas poderá receber valores diferentes para cada construção.

  Todo construtor embutido na linguagem tem a primeira letra do nome maiúscula, 
  então, por convenção, quando formos criar os nossos objetos, declararemos 
  também com letras maiúsculas. Isso é usado para diferenciarmos propositalmente 
  das funções comuns do JS.

  Class em javascript é um tipo de construtor, e um construtor por sua vez é uma 
  função. Dentro da class iremos declarar um método chamado 'constructor' que é 
  o método que irá de fato setar as propriedades do novo objeto.

  Quando invocamos a 'new User()', o método 'constructor' será invocado dentro da
  classe e esse método irá criar o novo objeto, setar as suas propriedades, fazer 
  o bind do 'this' no novo objeto, para que esse this dentro da classe referencie 
  o novo objeto que está sendo criado, irá rodar todo o código dentro do constructor 
  e retornar o novo objeto. A palavra chave 'new' é a responsável por invocar o 
  método 'constructor' dentro da classe.

  O operador 'new' cria um novo objeto vazio, independente se existe um método 
  constructor ou não dentro de uma classe. O new também faz com que dentro da classe 
  a palavra chave 'this' referencie esse novo objeto que está sendo criado. Todo 
  this dentro da classe corresponde ao novo objeto que está sendo criado.

  Quando objetos são criados através de uma classe, tecnicamente chamamos esses 
  novos objetos de instâncias da classe, esse termo é usado para se referir a um 
  objeto que foi criado por uma classe. Ou seja, falamos que estamos "instanciando 
  um novo objeto".

  Agora podemos criar quantos objetos quisermos com as mesmas propriedades e 
  utilizando apenas uma classe construtora sem ter que criar diversos objetos 
  para 'users' diferentes.
*/

// declarando class para construir objeto User
class User {
  // setando as propriedades do novo objeto
  constructor (name, lastName, age) {
    // criando as propriedades
    this.name = name, // this referencia esse novo objeto que está sendo criado
    this.lastName = lastName,
    this.age = age
  }
}

// invocando classe construtora
const user = new User("Roger", "Santos", 25) // criando instância do objeto User
const user2 = new User("Alessandra", "Carvalho", 44)

/*
  =============== MÉTODOS EM CLASSES ===============

  Uma classe é um template de um objeto e para que todos os objetos que ela crie 
  contenham um método, precisaremos criar o método dentro dela, mas vale lembrar 
  que nós não iremos criar o método dentro da função 'constructor'.

  A função constructor é reservada apenas para as propriedades do objeto, para 
  inserir os métodos devemos criar fora da função constructor, declarando um 
  método normalmente. Lembre-se também que o bloco de uma classe não é um objeto, 
  portanto não precisamos separar as declarações com vírgula.

  Repare que, os métodos do objeto gerado ficam armazenados dentro da propriedade 
  prototype e não dentro do objeto em si, veremos o porquê disso nas próximas aulas. 
  Dentro da classe, na declaração de métodos utilizamos as 'function declarations'
  com sintaxe de shorthand property name.
  
*/

class Usuario {
  constructor(name, lastName, age) {
    this.name = name, 
    this.lastName = lastName, 
    this.age = age, 
    this.points = 0
  }

  login () {
    console.log(`${this.name} logou na aplicação.`)
    return this // retornando objeto para encadear outro método

    /*
      se na invocação do método desejarmos encadear outro método, então 
      o método anterior deve retornar o próprio objeto, pois assim a invocação
      encadeada irá conseguir acessar o seu método, é o que está acontecendo acima.

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
    return `${this.name} agora tem ${this.points} ${this.points > 1 ? "pontos" : "ponto"}`
  }
}

const usuario = new Usuario("Roger", "Santos", 25)

usuario.login().addPoint() // encadeando métodos
console.log(usuario)

/*
  =============== HERANÇA ENTRE CLASSES ===============

  Herança entre classes significa fazer com que uma subclasse herde propriedades 
  e métodos de uma outra classe, mas mesmo assim podendo ter as suas próprias 
  propriedades e métodos.

  Isso será usado quando quisermos ter um novo objeto que herde as características 
  de outro mas que tenha características únicas. E para não repetirmos código 
  desnecessariamente, utilizamos a herença de classes para obter as características 
  que irão se repetir nos objetos.

  Para herdarmos propriedades e métodos de uma classe, na declaração da classe 
  devemos inserir 'extends' e o nome da classe que queremos herdar as características.

  Quando uma subclasse não contém um constructor declarado, essa subclasse irá usar 
  o constructor da classe que ela está herdando e consequentemente irá obter as 
  propriedades dessa classe pai. Mas quando criamos um novo constructor na subclasse, 
  a subclasse não irá conseguir mais obter as propriedades da classe pai, isso 
  porque, existindo dois constructor, eles entram em conflito.

  Não conseguimos usar o this na subclasse sem antes chamar o constructor da 
  classe pai com super()

  O constructor da classe pai só é executado quando não existe um constructor na 
  classe filho, se passar a existir, o constructor da classe pai não será mais 
  executado. A classe pai é conhecida também como superclass, por isso o nome do 
  método que a invoca é chamado de 'super'.

  Podemos 'sobrescrever' métodos da subclasse que já existem na superclasse, pois 
  como estão em objetos diferentes, declarar com o mesmo nome não causará problema, 
  mesmo tendo o mesmo nome cada método terá seu comportamente único.

  Para resolver isso e recebermos as propriedades da classe pai e ainda inserir 
  propriedades exclusivas da subclasse precisaremos receber todos os argumentos 
  da classe pai na invocação da subclasse e em seguida, dentro do constructor da 
  subclasse iremos invocar o constructor da classe pai, só que para o JS entender 
  que estamos invocando o constructor da classe pai e não do filho, precisaremos 
  trocar o nome 'constructor' por 'super'. Assim nós teremos dois constructors, 
  um para a subclasse e outro para obter as propriedades da superclass para evitar 
  um conflito entre elas. Veja o exemplo abaixo:

*/

// superclass
class Mammal {
  constructor(species, name, age) {
    this.species = species
    this.name = name
    this.age = age
    this.mammaryGland = true
  }

  incrementAge() {
    this.age++
  }
}

class Lion extends Mammal { // Lion (subclasse / classe filha) herdando propriedades e métodos de Mammal (superclass / classe pai)
  constructor(species, name, age, manEater) { // constructor da subclasse
    super(species, name, age) // invocando constructor da classe pai com 'super' e obtendo e setando propriedades
    this.manEater = manEater // propriedade única da subclasse Lion
  }

  eatZebras(animals) { // método único da subclasse Lion
    return animals.filter((animal) => animal.species !== 'zebra')
  }
}

const zeca = new Mammal('zebra', 'Zeca', 6)
const pompeu = new Mammal('gnu', 'Pompeu', 5)
const cesar = new Mammal('macaco', 'Cesar', 8)
const mufasa = new Lion('leão', 'mufasa', 4, false)
const scar = new Lion('leão', 'scar', 10, true)

const animals = [zeca, pompeu, cesar]

scar.eatZebras(animals)
console.log(mufasa, scar)
