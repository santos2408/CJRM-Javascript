/*
=============== ORIENTAÇÃO A OBJETOS ===============

É uma abordagem, um paradigma para a forma de programar no qual os dados são 
encapsulados em objetos e esses objetos são trabalhados no decorrer da aplicação.
O JavaScript é uma linguagem fortemente orientada a objetos sendo baseado em 
prototypes.

Como o JS é uma linguagem multiparadigma, nós podemos programar orientado a objetos, 
imperativo, funcional ou todas as formas combinadas. Combinando os paradigmas em 
um código podemos extrair o melhor de cada estilo.

Para começarmos devemos entender mais sobre os tipos primitivos e referência. 
Repare que mesmo não sendo objetos, os tipos primitivos contém métodos e propriedades 
embutidos neles. Isso porque quando acessamos um tipo primitivo, o JS automaticamente 
insere esse tipo dentro de um objeto equivalente ao tipo de dado.

Sabemos que funções, arrays e objetos literais são todos objetos, mas há outras 
formas de criarmos objetos, que é usando os construtores embutidos da linguagem. 
São objetos ou funções que constroem novos objetos, eles são praticamente os tipos 
de dados que o JavaScript tem.

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
mas sem utilizar a palavra chave 'new', pois não queremos gerar um novo objeto mas 
apenas retornar o valor convertido.

Construtores são usados por baixo dos panos pelo JS para agirem como 'wrapper 
objects' (embrulhar objetos). Repare que é possível invocarmos métodos e propriedades 
em tipos primitivos mesmo eles não sendo objetos, isso porque quando tratamos 
um dado primitivo o JS automaticamente 'embrulha' esse dado dentro de um objeto 
equivalente ao seu tipo, trata ele na memória e em seguida remove da memória e 
converte de novo para seu tipo primitivo. E esse objeto que envolve o tipo contém 
os métodos e propriedades embutidos nele.

Ou seja, quando estamos manipulando uma string, o JS automaticamente embrulha essa 
string dentro de um objeto do tipo String, que contém em seu prototype todas as 
propriedades necessárias para manipular strings e quando terminamos de manipular 
essa string, ele a converte novamente para tipo primitivo e segue normalmente. 
Isso acontece porque não é possível manipularmos tipos primitivos, mas embrulhando 
a string uma objeto do tipo String, esse objeto irá conter um prototype com 
métodos e propriedades que modificam a string, aí sim será possível manipulá-la.

Quando criamos um novo objeto com um construtor, é criado um 'object wrapper' 
que envolve um tipo. Vale lembrar que 'null' e 'undefined' não contém 'wrapper 
objects'.

*/

// criando objetos com constructors

const string = new String("Roger"); // objeto wrapper do tipo string
const number = new Number(10); // objeto wrapper do tipo number
const array = new Array(1, 2, 3); // objeto wrapper do tipo array
const object = new Object(); // objeto wrapper do tipo object

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
  Utilizando objetos literais teremos que criar um objeto para cada usuário, 
  tornando o código ilegível depois de um tempo.

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
};

const user2 = {
  ...user1, // copiando os valores que são padrões para todo objeto
  name: "Alessandra",
  email: "alessandra@gmail.com",
};

const user3 = {
  ...user1, // copiando os valores que são padrões para todo objeto
  name: "Maria",
  email: "maria@gmail.com",
};

/*
  Além dos construtores embutidos na linguagem: Array, Number, String, Object, 
  etc. Podemos também criar os nossos próprios construtores de objetos com as 
  características desejadas.

  Existem diversas maneiras de construirmos o nosso próprio objeto, usando 
  funções construtoras, factory functions ou classes. Antigamente uma das 
  formas era usar prototypes diretamente, mas com a chegada do ES6 podemos utilizar 
  a palavra chave 'class' para construir objetos. O nome 'class' é apenas uma 
  abstração para nos facilitar de entendermos melhor o que está acontecendo, pois 
  por baixo dos panos elas estão usando prototypes para construir os objetos.

  Elas foram adicionadas como uma tentativa de deixar mais fácil o entendimento 
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
  o novo objeto criado, irá rodar todo o código dentro do constructor e retornar 
  o novo objeto. A palavra chave 'new' é a responsável por invocar o método 
  constructor dentro da classe.

  O operador 'new' cria um novo objeto vazio, independente se existe um método 
  constructor ou não dentro de uma classe. O new também faz com que dentro da classe 
  a palavra chave 'this' referencie esse novo objeto que está sendo criado. Todo 
  this dentro da classe corresponde ao novo objeto que está sendo criado.

  Quando objetos são criados através de uma classe, tecnicamente chamamos esses 
  novos objetos de instâncias da classe, esse termo é usado para se referir a um 
  objeto que foi criado por uma classe.

  Agora podemos criar quantos objetos quisermos com as mesmas propriedades e 
  utilizando apenas uma classe construtora sem ter que criar diversos objetos 
  para 'users' diferentes.
*/

// declarando class para construir objeto User
class User {
  // criando objeto
  constructor(name, lastName, age) {
    // criando as propriedades
    this.name = name, // this referencia esse novo objeto que está sendo criado
    this.lastName = lastName,
    this.age = age;
  }
}

// invocando classe construtora
const user = new User("Roger", "Santos", 25); // criando instância de User
const user2 = new User("Alessandra", "Carvalho", 44);

/*
  =============== MÉTODOS EM CLASSES ===============

  Uma classe é um template de um objeto e para que todos os objetos que ela crie 
  contenham um método, precisaremos criar o método dentro dela, mas vale lembrar 
  que, nós não iremos criar o método dentro da função 'constructor'.

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
    this.points = 0;
  }

  login () {
    console.log(`${this.name} logou na aplicação.`);
    return this; // retornando objeto para encadear outro objeto

    /*
      se na invocação do método desejarmos encadear outro método, então 
      o método anterior deve retornar o próprio objeto, pois assim a invocação
      encadeada irá conseguir acessar o seu método.

      Quando precisarmos encadear invocações de métodos de um objeto criado por 
      uma classe, precisamos fazer com que as invocações dos métodos da classe 
      retornem o próprio objeto (this).
    */
  }

  logout() {
    return `${this.name} deslogou da aplicação.`;
  }

  addPoint() {
    this.points++;
    return `${this.name} agora tem ${this.points} ${this.points > 1 ? "pontos" : "ponto"}`;
  }
}

const usuario = new Usuario("Roger", "Santos", 25);

usuario.login().addPoint();
console.log(usuario);

/*
  =============== HERANÇA ENTRE CLASSES ===============

  Herança entre classes significa fazer com que uma subclasse herde propriedades 
  e métodos de uma outra classe, mas mesmo assim podendo ter as suas próprias 
  propriedades e métodos.

  Isso será usado quando quisermos ter um novo objeto que herda as características 
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

  O constructor da classe pai só é executado quando não existe um constructor na 
  classe filho, se passar a existir, o constructor da classe pai não será mais 
  executado. A classe pai é conhecida também como superclass, por isso o nome do 
  método que a invoca é chamado de 'super'.

  Não conseguimos usar o this na subclasse sem antes chamar o constructor da 
  classe pai com super()

  Podemos 'sobrescrever' métodos da subclasse que já existem na superclasse, pois 
  como estão em objetos diferentes, declarar com o mesmo nome não causará problema, 
  mesmo tendo o mesmo nome cada método terá seu comportamente único.

  Para resolver isso e recebermos as propriedades da classe pai e ainda inserir 
  propriedades exclusivas da subclasse precisaremos receber todos os argumentos 
  da classe pai na invocação da subclasse e em seguida, dentro do constructor da 
  subclasse iremos invocar o constructor da classe pai, só que para o JS entender 
  que estamos invocando o constructor da classe pai e não do filho, precisaremos 
  trocar o nome 'constructor' por 'super'. Assim nós teremos dois constructors, 
  um para a subclasse e outro para obter as propriedades da superclass sem evitar 
  um conflito entre elas. Veja o exemplo abaixo:

*/

class Mammal {
  // superclass
  constructor(species, name, age) {
    this.species = species;
    this.name = name;
    this.age = age;
    this.mammaryGland = true;
  }

  incrementAge() {
    this.age++;
  }
}

class Lion extends Mammal {
  // Lion (subclasse) herdando propriedades e métodos de Mammal (classe pai)
  constructor(species, name, age, manEater) {
    // constructor da subclasse
    super(species, name, age); // invocando constructor da classe pai e obtendo propriedades
    this.manEater = manEater; // propriedade única da subclasse Lion
  }

  eatZebras(animals) {
    // método único da subclasse Lion
    return animals.filter((animal) => animal.species !== "zebra");
  }
}

const zeca = new Mammal("zebra", "Zeca", 6);
const pompeu = new Mammal("gnu", "Pompeu", 5);
const cesar = new Mammal("macaco", "Cesar", 8);
const mufasa = new Lion("leão", "mufasa", 4, false);
const scar = new Lion("leão", "scar", 10, true);

const animals = [zeca, pompeu, cesar];

scar.eatZebras(animals);
console.log(mufasa, scar);

/*
  =============== MÉTODOS GETTER AND SETTER ===============

  Métodos get e set são outras features de classes. 
  
  Quando temos um método numa classe que está claramente obtendo um determinado 
  valor, nós reconhecemos esse método como um método 'getter', ou seja, esse 
  método existe para que um valor seja obtido quando ele for invocado.

  Portanto, quando um método é um 'getter' nós podemos usar uma sintaxe de 
  abreviação inserindo a palavra chave 'get' a esquerda do nome do método. Essa 
  palavra chave nos permitirá obter o valor da propriedade usando a sintaxe de 
  propriedade. Também devemos colocar o nome do método em letras minúsculas.

  Com isso, mesmo sendo um método, no momento da invocação desse método podemos 
  remover a sintaxe de invocação de método e invocá-lo como se estivessemos 
  chamando uma propriedade, ou seja, sem precisar inserir parênteses.

  Vale lembrar que não podemos ter métodos e propriedades com o mesmo nome, então 
  se isso estiver ocorrendo, troque os nomes para evitar conflito.

  Da mesma forma que existem métodos que obtém um valor 'getter', existem também 
  métodos que setam um valor 'setter', ou seja, que atribuem um valor a uma 
  propriedade. Para isso usamos a mesma sintaxe de abreviação mas passamos a 
  palavra chave 'set' a esquerda do método.

  Pode parecer estranho invocar métodos como se fossem propriedades, e é sim. 
  Mas quando nos depararmos com um código semelhante em um projeto real, deveremos 
  saber o que está acontecendo. Então, saber que isso é possível é uma maneira 
  de evitar consequências no futuro e se for viável poderemos refatorar o código.

*/

class Counter {
  constructor() {
    this.count = 0; // propriedade pública
  }

  get value() {
    // método get usando sintaxe de abreviação
    return this.count;
  }

  increment() {
    this.count++;
  }

  set newValue(aNumber) {
    // método set usando sintaxe de abreviação
    this.count = aNumber;
  }
}

const counter = new Counter();

counter.value; // invocando método get usando sintaxe de propriedade
counter.newValue = 7; // setando um valor usando sintaxe de propriedade

/*
  =============== ENCAPSULAMENTO ===============

  É um mecanismo de restringir o acesso direto a certas informações de um objeto.
  Isso é muito importante e existem no mínimo 3 formas de encapsularmos dados em 
  javascript: com classes, factory functions ou funções construtoras.

  Agora veremos a forma utilizando classes, as outras duas formas veremos em 
  aulas posteriores.

  Repare que, no código abaixo, mesmo tendo métodos próprios para modificar o valor 
  da propriedade count, nada impede que fora da classe, depois que instanciamos 
  o objeto, modifiquemos e acessemos a propriedade count dentro da classe. Ou seja, 
  códigos externos à classe podem acessar e modificar propriedades dentro dela.

*/

class Counter {
  count = 0; // propriedade pública (public class fields)

  get value() {
    // método get usando sintaxe de abreviação
    return this.count;
  }

  increment() {
    this.count++;
  }

  set newValue(aNumber) {
    // método set usando sintaxe de abreviação
    this.count = aNumber;
  }
}

const counter = new Counter();

counter.count = "Olá"; // atribuindo string à count
console.log(counter.count); // acessando diretamente o valor da count

/*
  Veja que, o código que escrevemos fora da classe consegue acessar e modificar 
  o valor da propriedade count dentro da classe. Isso pode parecer normal, mas é 
  um problema de segurança.

  Isso acontece porque a propriedade count é uma propriedade pública. Normalmente 
  a propriedade já é pública, mas podemos explicitar isso removendo o 'constructor', 
  removendo o 'this' e deixando apenas a declaração do nome da propriedade. Esse tipo 
  de feature que nos permite declarar uma propriedade pública sem precisar declarar 
  o método constructor é chamada de 'public class fields'.

  Fields é um termo alternativo para 'propriedades dentro de uma classe'. Propriedade 
  e fields significam a mesma coisa nesse contexto.

  Mas se desejarmos que apenas os códigos internos da classe possam acessar e 
  modificar as propriedades dela, para isso devemos declarar a propriedade como 
  privada, com isso qualquer código fora da classe será impedido de acessar ou 
  modificar as propriedades dela.

  Chamamos a declaração de propriedades privadas de 'class private fields', 
  declarando uma '#' antes do nome da propriedade a tornará privada e apenas os 
  métodos internos da classe poderão acessar ou modificar seu valor, códigos 
  externos não terão acesso.

  Caso deseje inserir um valor dentro da propriedade privada que está sendo recebido 
  por parâmetro ou o objeto precisa de outras propriedades que são únicas, você pode, 
  abaixo da propriedade privada, criar o método constructor e reatribuir o valor 
  da propriedade recebendo o valor do parâmetro e trabalhar normalmente com o 
  constructor
*/

class Counter {
  #count = 0; // propriedade privada, precisa usar '#' (private class fields)

  constructor(value) {
    // atribuindo valor na propriedade privada através de parâmetro
    // pode usar o constructor normalmente
    this.#count = value;
  }

  get value() {
    // método get usando sintaxe de abreviação
    return this.#count;
  }

  increment() {
    this.#count++;
  }

  set newValue(aNumber) {
    // método set usando sintaxe de abreviação
    this.#count = aNumber;
  }
}

const counter = new Counter();

counter.#count = "Olá"; // não tem permissão para modificar a propriedade
console.log(counter.count); // não tem permissão para acessar a propriedade

counter.newValue = 5; // modificando propriedades através do método que existe na classe
counter.value; // acessando propriedade através do método que existe na classe

/*
  Em classes que herdam propriedades de outras classes, se as propriedades dessa 
  subclasse forem públicas, nós não precisamos inserir o método constructor, 
  invocar o método super para obter as propriedades da classe pai e em seguida 
  criar as propriedades próprias da subclasse.

  Basta utilizar a sintaxe de propriedade pública removendo o contructor, o this 
  e deixando apenas a declaração da propriedade. Naturalmente a subclasse está 
  obtendo as propriedades da classe pai e inserindo propriedades únicas no seu 
  bloco.

  Vale lembrar que esse tipo de ação só funciona em subclasses, na classe pai 
  ainda precisaremos do método constructor para criar as propriedades. E perceba 
  também que se quisermos obter dados através dos parâmetros da subclasse, aí 
  deveremos continuar tendo de fato o método constructor na subclasse também.
*/

/*
  =============== MUTABILIDADE ===============

  variáveis let indicam mutabilidade, e essa mutabilidade tende a ocultar bugs. 
  Isso não significa que const são imutáveis, mas quando usamos const no código, 
  usamos para indicar que não vamos mudar aquele valor, o valor dela permanecerá 
  o mesmo ao longo da aplicação.

  Fique atento para a mutabilidade de valores, se está recebendo valores em lets 
  que lá na frente irão ser modificadas, prefira armazenas o resultado das 
  modificações numa nova 'const' e não reatribuir para as lets existentes.

  Mesmo criando objetos, se você sabe que esse objeto irá ser modificado, recebendo 
  novos dados, procure declara-lo então como 'let' para indificar explicitamente 
  que aquele objeto será mutável.
*/
