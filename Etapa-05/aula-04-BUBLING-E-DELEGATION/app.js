// === EVENT BUBBLING E EVENT DELEGATION =======================

/*
   ===== EVENT BUBBLING ===== 

   Nós vimos que quando um 'evento' acontece, o elemento no qual o evento 
   aconteceu se torna o target do 'evento'. Quando isso acontece, o javascript 
   irá procurar se existe um listener de evento nesse elemento e se existir ele 
   vai disparar a função de callback que representa a ação que deve acontecer 
   quando esse evento é disparado.

   Nesse momento deve-se saber que quando um evento acontece ele é propagado 
   a partir do target no qual ele aconteceu até o topo do DOM. Por exemplo, se 
   clicarmos num elemento 'li' que contém um 'evento' atrelado a ele. Ao clicar, 
   esse evento irá propagar para o seu elemento pai e assim por diante.

   Portanto, ao propagar para o elemento pai, o javascript irá procurar se existe 
   um listener de 'evento' nesse elemento para o qual o evento se propagou e se 
   existir um 'evento' nesse pai a função de callback desse elemento também será 
   disparada e depois disso esse evento será propagado para o pai desse elemento 
   e assim continuará disparando os eventos de todos.

   Isso acontece porque, se você está clicando num elemento específico e ele 
   está dentro de outro elemento, isso significa que você também clicou no 
   elemento (hierarquicamente) acima dele.

   Essa propagação é chamada de 'event bubbling', o evento é iniciado no target 
   do evento, que é o elemento no qual o evento foi adicionado, e esse evento 
   se propaga em direção aos pais desse target para que os callback's de eventos 
   que esses pais tenham, sejam disparados também.

   Podemos evitar esse tipo de propagação, para isso usamos o método do objeto 
   event chamado 'stopPropagation()'. Essa interrupção nos ajuda a evitar 
   comportamentos inesperados quando se trata de propagação de eventos. Fazendo 
   com que apenas aquele elemento clicado execute o evento e caso seus pais 
   tenham eventos atrelados também, não ocorrerá nada com eles.
   
   ===== EVENT DELEGATION ===== 

   Também relacionado ao event bubbling, é útil quando atrelamos eventos em 
   múltiplos elementos, recomendado para aplicações em escalas maiores e quando
   temos muitos itens iguais que receberão eventos pois como podemos ver no 
   código abaixo que está iterando sobre as li's, adicionar eventos em cada 
   elemento individualmente pode começar a apresentar problemas de performance 
   na aplicação e pode também não ser uma boa prática.
*/

const ul = document.querySelector('ul')
const button = document.querySelector('button')

// evento de clique padrão
button.addEventListener('click', () => {
   const li = document.createElement('li')

   li.textContent = 'Novo item'
   ul.prepend(li)
})

/*
   === código SEM a utilização de event delegation ===

   Repare que iteramos por cada 'li' e para cada 'li' adicionamos um eventListener. 
   Para aplicações maiores esse tipo de abordagem pode resultar em problema de 
   performance.
*/
const lis = document.querySelectorAll('li')
/*
lis.forEach(li => {
   li.addEventListener('click', event => { // função de callback
      const clickedElement = event.target

      // comprovando a propagação de eventos*
      console.log('clicou na li')

      // interrompendo propagação do evento
      event.stopPropagation()

      clickedElement.remove()
   })
})
*/

// comprovando a propagação de eventos*
ul.addEventListener('click', () => {
   console.log('Evento propagado a partir do target da li')
   // comente o stopPropagation() acima
})

/*
   Na comprovação da propagação do evento vemos que mesmo clicando no elemento
   'li' e disparando o seu evento, o evento atrelado ao elemento 'ul' também 
   foi disparado, isso porque o evento da 'li' se propagou para seus elementos 
   pai.
*/

/* 
   === código COM a utilização de event delegation ===

   usando o event delegation, nós colocamos o eventListener no pai de todos os 
   elementos que queremos que tenha o event e ao clicarmos em algum item dentro 
   desse elemento pai poderemos pegar o target específico do elemento clicado.
   Dessa forma passa a existir apenas um eventListener invés de vários para todos 
   os elementos.

*/

ul.addEventListener('click', event => {
   const clickedElement = event.target

   if (clickedElement.tagName === 'LI') {
      clickedElement.remove()
   }

   if (clickedElement.tagName === 'SPAN') {
      clickedElement.parentElement.remove() // removendo LI
      clickedElement.remove() // removendo SPAN
   }
})

/*
   a propriedade 'target' refere-se ao exato elemento onde ocorreu o clique do 
   mouse. Já a propriedade 'currentTarget' refere-se ao elemento onde o evento 
   está atrelado.

   Repare que no código com a utilização de event delegation, ao invés de 
   adicionarmos um evento em cada 'li', nós adicionamos um evento no elemento 
   pai que é a 'ul' e a partir dela obtemos o target do evento, e com esse target 
   podemos saber se o elemento que foi clicado é de fato uma tag 'li'. Para isso 
   inserimos uma propriedade do target, que é a tagName que nos retorna o nome 
   da tag do elemento clicado em caixa alta.
*/

// === MAIS EVENTOS DO DOM =======================

/*
   COPY EVENT: esse evento acontece quando selecionamos algum texto na página e 
   copiamos o seu conteúdo utilizando o mouse ou a tecla Ctrl + C. Quando essa 
   cópia acontece, o evento é disparado.
*/

const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', () => {
   console.log(`O texto foi copiado!`)
})

/*
   MOUSEMOVE EVENT: Esse evento acontece quando o usuário movimenta o mouse 
   no elemento referenciado.

   Dentro desse evento existem algumas propriedades como: offsetX e offsetY

   A offsetX armazena a posição do mouse no eixo horizontal com base no primeiro 
   pixel do topo esquerdo do elemento referenciado, contando sempre da esquerda 
   para a direita.

   A offsetY armazena a posição do mouse no eixo vertical com base no primeiro 
   pixel do topo para baixo do elemento referenciado.
*/

const div = document.querySelector('.box')

div.addEventListener('mousemove', event => {
   div.innerText = `X ${event.offsetX} | ${event.offsetY}`
})

/*
   WHEEL EVENT: ocorre quando rolamos a página. Adicionamos esse evento 
   normalmente no document, para que quando esse evento ocorra, a ação seja 
   disparada em toda a página.

   Dentro desse evento nós temos a propriedade pageX e pageY que são semelhantes 
   as propriedades de mousemove, offsetX e offsetY. No entanto, esses valores 
   são relativos a toda a página, ou seja, a pageX corresponde ao valor horizontal 
   da esquerda para a direita e a pageY corresponde a posição vertical do topo 
   para baixo, esses valores mudam com base na posição atual da barra de rolagem.
*/

document.addEventListener('wheel', event => {
   console.log(event.pageX, event.pageY)
})

// mais eventos em: https://developer.mozilla.org/en-US/docs/Web/Events