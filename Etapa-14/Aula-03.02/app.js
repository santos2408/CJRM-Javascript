/* 

=============== HERANÇA PROTOTIPAL ===============

Agora veremos como acontece a verdadeira herança do javascript. É necessário
entendermos como funciona a herança prototipal para sabermos como o javascript 
compõe objetos, essa é uma das principais características que torna o que o JS
é hoje.

Quando uma palavra chave class é usada e queremos criar uma subclasse, ou seja, 
uma classe que herda métodos e propriedades da classe pai mas que também tem 
propriedades e métodos únicos, nós usamos a palavra chave extends e a invocação 
do super.

Já com funções construtoras, para fazermos herança entre elas devemos invocar 
dentro da função construtora o método call(), esse método irá invocar a função 
construtora que dejamos herdar os métodos e propriedades.

No entanto, isso não é suficiente, pois precisaremos fazer com que o this da 
função construtora (pai) seja o mesmo this da função construtora (filha), pois 
se não fizermos isso, o this da função construtora (filha) irá referenciar o novo 
objeto criado e não queremos isso, queremos referenciar o pai. Para isso precisamos 
passar como argumento do método 'call' o 'this' da função filha que é o próprio objeto 
criado por ela. Agora o this da função pai será o objeto da função filha.

Portanto, usamos o call() para invocar uma determinada função construtora e forçar
que o this dessa função invocada armazene o valor que quisermos que ele armazene.

Mas não é só isso, o método call() pode receber também, depois do primeiro 
parâmetro, os valores que a função pai pode receber como parâmetros

Agora, para inserirmos propriedades únicas para a função construtora filha, é só 
declararmos normalmente abaixo da invocação da call(). A classe pai não receberá 
essas propriedades, elas serão exclusivas da função filha. E para passarmos métodos 
únicos, passamos dentro do prototype da função.

Para herdarmos os métodos da função pai que se encontram dentro do prototype desse 
objeto, devemos invocar o método Object.create(), ele irá fazer com que as propriedades 
do prototype do objeto passado como argumento seja inserido dentro do prototype 
do objeto desejado. Isso irá criar uma cadeia de prototypes em que os objetos 
poderão acessar os métodos de outros objetos.

Essa cadeia de prototypes é o que faz com que um objeto possa acessar propriedades 
de qualquer outro objeto que esteja nessa cadeia. Essa é a forma com que o JS 
faz herança e essa é a forma que o diferencia de linguagens em que a herança é 
baseada em classes. 

É essa cadeia de protótipos que entra em ação quando usamos a palavra chave 
'class' e criamos uma subclasse com 'extends'.

*/

// função construtora
function Aluno(name, email) {
  this.name = name;
  this.email = email;
  // depois da invocação da call(), esse this passa a ser o TeacherAssistent
}

Aluno.prototype.login = function login() {
  return `${this.name} fez login.`;
};

Aluno.prototype.comment = function comment() {
  return `${this.name} comentou no post`;
};

// ==========================================================================

// trabalhando com herença em funções construtoras:
function TeacherAssistent(name, email, scheduleWeekPosts) {
  Aluno.call(this, name, email); // invocando construtor Aluno e passando os parâmetros
  this.scheduleWeekPosts = scheduleWeekPosts; // propriedade única de TeacherAssistent
}

TeacherAssistent.prototype = Object.create(Aluno.prototype); // necessário para herdar os métodos de Aluno
TeacherAssistent.prototype.constructor = TeacherAssistent; // restaurando o constructor para o correto

/*
  Obs: devemos restaurar o 'constructor' porque quando herdamos o prototype do Aluno 
  porque mesmo querendo herdar apenas os métodos, todos os itens do prototype vem junto, 
  incluindo o constructor, como só queremos os métodos, nós precisamos restaurar 
  o constructor para "valor original"
*/

// ====== MESMO CÓDIGO USANDO 'CLASS' ======
class TeacherAssistent extends Aluno {
  constructor(name, email, scheduleWeekPosts) {
    super(name, email);
    this.scheduleWeekPosts = scheduleWeekPosts;
  }
}

/*
  Obs:

  - Ambas criam objetos com instâncias corretas (Class e Constructor Function)
  - TeacherAssistent tem acesso aos métodos que estão dentro do prototype de Aluno, igual a Class
  - Ao contrário da função construtora, a classe garante que 'instanceof' funcione sem configurações adicionais.

*/

// ==========================================================================

// método exclusivo de TeacherAssistent
TeacherAssistent.prototype.giveBadge = function giveBadge({ name }) {
  return `${this.name} deu uma medalha para ${name}`;
};

const maria = new Aluno("Maria", "maria@gmail.com");
const jose = new Aluno("Jose", "jose@gmail.com");
const arthurSouza = new TeacherAssistent("Arthur Souza", "arthursouza@rogermelo.com.br", false);

/*

  Quando precisaremos usar classes ou funções construtoras ? 

  Usaremos classes quando precisarmos criar objetos específicos que compartilham 
  métodos, isso ajudará a economizar memória. Além de serem mais simples do que 
  funções construtoras. As funções construtoras eram usadas antes da chegada das 
  classes, por isso é importante entendermos funções construtoras e heranças 
  prototipais, pois ainda existem códigos usando essas features e sabendo como 
  funções construtoras funcionam, saberemos o que uma classe está fazendo por 
  baixo dos panos.

  Usaremos classes quando precisarmos fazer heranças, o que pode ser algo raro, 
  quando estivermos desenvolvendo uma biblioteca ou quando precisarmos economizar 
  uma quantidade muito baixa de memória, o que não faz muito sentido.

  No entanto, é valido sabermos como as coisas funcionam e nas próximas aulas 
  veremos a terceira forma de como criar e compor objetos em JS. Já vimos a 
  criação de objetos por meio de Classes e Constructor Functions, agora veremos 
  através de factory functions.
  
=============== FACTORY FUNCTIONS E COMPOSIÇÃO DE OBJETOS ===============

Existe uma alternativa mais direta de se compor objetos em aplicações web com 
javascript puro, ela é chamada de factory functions. Uma factory function é 
qualquer função que não é uma classe, nem construtor, nem função construtora, mas 
retorna um novo objeto. Em JS qualquer função pode retornar um objeto. Quando 
escrevemos factory functions não precisamos colocar o nome dela com inicial 
maiúscula.

Quando uma função retorna um objeto sem a necessidade de usar a palavra chave 
'new' antes da invocação dela, então ela é uma factory function. Com ela podemos 
criar e compor objetos na aplicação web com um código mais simples comparado a 
classes, constructors e new.

Com factory functions não precisamos nos preocupar com inserção de 'new', 'this' 
ou 'constructor'. Pensando em código de larga escala, a compreesensão dele será 
mais fácil com factory functions do que classes.

Ainda conseguimos declarar propriedades privadas dentro de uma factory function. 
E mesmo que criemos vários objetos com base numa única função, o bloco dessa 
função será único para cada objeto criado, pois é aplicado o conceito de closures, 
que é a combinação de uma função com seu escopo léxico, que é todo escopo que 
envolve a declaração da função.

Você pode optar por trabalhar com classes ou factory functions, mas dê preferência 
para factory functions. Classes são mais inflexíveis, ao contrário de factory 
functions.

Uma das vantagens da factory functions, é que ao invés de o 'this' referenciar o 
objeto que está sendo criado, ele irá referenciar quem ele tiver que referenciar. 
Isso nos tenderá a escrever menos 'this', o que o tornará mais previsível.

*/

// criando objeto user com classe
class User {
  #counter = 0; // propriedade privada

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  incrementCounter() {
    return ++this.#counter;
  }
}

// criando o mesmo objeto user agora com factory function
const createUser = (name, email) => {
  // escopo externo
  let counter = 0; // informação privada / só código interno acessa

  return {
    // retorna um objeto // caracteriza uma factory function
    name,
    email,
    incrementCounter: () => ++counter, // caracteriza a closure
  };
};

const user = new User("Roger", "roger.santos36@gmail.com");
const user2 = createUser("Roger", "roger.santos36@gmail.com"); // cria a closure
const user3 = createUser("Roger", "roger.santos36@gmail.com"); // cria a closure

/*
    repare que createUser está sendo invocado duas vezes para dois objetos 
    diferentes, no entanto estão sendo criadas dois objetos em espaços diferentes 
    na memória, portanto as variáveis de um objeto não são as mesmas do outro 
    objeto. Isso garante que cada user tenha as suas próprias informações.

    RUN TIME BINDING!: 

    ao invés do valor do this ser determinado com base em onde a função é declarada, 
    o valor será determinado com base em como ela é invocada.
*/

console.log(user); // Objeto User
console.log(user.incrementCounter()); // Objeto User
console.log(user2); // Objeto 'createUser'
console.log(user2.incrementCounter()); // Objeto 'createUser'

/*

  Para obtermos o prototype de um objeto, não usamos mais a sintaxe 
  object.__prototype__. Essa sintaxe era usada em versões mais antigas do JS 
  e atualmente ela está em desuso, no entanto ainda funciona para manter códigos 
  legados funcinando na web. Mas agora, o uso correto para obter o prototype de 
  um objeto é utilizando o método 'Object.getPrototypeOf('object')'

  Para checarmos se o prototype de um objeto existe dentro prototype de um outro 
  objeto, usamos o método object1.isPrototypeOf('object2')

  Podemos estabelecer um padrão de nomes de funções. Quando uma função busca um 
  dado, por exemplo numa API, ela pode ter o nome com a palavra 'fetch', mas quando 
  a função é executada para obter um valor, ou seja, retornar um valor dela, podemos 
  colocar a palavra 'get' junto do nome dela, por convenção.

*/

/*
  ==================== CLOSURES ====================

  Quando uma função interna (uma função que está dentro de outra), acessa uma 
  variável que foi declarada no escopo léxico dela, ou seja, que ela ainda consiga 
  acessar, essa função será conhecida como 'closure'. Closure é a combinação de 
  uma função com o seu escopo léxico. Funções aninhadas tem acesso a suas funções
  externas, em 'degraus'.

  Vale lembrar que uma função não é uma closure, porque closure não é um tipo, 
  mas sim uma característica que uma função pode acabar tendo com base no seu 
  escopo e funções interna. Então podemos dizer que determina função está 
  formando uma closure.

*/

const init = () => {
  /*
    Repare abaixo que a displayName() tem acesso a variável da função externa init(), 
    a displayName() tem referências do seu estado circundante, portanto, a displayName() 
    forma forma uma closure porque é uma função aninhada.
  */

  let name = "Roger"; // variável local criada pela função init / escopo externo

  function displayName() {
    // função interna / forma uma closure
    // está disponível apenas dentro da init
    // tem acesso ao seu escopo léxico (circundante), ex: variável 'name'
    console.log(name); // usando variável da função pai
  }

  displayName();
};

init();

/*
  ==================== ESTADOS ====================

  Definir estado não é uma tarefa simples, pois ele é um termo muito amplo, 
  podendo ser usado em vários contextos. Mas de forma simplificada, estado é um 
  termo técnico para informações armazenadas, geralmente em um objeto, que podem 
  ser acessadas em um determinado ponto no tempo.

  Essas informações influenciam o output do que é renderizado na tela. Essa é 
  uma definição de estado simplificada, é mais complexo do que isso. Geralmente 
  um objeto que é usado por funções e partes de código durante a aplicação é 
  chamado de objeto com 'estado compartilhado'.

  Estados são muito utilizados por frameworks como 'Vue', 'React' e 'Angular'.

  Sempre que possível evite expor objetos globais na aplicação, isso porque pode 
  haver colisão de nomenclatura, que é quando duas váriaveis de mesmo nome são 
  declaradas no mesmo escopo, isso pode resultar em bugs caso um pedaço de código 
  na aplicação use essa variável para armazenar um outro valor não esperado.

  Outra coisa é que variáveis globais podem deixar o código imprevisível, visto 
  que elas não delimitam qual tipo de valor pode ser atribuído a ela. Exemplo:

    let internalExchangeRate = {} // variável global armazenando objeto

    ...

    internalExchangeRate = 'Oi' // variável sendo reatribuída e virando string!

  Repare que a varíavel começou sendo um objeto e durante a aplicação foi foi
  reatribuída para uma string, como se trata de uma reatribuição, eu posso 
  sisplesmente mudar a variável de um objeto para uma string e não existe nenhum 
  tipo de mecanismo que me impeça de fazer isso, esse tipo de reatribuição 
  acidental pode acontecer ao longo da aplicação.

  Para resolver esse problema, poderíamos pensar em armazenar esse estado 
  compartilhado em uma localStorage, mas lembre-se que localStorage é para 
  persistir dados mesmo quando fechamos a aplicação e não é isso que queremos.
  Nosso objetivo é preservar os dados durante o uso da aplicação apenas.
  Para armazenar esses dados e evitar que estejam expostos no escopo global, 
  devemos usar 'closures' e 'IIFE'.

  ================ IIFE - IMMEDIATLY INVOKED FUNCTION EXPRESSION ==============

  Antigamente as IIFE eram usadas para fazer com que uma aplicação só tivesse 
  escopos locais, ou seja, escopos de funções, porque como funções tem escopo 
  próprio, tudo que fosse escrito dentro delas não sairia dalí. Como o JS hoje 
  em dia contém um sistema de 'módulos' as IIFF não são mais necessárias para 
  evitar o escopo global entre arquivos '.JS' diferentes. Quando se usa o sistema
  de módulos não precisamos mais pendurar uma variável no escopo global ou usar 
  IIFE para usar essa variável em dois ou mais arquivos '.JS'. Caso não usemos 
  módulos, podemos usar IIFE normalmente.

*/

// IIFE
const state = (() => {
  let exchangeRate = {};

  const checkIfIsAObject = (newExchangeRate) => typeof newExchangeRate === "object";

  return {
    getExchangeRate: () => exchangeRate,
    setExchangeRate: (newExchangeRate) => {
      const isAObject = checkIfIsAObject(newExchangeRate); // impedindo retribuição de tipo diferente

      if (isAObject) {
        exchangeRate = newExchangeRate;
        return exchangeRate;
      }

      return "Desculpe, mas o valor inserido não é um objeto e eu não posso alterar o tipo de dado dessa variável.";
    },
  };
})();

// console.log(state.getExchangeRate())
// console.log(state.setExchangeRate({ x: 1 }))
// console.log(state.setExchangeRate(''))
// console.log(state.getExchangeRate())

/*
  Com a declaração de uma IIFE, agora podemos inserir código dentro dela que 
  verifica se o objeto que ela irá retornar é realmente o que desejamos, com 
  isso podemos evitar a reatribuição de valor ao objeto caso ele não corresponda 
  ao desejado.
*/

/*

  * estudar mais sobre :

  iife
  https://developer.mozilla.org/en-US/docs/Glossary/IIFE
  
  this
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

  estado
  https://www.freecodecamp.org/news/state-in-javascript-explained-by-cooking-a-simple-meal-2baf10a787ee/

  call()
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

  closures
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
  
  aplly()
  bind()
  Object.create()
  getPrototypeOf()
  isPrototypeOf()
  getOwnPropertyDescriptors()
  Object.freeze()
  Object.seal()
  Object.preventExtensions()
  hasOwnProperty()
  
*/
