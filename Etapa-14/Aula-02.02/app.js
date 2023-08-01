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
    this.count = 0 // propriedade pública
  }

  get value() {
    // método get usando sintaxe de abreviação
    return this.count
  }

  increment() {
    this.count++
  }

  set newValue(aNumber) {
    // método set usando sintaxe de abreviação
    this.count = aNumber
  }
}

const counter = new Counter()

counter.value // invocando método get usando sintaxe de propriedade
counter.newValue = 7 // setando um valor usando sintaxe de propriedade

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
  count = 0 // propriedade pública (public class fields)

  get value() {
    // método get usando sintaxe de abreviação
    return this.count
  }

  increment() {
    this.count++
  }

  set newValue(aNumber) {
    // método set usando sintaxe de abreviação
    this.count = aNumber
  }
}

const counter = new Counter()

counter.count = "Olá" // atribuindo string à count
console.log(counter.count) // acessando diretamente o valor da count

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

  Chamamos a declaração de propriedades privadas de 'private class fields', 
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
  #count = 0 // propriedade privada, precisa usar '#' (private class fields)

  constructor(value) {
    // atribuindo valor recebido por parâmetro na propriedade privada
    // pode usar o constructor normalmente
    this.#count = value
  }

  get value() {
    // método get usando sintaxe de abreviação
    return this.#count
  }

  increment() {
    this.#count++
  }

  set newValue(aNumber) {
    // método set usando sintaxe de abreviação
    this.#count = aNumber
  }
}

const counter = new Counter()

counter.#count = "Olá" // não tem permissão para modificar a propriedade
console.log(counter.count) // não tem permissão para acessar a propriedade

counter.newValue = 5 // modificando propriedades através do método que existe na classe
counter.value // acessando propriedade através do método que existe na classe

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
  Isso não significa que const's são imutáveis, mas quando usamos const no código, 
  usamos para indicar que não vamos mudar aquele valor, o valor dela permanecerá 
  o mesmo ao longo da aplicação.

  Fique atento para a mutabilidade de valores, se está recebendo valores em let's 
  que lá na frente irão ser modificadas, prefira armazenar o resultado das 
  modificações numa nova 'const' e não reatribuir para as lets existentes.

  Mesmo criando objetos, se você sabe que esse objeto irá ser modificado, recebendo 
  novos dados, procure declara-lo então como 'let' para indificar explicitamente 
  que as propriedades daquele objeto serão mutáveis.
*/
