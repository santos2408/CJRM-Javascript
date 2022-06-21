/*
=============== SPREAD OPERATOR ===============

O spread operator espalha os elementos de um objeto ou array em outro local.
Ele cria uma cópia para o novo local, ou seja, são armazenadas em posições 
diferentes na memória, portanto não estão ligados por referência, são cópias 
independentes.

Vale lembrar que o spread operator realiza uma 'cópia rasa' ou seja, se o valor 
de uma propriedade do objeto original é um objeto, a propriedade do clone irá 
referenciar (apontar) o mesmo objeto.

Portanto, o spread copia normalmente as propriedades do objeto, mas se uma dessas 
propriedades forem algum outro objeto, aí a cópia não será feita, mas sim será 
referenciado, sendo apontado para o mesmo local na memória. Isso porque objetos 
aninhados ao invés de serem copiados, são referenciados.

Então para de fato clonarmos objetos mesmo que eles tenham objetos aninhados, 
devemos criar um novo objeto com todas as propriedades do objeto original, 
utilizando 'spread operator', em seguida sobrescrevemos a propriedade que contém 
um objeto aninhado e atribuímos para ela um novo objeto e espalharmos as propriedades 
do objeto aninhado dentro desse novo objeto. Veja o exemplo para ficar mais claro.

Arrays aninhados também são referenciados, porque arrays também são objetos.
Portanto, caso haja um array no objeto também devemos espalhar os seus elementos 
para evitarmos uma referência e obter um cópia.

Valores que não são primitivos, então são objetos: objetos, arrays, funções...
Portanto, funções também não sáo copiadas e sim referenciadas, porque também 
são objetos.

Para visualizarmos um elemento como objeto, podemos inserir a palavra chave 'dir' 
antes do elemento no console, isso irá mostrar a sua forma de objeto.

console.dir(input)

*/

const objeto = {
  prop0: () => {},
  prop1: 'a',
  prop2: 'b',
  prop3: { a: 'x', b: 'y', c: 'z' },
  prop4: [1, { x: 2, y: 3 }]
}

const objetoCopia = { 
  ...objeto, // espalhando todas as propriedades / criando cópia
  prop0: () => {}, // cópia da função e não referência
  prop3: { // sobrescrevendo prop3
    ...objeto.prop3 // espalhando propriedades para criar cópia e não referência
  },
  prop4: [
    objeto.prop4[0],
    { ...objeto.prop4[1] } // criando cópia de objeto dentro do array
  ]
}

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const newArray = [...arr1, ...arr2]

// repare que o spread opertator é uma forma mais moderna de concaternar array

/*

  EFEITO COLATERAL É QUALQUER MUDANÇA DE ESTADO QUE PODE SER PERCEBIDA DO LADO 
  DE FORA DE UMA FUNÇÃO E QUE NÃO É UM VALOR RETORNADO PELA FUNÇÃO.

  EXEMPLO: MODIFICAR ALGUMA VARIÁVEL OU PROPRIEDADE DE OBJETO QUE ESTÁ DO LADO 
  DE FORA DE UMA FUNÇÃO. LOGAR NO CONSOLE. MANIPULAR O DOM.

*/

// =============== MAIS SOBRE SPREAD OPERATOR ===============

/*
  Repare que o spread operator basicamente 'concatena' os itens do array ou 
  objeto, semelhante ao método 'concat'. Vale lembrar que o 'concat' é um método 
  antigo do JS e o spread operator veio numa versão mais recente. 
  
  Object.assign é um método que realiza a mesma operação que o spread operator, 
  ele faz uma cópia rasa das propriedades do objeto. Deve receber no mínimo dois 
  argumentos, o primeiro é o objeto que irá receber as cópias das propriedades e
  os outros argumentos são os objetos que terão suas propriedades atribuídas ao 
  novo objeto.
*/

const obj1 = { prop1: 1, prop2: 2 }
const obj2 = { pro3: 3, prop4: 4 }

const obj3 = Object.assign({}, obj1, obj2) // essa operação gera
const obj3 = { ...obj1, obj2 } // o mesmo resultado que essa

/*
  Surge uma dúvida sobre a diferença entre as duas abordagens, já que estão 
  fazendo a mesma coisa, criando uma cópia rasa dos objetos. A primeira diferença 
  perceptível é a legibildiade, veja que o spread operator, mesmo se não soubermos 
  o que ele faz, fica mais explícito sabermos o que está acontecendo, já o 
  Object.assign() não deixa muito claro o que está acontecendo na operação.

  Outra fator é que o spread operator necessariamente cria um novo objeto, o que é 
  bom, pois estamos criando um novo ao invés de modificar um já existente, e 
  repare que, no exemplo do Object.assign() também estamos criando um novo objeto 
  mas isso não necessariamente é uma regra, pois podemos inserir num objeto já 
  existente as propriedades de outro. 

  Isso irá modificar diretamente o objeto já existente, o que talvez não seja a 
  intenção em determinados momentos.
*/

const obj4 = Object.assign(obj1, obj2) // inserindo num objeto já existente

// =============== USANDO SPREAD OPERATOR EM STRINGS E FUNÇÕES ===============

/*
  Uma característica do spread operator é que quando estamos espalhando seus itens,
  o spread operator geralmente precisa ser espalhado em locais em que ele seja 
  esperado, ou seja, dentro de arrays, objetos, funções, não conseguimos espalhar 
  os itens através do spread operator em qualquer local que quisermos.

  Existem métodos que só podem receber números como argumentos, mas é possível 
  inserir um array passando o spread operator como argumento dessa função, 
  isso nos permite inserir arrays em métodos que só aceitam números. Veja:
*/

const numbers = [1, 2, 3, 4, 5]

Math.min(numbers) // NaN, porque é array e só aceita números 

Math.min(...numbers) // 1 / espalhando os itens do array com spread operator
Math.max(...numbers) // 5

/*
  =============== EXPRESSÕES E INSTRUÇÕES ===============
  
  Diferente de um statement (instrução), expressão é um pedaço de código que 
  resulta em um valor, ela pode ser inserida em qualquer lugar do código em que 
  um valor é esperado. 1 + 1 = 2, typeof 'oi' = string ou um operador ternário, 
  são exemplos de expressões que retornam um valor.

  Uma instrução é um pedaço de código que não resulta em um valor. A declaração 
  de if else, switch ou for loop são exemplos que instrução que não retornam 
  um valor. Por isso não conseguimos declarar um if como argumento de uma função.

  Em javascript todo pedaço de código que não resulta em um valor, retorna 
  undefined.
*/