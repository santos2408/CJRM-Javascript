/* 

=============== HERANÇA PROTOTIPAL ===============

Agora veremos como acontece a verdadeira herança do javascript, é necessário
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
passar como argumentos do método call o this da função filha que é o próprio objeto 
criado por ela. Agora o this da função pai será o objeto da função filha.

Portanto, usamos o call() para invocar uma determinada função construtora e forçar
que o this dessa função invocada armazene o valor que quisermos que ele armazene.

Mas ainda não é só isso, o método call() pode receber também, depois do primeiro 
método, os valores que a função pai pode receber como parâmetros

Agora, para inserirmos propriedades únicas para a função construtora filha, é só 
declararmos normalmente abaixo da invocação da call(). A classe pai não receberá 
essas propriedades, serão exclusivas da classe filha. E para passarmos métodos 
únicos, passamos dentro do prototype da função.

Para herdarmos os métodos da função pai que se encontram dentro do prototype desse 
objeto, devemos invocar o método Object.create(), ele irá fazer com que as propriedades 
do prototype do objeto passado como argumento seja inserido dentro do prototype 
do objeto desejado. Isso irá criar uma cadeia de prototypes em que os objetos 
poderão acessar os métodos de outros objetos.

Essa cadeia de prototypes é o que faz com que um objeto possa acessar propriedades 
de qualquer outro objeto que esteja nessa cadeia. Essa é a forma com que o JS 
faz herança e essa é a forma que o diferencia de linguagens em que a herança é 
baseada em classes. É essa cadeia de protótipos que entram em ação quando usamos 
a palavra chave 'class' e criamos uma subclasse com 'extends'.

*/

// função construtora
function Aluno (name, email) {
  this.name = name
  this.email = email
  // depois da invocação da call(), esse this passa a ser o TeacherAssistant
}

Aluno.prototype.login = function login () {
  return `${this.name} fez login.`
}

Aluno.prototype.comment = function comment () {
  return `${this.name} comentou no post`
}

// trabalhando com herença em funções construtoras
function TeacherAssistant (name, email, scheduleWeekPosts) {
  // invocando construtor Aluno e
  // forçando Aluno a armazenar o objeto TeacherAssistant dentro do this
  Aluno.call(this, name, email) // this = TeacherAssistant e parâmetros para Aluno
  this.scheduleWeekPosts = scheduleWeekPosts // propriedade única de TeacherAssistant
}

// criando novo objeto com as propriedades do prototype do objeto Aluno 
// e inserindo dentro do prototype do objeto TeacherAssistant
// TeacherAssistant agora terá acesso aos métodos que estão dentro do prototype de Aluno
TeacherAssistant.prototype.Object.create(Aluno.prototype)

// método exclusivo de TeacherAssistant
TeacherAssistant.prototype.giveBadge = function giveBadge ({ name }) {
  return `${this.name} deu uma medalha para ${name}`
}

const maria = new Aluno('Maria', 'maria@gmail.com')
const jose = new Aluno('Jose', 'jose@gmail.com')
const arthurSouza = new TeacherAssistant('Arthur Souza', 'arthursouza@rogermelo.com.br', false)

// console.log(maria, jose)
// console.log(arthurSouza.giveBadge(maria))

/*

  Quando precisaremos usar classes ou funções construtoras ? 

  Usaremos classes quando precisarmos criar objetos específicos que compartilham 
  métodos,  isso ajudará a economizar mémória. Além de serem mais simples do que 
  funções construtoras. As funções construtoras eram usadas antes da chegada das 
  classes, por isso é importante entendermos funções construtoras e herança 
  prototipais, pois ainda existem códigos usando essas features e sabendo como 
  funções construtoras funcionam, saberemos o que uma classe está fazendo por 
  baixo dos panos.

  Usaremos classes quando precisarmos fazer herança, o que pode ser algo raro, 
  quando estivermos desenvolvendo uma biblioteca ou quando precisarmos economizar 
  uma quantidade muito baixa de memória, o que não faz muito sentido.

*/

/*
  
=============== FACTORY FUNCTIONS E COMPOSIÇÃO DE OBJETOS ===============

Existe uma alternativa mais direta de se compor objetos em aplicações web com 
javascript puro, ela é chamada de factory functions. Uma factory function é 
qualquer função que não é uma classe, nem construtor, nem função construtora, mas 
retorna um novo objeto. Em JS qualquer função pode retornar um objeto.

Quando uma função retorna um objeto sem a necessidade de usar a palavra chave 
'new' antes da invocação dela, então ela é uma factory function. Com ela podemos 
criar e compor objetos na aplicação web com um código mais simples comparado a 
classes, constructors e new.

Com factory functions não precisamos nos preocupar com inserção de 'new', 'this' 
ou constructor. Pensando em código de larga escala, a compreesensão dele será 
mais fácil com factory functions do que classes.

Ainda conseguimos declarar propriedades privadas dentro de uma factory function. 
E mesmo que criemos várias objetos com base numa única função, o bloco dessa 
função será único para cada objeto criado, pois é aplicado o conceito de closures, 
que é a combinação de uma função com seu escopo léxico, que é todo escopo que 
envolve a declaração da função.

Você pode optar por trabalhar com classes ou factory functions. Dê preferência 
para factory functions. Classes são mais inflexíveis, ao contrário de factory 
functions.

Uma das vantagens da factory functions, é que ao invés de o 'this' referenciar o 
objeto que está sendo criado, ele irá referenciar quem ele tiver que referenciar. 
Isso nos tenderá a escrever menos 'this', o que o tornará menos previsível.

*/

// criando objeto user com classe
class User {
  #counter = 0 // propriedade privada

  constructor (name, email) {
    this.name = name
    this.email = email
  }

  incrementCounter () {
    return ++this.#counter
  }
}

// criando objeto user com factory function
const createUser = (name, email) => { // escopo léxico
  let counter = 0 // informação privada / só código interno acessa

  return { // retorna um objeto
    name,
    email,
    incrementCounter: () => ++counter // closure / combinação de uma função com seu escopo léxico
  }
}

const user = new User('Roger', 'roger.santos36@gmail.com')
const user2 = createUser('Roger', 'roger.santos36@gmail.com')
const user3 = createUser('Roger', 'roger.santos36@gmail.com')

/*
    repare que createUser está sendo invoado duas vezes para dois objetos 
    diferentes, no entanto estão sendo criadas dois objetos em espaços diferentes 
    na memória, portanto as variáveis de um objeto não são as mesmas do outro 
    objeto. Isso garante que cada user tenha as suas prórpias informações.
*/

console.log(user) // Objeto User
console.log(user.incrementCounter()) // Objeto User
console.log(user2) // Objeto 'createUser'
console.log(user2.incrementCounter()) // Objeto 'createUser'

/*

  Para obtermos o prototype de um objeto, não usamos mais a sintaxe 
  object.__prototype__. Agora usamos Object.getPrototypeOf('object')

  Para charcarmos sem o prototype de um objeto existe dentro prototype de um outro 
  objeto, usamos o método 'object1'.isPrototypeOf('object2')

  * estudar mais sobre o método call() e aplly()

*/