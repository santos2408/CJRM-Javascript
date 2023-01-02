// ===== ARROW FUNCTIONS ================================

/*

   São uma das adições do Javascript moderno, um dos motivos para a sua adição
   na linguagem é para que se tenha uma forma mais curta e concisa para
   implementar funções, economizando muitas linhas de código em aplicações
   maiores.

   Quando uma arrow function tiver apenas um parâmetro, os parênteses desse
   parâmetro serão opcionais. Mas se você quiser incluir um valor padrão para
   esse parâmetro, então os parênteses terão que ser incluídos. Se a função
   não receber parâmetro, deixe apenas os parênteses vazios.

   Além disso, caso o bloco de código dessa função estiver contendo apenas
   uma linha retornando uma expressão, é possível remover as chaves do bloco e a
   palavra chave return e deixar a arrow function apenas com uma linha.
   O javascript entenderá o código e retornará o valor da função implicitamente.

   O valor retornado pode ser uma string, array, boolean, número, expressões,
   como as funções anteriores. Mas não tem como retornar de uma função um bloco
   de código como um if ou switch ou algo do tipo, pois não são valores, assim 
   como mais de um valor, mas para contornar isso podemos retornar vários valores 
   armazenados num objeto ou array.

   Outra diferença entre arrow functions e funções tradicionais é o binding
   da palavra this que será abordado em aulas posteriores.

*/

// function declaration
function double (number) {
   return number * 2
}

// function expression
const double = function (number) {
   return number * 2
}

// ====== arrow function ======

// forma completa
const double = (number) => {
   return number * 2
}

// forma simplificada
const double = number => number * 2


const result = double(3)
console.log(`O resultado é: ${result}`)

// ===== DIFERENÇA DE MÉTODO E FUNÇÃO ================================

/*
   Funções e métodos são sinônimos, em essência realizam a mesma coisa, é
   possível invocá-las para executar um bloco de código que realiza alguma coisa.
   A diferença entra elas é sua forma de invocação e onde é declarada.
*/

const name = 'Roger'

// funções
const sayHi = () => 'Oi'

const greet = sayHi()
console.log(greet)

//Para invocarmos uma função, nós declaramos o nome da função seguido de parênteses.

/*
   ===== MÉTODOS =====

   Para invocarmos um método, utiliza-se a mesma invocação de uma função,
   no entanto o método deve vir precedido de um ponto e deve ser referenciado
   algum valor.

   Métodos são funções que estão associadas a objetos ou tipo de dados,
   os métodos são criados dentro de um objeto ou tipo de dado.
*/

// ===== callbacks e forEach ================================

/*
   É possível também inserir uma função como argumento, essa operação
   é chamada de função de callback ou apenas callback.
*/

// === callbacks ===
const myFunc = callback => {
   const value = 77

   callback(value)
}

myFunc(number => {
   console.log(number)
})

myFunc2(() => {})

// === forEach ===
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

// callback interno
socialNetworks.forEach((socialNetwork, index, array) => {
   console.log(index, socialNetwork, array)
})

// callback externo
const logArrayInfo = (socialNetwork, index, array) => {
   console.log(index, socialNetwork, array)
}

socialNetworks.forEach(logArrayInfo)
// não precisa de parênteses para executar a função
// a execução é implicita, é passada por referência
// os parâmetros estão sendo passados implicitamente

// ===== UTILIZANDO CALLBACKS ================================

const ul = document.querySelector('[data-js="ul"]')

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

let HTMLTemplate = ''

socialNetworks.forEach(socialNetwork => {
   HTMLTemplate += `<li style="color: deeppink;">${socialNetwork}</li>`
})

ul.innerHTML = HTMLTemplate

/*
================================================================================
============================== CONTEÚDO ADICIONAL ==============================

================ IIFE - IMMEDIATLY INVOKED FUNCTION EXPRESSION =================

Function expressions invocadas imediatamente após sua declaração é uma forma de 
proteger o código para que ele não fique exposto ao escopo global. Nós envolvemos 
a função entre parênteses e a invocamos ao mesmo tempo.

Mais sobre IIFE na Etapa-14 - Aula 03.02

*/

(function(parameter){
   console.log('Função invocada automaticamente.')
})()
