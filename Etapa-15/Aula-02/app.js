/*
=============== FUNÇÕES CONSTRUTORAS ===============

Relembrando que nós podemos declarar propriedades públicas sem usar o método 
constructor, mas isso nos impediria de atribuir os parâmetros do objeto passado 
como argumento da invocação da classe. Por isso precisamos do constructor, para 
recebermos as propriedades como parâmetro.

Diferente de outras linguagens, em javscript, tecnicamente não existem classes, 
elas são apenas um sintax sugar, ou seja, uma abstração que é um processo de 
ocultar certos detalhes de implementação e expor outros para que através de um 
código mais simples possamos lidar com estruturas mais complexas. O async/await 
é um exemplo de abstração de promises.

Então o que as classes abstraem? A classe em javascript é uma função construtora. 
Todo função construtora precisa ser uma function declaration, isso porque quando 
são criadas com arrow function, um typeError será gerado informando que a função 
não é construtora. Isso porque o this dentro de uma arrow function não referencia 
o objeto que está sendo criado e sim o this do escopo em que a arrow function foi 
declarada. Por isso não declaramos funções construtoras com arrow function.

Portanto, por baixo dos panos o que a declaração de uma classe faz é criar uma 
função construtora para gerar e setar um objeto, portando, a classe é uma abstração 
de uma função construtora. Dentro da função construtora não precisamos do método 
constructor, diferente da classe.

Intuitivamente também declararíamos os métodos dentro da função construtora, 
semelhante a Class, no entanto essa não é uma boa prática e mais a frente veremos 
como resolver.

* Na maioria das vezes, quando nos depararmos com códigos usando funções construtoras, 
os métodos provavelmente estarão sendo usados com function declarations e não arrow 
functions, isso porque provavelmente o arrow function é mais recente e não funciona 
em browsers mais antigos, portanto os desenvolvedores deixam com function declaration 
para não quebrar o código para browsers antigos.

*/

class Student {
  constructor (name, email) {
    this.name = name
    this.email = email
  }

  myFunc = () => this // arrow function referencia objeto do escopo onde foi declarada / Objeto Student
}

// função construtora
function Student (name, email) {
  this.name = name // referencia objeto criado / Student
  this.email = email // referencia objeto criado / Student

  setTimeout(() => { // arrow function
    console.log(this) // referencia objeto do escopo onde foi declarada / Objeto Student
  }, 1000)

  this.login = function () { // método declarado dentro da função construtora / isso não é bom / função anônima
    return `${this.name} logou na aplicação.`
  }
}

// arrow function como função construtora / está errado, não referencia o objeto Student
const Student = (name, email) => {
  this.name = name // referencia objeto do escopo onde foi declarada / Objeto Window
  this.email = email // referencia objeto do escopo onde foi declarada / Objeto Window
}

const roger = new Student('Roger Santos', 'roger.santos36@gmail.com')

/*
=============== PROTOTYPES ===============

Como vimos no exemplo anterior, declarar métodos dentro de funções construtoras 
não é bom para a performance da aplicação, isso porque quando adicionamos métodos 
dentro de uma função construtora, esse método será declarado em cada novo objeto 
que a função construtora criar. Mesmo que os métodos sejam idênticos, eles irão 
ocupar dois espaços diferentes na memória, pois cada um vai ocupar um espaço 
diferente para cada objeto criado. Com isso a aplicação irá consumir mais memória 
do que necessário. Mas existe uma forma de evitar isso.

Em javascript todo novo objeto que é criado herda propriedades e métodos do 
seu prototype, que é um objeto do qual um novo objeto que você criou vai herdar 
as propriedades e métodos, ou seja, é o objeto que armazena as propriedades e 
métodos que são herdados pelo novo objeto que criarmos.

Perceba que um array possui apenas algumas propriedades, mas como conseguimos 
acessar o método 'includes' dele ? Isso porque o método 'includes' existe dentro 
da propriedade prototype e quando invocamos esse método no array, ele verifica 
se esse método existe no array, se nao existir a engine do JS vai procurar 
automaticamente dentro da propriedade prototype do array.

Agora, repare que métodos declarados dentro de uma função construtora são 
armazenados no próprio objeto, ou seja, o método está junto com as propriedades. 
E isso acontecerá para cada objeto criado e mesmo sendo iguais estão em espaços 
diferentes na memória, por esse motivo não devemos declarar métodos dentro da 
função construtora, pois cada objeto terá o mesmo método consumindo mémória.

Para evitarmos isso é possível declararmos o método uma vez, armazenarmos ele 
em apenas um espaço na memória e fazer com que todos os objetos que sejam criados 
pela função construtora consiga acesar o método através da referência dele. Para 
isso temos que armazená-lo dentro da propriedade prototype do objeto, com isso 
todo objeto criado vai herdar o mesmo método existente que está num espaço da 
memória, sem a necessidade de criar um para cara objeto criado.

Vale lembrar que cada tipo de objeto contém um prototype, as vezes com métodos e 
propriedades diferentes para aquele tipo de objeto. Mas não significa que o 
prototype é criado para cada tipo de objeto, na verdade o prototype é um objeto 
único, nativo da linguagem que é referenciado quando é criado um novo objeto. 
Isso significa que se tivermos dois arrays diferentes na memória, eles estarão 
apontando para o mesmo prototype do objeto Array na memória, isso diminui o 
consumo de memória. Portanto cada tipo de objeto tem seus métodos armazenados no 
seu prototype. Portanto, os prototypes dos objetos já existem no JS, eles não 
são criados, mas apenas referenciados.

Faremos isso com a nossa função construtora, vamos adicionar os métodos dentro do 
prototype do objeto criado, invés de adicionar dentro da própria função construtora.

A propriedade prototype é tanto um getter quanto setter, ou seja, nós conseguimos 
obter dados dele e também conseguimos inserir dados nele.

*/

function Student (name, email) { // função construtora
  this.name = name
  this.email = email
}

Student.prototype.login = function () { // setando método no prototype de Student / setter / função anônima
  return `${this.name} fez login.`
}

Student.prototype.comment = function () { // setando método no prototype de Student / setter / função anônima
  return `${this.name} comentou no post`
}

const roger = new Student('Roger Santos', 'roger.santos36@gmail.com')
const alessandra = new Student('Alessandra Carvalho', 'alessandra.pigmentar@gmail.com')

[].includes() === [].__prototype__.includes() // true
Array1.__prototype__ === Array2.__prototype__ // true

roger.login === alessandra.login // true
roger.comment === alessandra.comment // true
// método login e comment dentro do prototype de cada objeto
// referenciando o mesmo método na memória

/*

  Pode ter surgido a seguinte dúvida: Você deve ter reparado que para declararmos 
  os métodos dentro da propriedade prototype nós temos que declarar fora da 
  função construtora, sendo assim, quando trabalhando com classes, também é 
  necessário fazer isso, certo? Não!

  Quando estamos trabalhando com classes, os métodos declarados dentro da classe 
  são automaticamente inseridos dentro do prototype do objeto sem precisarmos 
  declarar diretamente os métodos no prototype. Por isso classes são uma abstração 
  de funções construtoras, com classes nós termos menos trabalho do que usando 
  funções construtoras diretamente.

*/

class Student {
  constructor (name, email) {
    this.name = name
    this.email = email
  }

  comment () { // setado dentro do prototype de Student automaticamente
    return `${this.name} comentou`
  }
}

/*

  Agora, quando não declaramos um método de uma função construtora dentro de um 
  prototype e sim diretamente na função construtora, esse método será chamado de 
  método estático, ou seja, ele é invocado a partir do construtor do objeto e não 
  a partir de uma referência dentro do prototype.

  O método estático será útil quando precisarmos declarar um método utilitário,
  que é um método que pode ser útil em situações frequentes na aplicação. Por 
  exemplo, o método from() de Array é um método estático.

*/

// método estático, ou seja, sendo inserido dentro da função construtora
Student.formatToDatabase = function (aString) { // function declaration anônima
  return aString
    .toUpperCase()
    .replaceAll(' ', '_')
}

/*

  O método estático não é visível nem dentro do objeto e nem dentro da propriedade 
  prototype, apenas na função construtora. Para visualizarmos ele na função com 
  sintaxe de objeto, podemos usar o método 'dir' do console.

  Agora, nós também podemos declarar um método estático dentro de uma classe, 
  para isso usamos a notação 'static' para informar que será um método desse tipo.

*/

class Student {
  constructor (name, email) {
    this.name = name
    this.email = email
  }

  comment () { // setado dentro do prototype de Student automaticamente
    return `${this.name} comentou`
  }

  static formatToDatabase (aString) { // método estático / function declaration com nome
    return aString
      .toUpperCase()
      .replaceAll(' ', '_')
  }
}

/*
 
  Perceba que, quando visualizamos esse método estático dentro da classe ele 
  possui uma propriedade 'name' que armazena o nome do método, mas quando se 
  é com a função construtora, essa propriedade 'name' armazena uma string vazia, 
  isso porque, quando declaramos um método estático com abreviação de function 
  declaration, como fizemos dentro da classe, a propriedade 'name' recebe o nome 
  do método que foi declarado.

  Mas quando declaramos o método estático com a sintaxe de function declaration 
  completa, ou seja, anônima, estamos explicitando que a função não constém nome.

  Isso é problemático porque um erro envolvendo uma função anônima pode retornar 
  uma string em branco como nome da função. Mesmo que o erro indique a linha que 
  onde ele ocorreu, não existe justificativa para trabalhar com function declaration 
  anônima, a não ser que ela seja atribuída para uma const ou let, pois quando 
  declaramos uma função anônima com const ou let, seu nome é atribuído normalmente.

  Método usando function declaration anônima não é recomendado!

*/

Student.formatToDatabase = function (aString) { // function declaration anônima / não recomendado
  // ...
}

Student.formatToDatabase = function formatToDatabase (aString) { // function declaration com nome / recomendado
  // ...
}

/*

  Apesar disso tudo, métodos estáticos podem ser substituídos por simples funções,
  o que é particularmente mais simples e claro do que classes, métodos estáticos 
  e outras features da orientação a objetos.

*/

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

No entanto, isso não é um suficiente, pois precisaremos fazer com que o this da 
função construtora (pai) seja o mesmo this da função construtora (filha), pois 
se não fizermos isso, o this da função construtora (filha) irá referenciar o novo 
objeto criado e não queremos isso, queremos referenciar o pai. Para isso precisamos 
passar como argumentos do método call o this da função filho que é o próprio objeto 
criado por ela. Agora o this da função pai será o objeto da função filha.

Portanto, usamos o call() para invocar uma determinada função construtora e forçar
que o this dessa função invocada armazene o valor que quisermos que ele armazene.

Mas ainda não é só isso, o método call() pode receber também, depois do primeiro 
método, os valores que a função pai pode receber como parâmetros

Agora, para inserirmos propriedades únicas para a função construtora filha, é só 
declararmos normalmente abaixo da invocação da call(). A classe pai não receberá 
essas propriedades, serão exclusivas da classe filha. E para passarmos métodos 
únicas, passamos dentro do prototype da função.

Para herdarmos os métodos da função pai que se encontram dentro do prototype desse 
objeto, devemos invocar o método Object.create(), ele irá fazer com que as propriedades 
do prototype do objeto passado como argumento seja inserido dentro do prototype 
do objeto desejado.

Essa cadeia de prototypes é o que faz com que um objeto possa acessar propriedades 
de qualquer outro objeto que esteja nessa cadeira. Essa é a forma com que o JS 
faz herança e essa é a forma que o diferencia de linguagens em que a herança é 
baseada em classes. Essa cadeia de protótipos que entram em ação quando usamos 
a palavra chave 'class' e criamos uma subclasse com 'extends'.

*/

// função construtora
function Aluno (name, email) {
  this.name = name
  this.email = email
  // depois da invocação da call(), esse this passa a ser o TeacherAssistant
}

Aluno.prototype.login = function () {
  return `${this.name} fez login.`
}

Aluno.prototype.comment = function () {
  return `${this.name} comentou no post`
}

// trabalhando com herença em funções construtoras
function TeacherAssistant (name, email, scheduleWeekPosts) {
  // invocando construtor Aluno
  // forçando Aluno a armazenar o objeto TeacherAssistant dentro do this
  Aluno.call(this, name, email) // this = TeacherAssistant e parâmetros para Aluno
  this.scheduleWeekPosts = scheduleWeekPosts
}

// criando novo objeto com as propriedades do prototype do objeto Aluno 
// e inserindo dentro do prototype do objeto TeacherAssistant
// TeacherAssistant agora terá acesso aos métodos que estão dentro do prototype de Aluno
TeacherAssistant.prototype.Object.create(Aluno.prototype)

// método exlusivo de TeacherAssistant
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
  prototipas, pois ainda existem códigos usando essas features.

  Usaremos classes quando precisarmos fazer herança, o que pode ser algo raro, 
  quando estivermos desenvolvendo uma biblioteca ou quando precisarmos economizar 
  uma quantidade muito baixa de memória, o que não faz muito sentido.
*/