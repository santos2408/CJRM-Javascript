// ============ OBJETO WINDOW ============

/*
   window é um objeto que existe no escopo global de uma aplicação. Em javascript 
   sempre existe um objeto global em que todos os métodos e propriedades que são 
   executados estão "pendurados", variando de acordo com o ambiente onde a 
   aplicação está sendo executada. Por exemplo, no node-js o objeto global é 
   chamado de "global" e no front-end o objeto global é o objeto "window".
   
   Tudo que fazemos no javascript, todos os objetos e propriedades do javascript 
   estão armazenados dentro do objeto global "window".

   Quando utilizamos uma propriedade ou método do objeto window, nós não 
   precisamos especificar o window antes do nome da propriedade ou método. 
   Se executarmos a propriedade ou método sem o window precedendo eles, a engine 
   do browser irá automaticamente concluir que essa propriedade ou método é do 
   objeto window.

   document.querySelector(''): método do window, veja que o objeto window está 
   sendo omitido no início.

   console.log(''): método de window com objeto window sendo omitido
*/

/* 
   outerWidth: essa propriedade obtém a largura total da janela
   do browser em que o HTML está sendo exibido.

   setTimeOut(): esse método executa uma função após uma certa quantidade de 
   tempo que for especificada. Ele faz isso recebendo dois argumentos, o primeiro 
   é uma função e o segundo é depois de quanto tempo passado a função será 
   executada, o tempo é passado em milisegundos.

   setInterval(): método que executa uma função repetidamente, o primeiro 
   argumento recebe a função que será executada e o segundo argumento recebe em 
   milisegundos de quanto em quanto tempo a função será invocada.

   * Vale lembrar que o setTimeOut() e o setInterval() ao serem invocados geram 
   um ID que identifica esses métodos, que normalmente são usados para cancelar 
   a execução invocando o método clearInterval() passando o ID como argumento.

   scrollTo(): esse método rola a página do browser para uma determinada posição 
   passada como argumento. O primeiro argumento recebe a coordenada X e o segundo 
   recebe a coordenada Y. Por exemplo, a coordenada Y começa em 0 no topo e vai 
   até o máximo inferior.
*/

setTimeOut(() => {
   alert('Executou!')
}, 2000)

/*
   Depois de dois segundos da página carregada, o alert será exibido na tela. 
   Esse método será executado uma única vez depois da página ser carregada. 
   Ambos são métodos do objeto window.
*/

setInterval(() => {
   console.log('Passou 1 segundo')
}, 1000)

/*
   Depois de um segundo que a página for carregada, o console será exibido e 
   depois de mais um segundo será executada de novo e assim sucessivamente até 
   que a página seja recarregada.
*/

scrollTo(0, 0)

/*
   Irá rolar a página para a posição 0 do eixo X e 0 do eixo Y. A posição 0 do 
   eixo Y corresponde ao primeiro pixel do topo da página. Portanto irá levar 
   para o topo.
*/


