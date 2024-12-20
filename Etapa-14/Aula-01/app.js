/*

==== GLOSSÁRIO ================================================================

- imutabilidade / mutabilidade
- efeito colateral
- spread operator
- return early / optional chaining

===============================================================================


=============== SPREAD OPERATOR ===============

O spread operator espalha os elementos de um objeto ou array em outro local.
Ele cria uma cópia para o novo local, ou seja, são armazenadas em posições 
diferentes na memória, portanto não estão ligados por referência, são cópias 
independentes.

Vale lembrar que o spread operator realiza uma 'cópia rasa' ou seja, se o valor 
de uma propriedade do objeto original é também um objeto, a propriedade do clone 
irá referenciar (apontar) para o objeto original. Ou seja, se o objeto copiado 
tiver dentro dele outros objetos aninhados, esse objetos aninhados também devem 
ser feito o 'spread operator' para que sejam copiados, pois mesmo aninhados 
eles continuarão sendo uma referência do objeto original.

Portanto, o spread copia normalmente as propriedades do objeto, mas se uma dessas 
propriedades forem algum outro objeto, aí a cópia não será feita, mas sim será 
referenciado, sendo apontado para o mesmo local na memória. Isso porque objetos 
aninhados ao invés de serem copiados, são referenciados. E para realizarmos uma 
cópia dessa propriedade que é um objeto, devemos criar o novo objeto e novamente 
inserir o spread operator. Isso porque o spread operator realiza a cópia apenas 
na 'primeira camada', e não nos objetos aninhados.

Então para de fato clonarmos objetos mesmo que eles tenham objetos aninhados, 
devemos criar um novo objeto com todas as propriedades do objeto original, 
utilizando 'spread operator', em seguida sobrescrevemos a propriedade que contém 
um objeto aninhado e atribuímos para ela um novo objeto e espalhamos as propriedades 
do objeto aninhado dentro desse novo objeto também. Veja o exemplo para ficar mais 
claro.

Arrays aninhados também são referenciados, porque arrays também são objetos.
Portanto, caso haja um array no objeto também devemos espalhar os seus elementos 
para evitarmos uma referência e obter uma cópia. Isso vale para funções também, 
como elas são objetos, quando espalhamos as propriedades, elas também serão 
referenciadas, então procure reatribuir também a propriedade que contém uma função.

Valores que não são primitivos, então são objetos: objetos, arrays, funções...
Portanto, funções também não são copiadas e sim referenciadas, porque também 
são objetos.

Para visualizarmos um elemento como objeto, podemos inserir a palavra chave 'dir' 
na invocação do console, isso mostrará a sua forma de objeto.

console.dir(elemento)

*/

const objeto = {
  // objeto
  prop0: () => {}, // função / objeto
  prop1: "a",
  prop2: "b",
  prop3: { a: "x", b: "y", c: "z" }, // objeto
  prop4: [1, { x: 2, y: 3 }], // array / objeto + objeto
};

// lembrando que array é também um objeto: array = objeto

const objetoCopia = {
  ...objeto, // espalhando todas as propriedades / criando cópia do objeto acima
  prop0: () => {}, // cópia da função e não referência / deve-se reescrever a função
  prop3: {
    // sobrescrevendo prop3
    ...objeto.prop3, // espalhando propriedades para criar cópia e não referência
  },
  prop4: [
    // sobreescrevendo prop4
    objeto.prop4[0],
    { ...objeto.prop4[1] }, // criando cópia de objeto dentro do array
  ],
};

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArray = [...arr1, ...arr2];

// repare que o spread operator é uma forma mais moderna de concatenar arrays
// no ES5 usávamos o método concat()

/*

  Efeito colateral é qualquer mudança de estado que pode ser percebida do lado 
  de fora de uma função e que não é um valor retornado pela função. São ações 
  que vão além do cálculo e retorno de um valor pela função. No paradigma 
  funcional, evite efeitos colaterais, pois eles podem tornar o código mais 
  difícil de entender, testar e depura, ou seja, no paradigma funciona, procure 
  escrever funções que retornam um valor.

  Efeitos colaterais podem incluir alterações em variáveis globais, modificações 
  no estado do documento html ou do navegador, requisições de rede, manipulação 
  de arquivos, interação com o ambiente externo, modificar alguma variável ou 
  propriedade de objeto que está do lado de fora de uma função, logar no console,
  manipular o DOM...

  O objetivo de evitar efeitos colaterais é construir funções puras, que dependem 
  apenas de seus argumentos de entrada e retornam resultados calculados sem 
  modificar o estado externo. Tornando o código mais previsível, modular e seguro.

  Claro que nem sempre é possível evitar os efeitos colaterais, mas procure 
  minimizá-los e controlá-los, isolando-os em partes específicas do código 
  quando necessário.

  artigos:

  https://javascript.plainenglish.io/how-to-avoid-side-effects-using-pure-functions-in-javascript-366acaafb60c#:~:text=How%20do%20we%20avoid%20side,requirements%20of%20a%20quality%20function.
  https://blog.greenroots.info/what-are-pure-functions-and-side-effects-in-javascript
  https://davidwalsh.name/preventing-sideeffects-javascript

  // =============== MAIS SOBRE SPREAD OPERATOR ===============

  Repare que o spread operator basicamente 'concatena' os itens do array ou 
  objeto, semelhante ao método 'concat'. Vale lembrar que o 'concat' é um método 
  antigo do JS e o spread operator veio numa versão mais recente. 
  
  Object.assign() é um método que realiza a mesma operação que o spread operator, 
  ele faz uma cópia rasa das propriedades do objeto. Deve receber no mínimo dois 
  argumentos, o primeiro é o objeto que irá receber as cópias das propriedades e
  os outros argumentos são os objetos que terão suas propriedades atribuídas ao 
  novo objeto.
*/

const obj1 = { prop1: 1, prop2: 2 };
const obj2 = { pro3: 3, prop4: 4 };

const obj3 = Object.assign({}, obj1, obj2); // essa operação gera
const obj3 = { ...obj1, ...obj2 }; // o mesmo resultado que essa

/*
  Surge uma dúvida sobre a diferença entre as duas abordagens, já que estão 
  fazendo a mesma coisa, criando uma cópia rasa dos objetos. A primeira diferença 
  perceptível é a legibildiade, veja que o spread operator, mesmo se não soubermos 
  o que ele faz, fica mais explícito sabermos o que está acontecendo, já o 
  Object.assign() não deixa muito claro o que está acontecendo na operação.

  Outra fator é que o spread operator necessariamente cria um novo objeto, o que é 
  bom, pois estamos criando um novo ao invés de modificar um já existente, isso 
  é chamado de imutabilidade, um conceito fundamental na programação funcional. E 
  repare que, no exemplo do Object.assign() também estamos criando um novo objeto 
  mas isso não necessariamente é uma regra, pois podemos inserir num objeto já 
  existente as propriedades de outros.

  Isso irá modificar diretamente o objeto já existente, o que talvez não seja a 
  intenção em determinados momentos.
*/

const obj4 = Object.assign(obj1, obj2); // inserindo num objeto já existente

/*
  =============== USANDO SPREAD OPERATOR EM STRINGS E FUNÇÕES ===============
  
  Uma característica do spread operator é que quando estamos espalhando seus itens,
  o spread operator geralmente precisa ser espalhado em locais em que ele seja 
  esperado, ou seja, dentro de arrays, objetos, argumentos de funções, etc, não 
  conseguimos espalhar os itens através do spread operator em qualquer local que 
  quisermos.

  Se a quantidade de elementos espalhados como argumento de uma função não 
  corresponder a quantidade de parâmetros da mesma, os itens que sobrarem serão 
  ignorados e receberão 'undefined'.

  Existem métodos que só podem receber números como argumentos, mas é possível 
  inserir um array passando o spread operator como argumento dessa função, 
  isso nos permite inserir arrays em métodos que só aceitam números. Veja:
*/

const numbers = [1, 2, 3, 4, 5];

Math.min(numbers); // NaN, porque é array e esse método só aceita números

Math.min(...numbers); // espalhando os itens do array com spread operator
Math.max(...numbers); //

/*
  =============== EXPRESSÕES E INSTRUÇÕES ===============
  
  Diferente de um statement (instrução/declaração), expressão é um pedaço de 
  código que resulta em um valor, ela pode ser inserida em qualquer lugar do 
  código em que um valor é esperado. 1 + 1 = 2, typeof 'oi' === string ou um 
  operador ternário, são exemplos de expressões que retornam um valor.

  Uma instrução é um pedaço de código que não resulta em um valor. A declaração 
  de if else, switch ou for loop são exemplos de instruções que não retornam 
  um valor. Por isso não conseguimos declarar um if como argumento de uma função.

  Em javascript todo pedaço de código que não resulta em um valor, retorna 
  undefined.

  Evite o uso de ternário quando você não estiver aproveitando o valor retornado 
  por ele, se você quer usar ternário apenas para executar uma ação da sua 
  condicional e não vai usar o valor que ele retorna, então EVITE usá-lo. Visto 
  que o ternário sempre retornará um valor, se 'true' à esquerda dos dois pontos e 
  se 'false' à direita dos dois pontos.

  Se não aproveitamos o valor que o ternário retorna, não faz sentido usá-lo, 
  portanto devemos usar ternário quando baseado numa condição precisamos obter 
  o valor retornado pelo mesmo e não apenas executar a sua condicional.

  [ ] - Imutabilidade
  [ ] - Mutabilidade
  [ ] - return early
  [ ] - efeito colateral
  [ ] - nullish coalescing operator

  const to = promise => promise
    .then(result => [null, result])
    .catch(error => [error])

  o código acima é a mesma coisa que escrever um try catch! Pesquisar sobre!

*/
