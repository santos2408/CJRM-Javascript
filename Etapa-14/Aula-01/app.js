/*
=============== SPREAD OPERATOR ===============

O spread operator espalhada os elementos de um objeto ou array em outro local.
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
um objeto aninhado e atribuímos para ela um novo objeto e espalhamos as propriedades 
do objeto aninhado dentro desse novo objeto. Veja o exemplo para ficar mais claro.

Arrays aninhados também são referenciados, porque arrays também são objetos.
Portanto, caso haja um array no objeto também devemos espalhar os seus elementos 
para evitarmos uma referência e obter um cópia.

Valores que não são primitivos, então são objetos: objetos, arrays, funções...
Portanto, funções também não sáo copiadas e sim referenciadas, porque também 
são objetos.

Para visualizarmos um elemento como objto, podemos inserir a palavra chave 'dir' 
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
  ...objeto, // espahando todas as propriedades / criando cópia
  prop0: () => {}, // cópia da função e não referência
  prop3: { // sobrescrevendo prop3
    ...objeto.prop3 // espalhando propriedades para criar cópia e não referência
  },
  prop4: [
    objeto.prop4[0],
    { ...objeto.prop4[1] } // criando cópia de array e objeto
  ]
}

/*

  EFEITO COLATERAL É QUALQUER MUDANÇA DE ESTADO QUE PODE SER PERCEBIDA DO LADO 
  DE FORA DE UMA FUNÇÃO E QUE NÃO É UM VALOR RETORNADO PELA FUNÇÃO.

  EXEMPLO: MODIFICAR ALGUMA VARIÁVEL OU PROPRIEDADE DE OBJETO QUE ESTÁ DO LADO 
  DE FORA DE UMA FUNÇÃO. LOGAR NO CONSOLE. MANIPULAR O DOM.

*/