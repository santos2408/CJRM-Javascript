/*
   ====== FUNÇÕES E MÉTODOS ================================

   Fazem parte do tipo Object, são um dos principais conceitos fundamentais
   de qualquer linguagem de programação. Seu papel principal é permitir que
   seja criado um bloco de código que possa ser invocado e executado quando
   quiser.

   Funções são blocos de código que executam determinada ação e que podem
   ser invocadas e executados a qualquer momento em qualquer lugar do código.
   Sua vantagem é que só precisa ser criada uma vez e pode ser executado a todo
   momento.

   É possível também passar valores para dentro de uma função, para que ela
   pegue esses valores e execute determinadas ações com esses valores passados.
   Após isso ela devolve os valores transformados (output)

   A função pode apenas executar uma ação desejada ou retornar um valor.

   * Tente sempre declarar funções logo acima de onde elas estão sendo invocadas
   * Procure nomear as funções com verbos, pois normalmente realizam uma ação
   * Tecla F2 altera o nome daquela variável em todo o documento relacionado JS
   * Tecla F12 localiza a outra ocorrência desse nome no documento JS
*/

// showMessage() -> invocação de função

/*
   ====== FUNCTION DECLARATION / COM HOISTING ======
   
   Para declarar uma função, inicia-se com a palavra chave 'function' seguido
   do nome da função e parênteses, após isso abre-se chaves(bloco) para a 
   declaração da função.

   A função é invocado inserindo o nome da mesma seguido de parênteses.

   'Function declaration' contém hoisting, ou seja, no momento da execução de todo
   o código, o JS irá içar a função para o topo do código. Portanto, independente
   da sua posição no código ela sempre será jogada pro topo, ou seja, é possível
   até mesmo invocá-la antes da sua declaração.

   Todo parâmetro da função por padrão recebe um valor undefined, mas é possível
   atribuir um valor padrão caso o parâmetro não receba nenhum valor de fora.
*/

// é possível invocá-la aqui também, antes da declaração, por causa do hoisting
sayHi()

// declaração da function declaration
function sayHi() {
   console.log('Olá')
}

// invocação da função
sayHi()

/*
   ====== FUNCTION EXPRESSION / SEM HOISTING ======

   'Function expression' acontece quando é atribuído uma função anônima a uma variável.
   A função declarada não terá nome antes dos parênteses, pois o nome da função
   será o próprio nome da variável.
   
   Esse tipo de expression não possui hoisting, ou seja, não será içada para o topo
   do código, caso seja invocada antes da sua declaração, ocorrerá um erro de
   inicialização, pois como não contém hoisting ela não terá sido declarada ainda.

   Como a função não contém nome após a palavra function, ela é uma função anônima 
   e só será possível invocá-lá chamando a variável onde foi armazenada.
*/

const showFood = function () {
   console.log('Pizza')
}

// invocação da função
showFood()

/*
   A única diferença entre 'function declaration' e 'function expression' é o 
   hoisting e a sua forma de declaração, no caso, recomenda-se utilizar funções 
   que não tem hoisting, ou seja, 'function expression', pois o código fica mais 
   previsível e de fácil manutenção, pois ela não será içada automaticamente 
   pelo javascript, portanto ela se comportará conforme sua vontade e não do 
   javascript.

   ====== ARGUMENTOS, PARÂMETROS E DEFAULT PARAMETERS ======

   Entre os parênteses da função declarada, é possível passar uma variável
   como parâmetro, que será uma variável local que só pode ser usada no
   escopo da função.

   Ao invocar a função passa-se como argumento um valor que será inserido
   dentro da variável descrita no parâmetro da função, sendo assim, será
   possível inserir valores externos dentro de uma função para que uma
   manipulação seja feita nesse valor.

   Se nenhum valor for passado como argumento para a variável interna da
   função, o JS irá automaticamente definir esse parâmetro da função como
   undefined.

   Caso não seja passado um valor como argumento da myFunc, a variável name 
   dentro da função irá retornar o seu valor definido como padrão.
*/

// 'name' é um parâmetro/variável
const myFunc = function (name = 'Valor não inserido.') {
   console.log(`Oi, ${name}!`)
}

myFunc('Roger')

/*
   ====== RETORNANDO VALORES ======
   
   Variáveis ou constantes declaradas dentro de uma função não podem ser
   acessadas fora do bloco, mas é possível fazer a função retornar um valor
   para que possa ser usado fora do seu escopo.

   Essa operação é realizada com a palavra chave 'return' que retorna
   a operação executada dentro da função e "joga" para fora do escopo dela.

   Funções que realizam uma operação mas não retornam nada, ou seja, não contém 
   uma declaração de 'return', automaticamente irão retornar 'undefined', isso 
   porque toda função que não retorna um valor, retorna 'undefined', sempre.

   O valor passado como argumento na invocação da função, entra no função
   como parâmetro e é armazenada nessa variável declarada no parâmetro, que pode 
   ser operada dentro do seu escopo.

   O Javascript não aceita retornar múltiplos valores de uma mesma função, no 
   entanto é possível retornar mais de um valor inserindo-os em arrays ou dentro
   de objetos e do lado de fora da função será possível desestruturar esse 
   objeto ou array para poder utilizar o valores separadamente. Veremos isso 
   mais na frente no curso.
*/

const double = function (number) {
   return number * 2
}

const result = double(2)

const showResult = function (value) {
   return `O resultado é: ${value}`
}

console.log(showResult(result))

/*
   ==================== DICA ====================

   Quando formos refatorar um código e precisarmos utilizar funções para 
   organizar a estrutura. Lembre que a refatoração é feita em estruturas que 
   estão se repetindo muitas vezes no código e dados que entrarão como argumento 
   dessa função serão na maioria das vezes dados dinâmicos. Ou seja, que mudam 
   conforme as condições da aplicação. Analise isto quando for refatorar.

   No primeiro momento não se importe em repetir código, apenas faça funcionar 
   primeiro, pois para criarmos boas abstrações, primeiro precisamos de exemplos 
   de casos de uso, depois que tudo estiver pronto, aí sim refatoramos. Dessa 
   forma poderemos analisar toda o código de forma mais macro.

   Atente-se também para criar funções "genéricas" ou seja, que possam ser 
   reutilizadas várias vezes para diferentes valores.
 */

/*

================================================================================
============================== CONTEÚDO ADICIONAL ==============================

Nas 'functions declaration', quando declaramos uma função sem parâmetro e na sua 
invocação passamos argumentos, existe uma variável implícita dentro da função 
chamada 'arguments' que armazena todos os argumentos passados na invocação, mesmo 
que não tenha parâmetros declarados para armazenar esses valores.

Mesmo que seja declarado parâmetros para receber os argumentos, essa variável 
'arguments' continua existindo implicitamente e armazena todos os argumentos 
enviados.

Em algumas linguagens de programção esse comportamente irá gerar um erro, mas no 
javascript é uma possibilidade. Vale lembrar que essa variável 'arguments' só 
existe quando usamos function declaration, em arrow function não existe.

*/

function funcao() {
   console.log(arguments) // 1, 2, 3 varíavel arguments implícita
}

const minhaFuncao = () => {
   // console.log(arguments) // not defined / não existe em arrow function
}

funcao(1, 2, 3)


/*
   Funções variádicas são funções que podem receber um número indefinido de 
   argumentos, ela é flexível...

   Criar funções e nomeá-las podem ser etapas distintas, em alguns casos não 
   temos ideia do que o bloco da função irá fazer e com isso pode se tornar mais 
   difícil definir um nome para ela. Portanto, procure escrever primeiro a função 
   com um nome genérico, ex: 'x' e depois quando o bloco da função estiver pronto, 
   aí sim defina um nome para ela com base no código presente no bloco. Isso 
   evitará perda de tempo no momento da criação das funções.
   
   Observe o que o código está fazendo e defina um nome apropriado. Se a função 
   estiver fazendo diversas operações diferentes ou estiver exibindo ou escondendo
   algo, tente aplicar um nome genêrico como "handle...", "show..." ou "hide". 
   No entanto, evite funções que realizam diferentes operações, funções devem 
   ter responsabilidade única.
   
   Geralmente, quando um callback de listener de evento é um container para várias
   ações diferentes que irão acontecer na aplicação, pode ser interessante que 
   o nome dessa função comece com 'handle'

   Evite quebrar o código em funções muito cedo, quanto mais você puder ter uma 
   visão macro do código antes da refatoração, mais rápido tenderemos a ter uma 
   percepção do design que queremos que a refatoração tenha e dos problemas que 
   queremos que seja mais eficiente em resolver.

   Use e abuse de 'console.log', sempre que escrever uma ou mais linhas de código, 
   verifique se o código está se comportando da maneira esperada por você.

*/

/*
   Estudar:

   [ ] - função variádica
   [ ] - rest parameters x spread operators
   [ ] - first-class objects

*/