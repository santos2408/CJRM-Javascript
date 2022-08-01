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

var twoSum = function(nums, target) {
  let newArray = []

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        newArray.push(i, j)
      }
    }
  }

  return newArray
};

twoSum([2,7,11,15], 13)