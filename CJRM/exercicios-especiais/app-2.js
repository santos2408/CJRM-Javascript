/*
  Olá, boa tarde!
  Precisamos criar uma variável nova que tenha o valor total dos produtos do 
  carrinho e se o frete é grátis (para compras acima de 300 reais). Essa variável 
  será chamada de cartPricesInfo.

  Além disso, na nossa página de carrinho atualmente, a variável "totalPrice" 
  se encontra com o valor 'undefined' independente da situação. Precisamos que 
  vocês atualizem ela com o valor total dos produtos do carrinho. E também 
  precisamos que a variável 'freeShipping' tenha o valor 'true' caso frete seja 
  gratuito.
  
  Um colega te alertou de que por padronizações internas do time de tags nesse 
  tipo de situação utilizamos normalmente o método 'reduce'. Além disso, disse 
  que você deve fazer uma função que retorna os dois valores ('totalPrice' e 
  freeShipping') para depois atribuí-los nas variáveis. 
*/

var cart_products = [{
  'product_id': 'IN2350',
  'product_name': 'Teclado Mecânico Roza K600',
  'product_price': '650.00',
  'product_quantity': '1',
  'product_category': 'peripherals',
  'product_brand': 'Rozar'
}, {
  'product_id': 'IN4566',
  'product_name': 'Monitor Gamer LED GL',
  'product_price': '1399.99',
  'product_quantity': '1',
  'product_category': 'monitor',
  'product_brand': 'GL'
}, {
  'product_id': 'ES7112',
  'product_name': 'Pacote de Post-it Fenix 50 Unidades',
  'product_price': '14.95',
  'product_quantity': '5',
  'product_category': 'office',
  'product_brand': 'Fenix'
}]

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

[2,7,11,15]
9
[3,2,4]
6
[3,3]

*/

// Given the head of a singly linked list, return true if it is a palindrome.

var isPalindrome = function(head) {

};

/*
- Descomente a div com a class "intro", no index.html;
  - O desafio neste exercício é implementar um "efeito digitação", como o deste
    exemplo: https://youtu.be/_bVIHj3uX6k;

  Abaixo tem o passo a passo de uma das formas de fazer. Siga-o, caso tenha
  dificuldades.

  - Declare um array "messages". Cada item desse array é uma string que será 
    "digitada" na tela. Exemplos: 'sou fluente em JS', 'construo aplicações web
    com JS puro';
  - Abaixo do array, declare as seguintes lets:
    - messageIndex, iniciando em 0. Essa let é responsável por armazenar qual é
      o index do item atual do array messages;
    - characterIndex, iniciando em 0. Essa let é responsável por armazenar qual
      é o index do caractere atual do item do array messages;
    - currentMessage, iniciando com string vazia. Essa let é responsável por 
      armazenar o item atual do array;
    - currentCharacters, iniciando com string vazia. Essa let é responsável por
      armazenar as letras do item do array que serão inseridas na tela;
  - Abaixo das lets, declare uma função "type";
  - Abaixo da função, invoque um setInterval que invoca a função type a cada 
    200 milisegundos;
  - Dentro da função "type":
    - Declare um if que verifica se messageIndex é igual a quantidade total de
      itens do array messages. Se essa condição for verdadeira, messageIndex 
      deve receber 0;
    - Abaixo do if, faça:
      - currentMessage receber o item do array messages que está no index que 
        messageIndex armazena;
      - currentCharacters receber a string que deve ser exibida na execução 
        atual da função (você pode invocar o slice() na currentMessage para 
        fazer isso);
      - characterIndex receber o valor que ela já tem + 1;
      - O h1 com o data-js "typing" receber currentCharacters;
    - Após inserir as atribuições acima, declare um if que verifica se 
      currentCharacters tem a mesma quantidade de caracteres de currentMessage.
      Se essa condição for verdadeira, faça messageIndex receber o valor que 
      ela já tem + 1 e faça characterIndex receber 0.
*/

/*
  06

  - Converta o array "wrongDataFormat" para o objeto do comentário abaixo.
*/

const wrongDataFormat = [
  'preto-PP',
  'preto-M',
  'preto-G',
  'preto-GG',
  'preto-GG',
  'branco-PP',
  'branco-G',
  'vermelho-M',
  'azul-XG',
  'azul-XG',
  'azul-XG',
  'azul-P'
]

/*
  {
    preto: {
      PP: 1,
      M: 1,
      G: 1,
      GG: 2
    },
    branco: {
      PP: 1,
      G: 1
    },
    vermelho: {
      M: 1
    },
    azul: {
      XG: 3,
      P: 1
    }
  }
*/

/*
  07

  - Através do array abaixo, gere um objeto com a frequência de idades das 
    pessoas;
  - Ou seja, se o array contém 3 pessoas com 18 anos, o objeto gerado deve ter 
    uma propriedade 18 com o valor 3, se o array contém 2 pessoas com 19 anos,
    o objeto gerado deve ter uma propriedade 19 com o valor 2 e assim por 
    diante.
  
  Resultado desejado: { 18: 3, 19: 2, 20: 1 }

  Dica: pesquise por Computed Property Names.
*/

const people = [
  { id: 5 , name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
  { id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
  { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas' },
  { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
  { id: 9 , name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
  { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília' }
]