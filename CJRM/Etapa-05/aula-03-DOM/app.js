/*
   === PARENTS, CHILDREN AND SIBLINGS =======================

   Começaremos a ver as relações dos nós do DOM, ou seja, as relações entre nós 
   diferentes dentro de uma árvore de nós de um documento HTML.

   - Um dos tipos de relações entre nós diferentes de uma árvore é a relação de 
   siblings, ou seja, uma relação de irmãos. Isso acontece quando temos elementos 
   no mesmo nível com o mesmo pai direto, esses elementos são irmãos.

   - A outra relação é entre parents e children, quando temos um elemento pai 
   e dentro dele existem elementos filhos.

   Digamos que queremos adicionar uma classe CSS em todos os elementos filho 
   do elemento pai. Uma possibilidade seria fazer uma seleção individual de todos
   os filhos e armazenar cada referência em uma constante, no entanto, essa forma 
   ficaria com muitas informações e seria impossível selecionar esses filhos se 
   eles fossem tag's dinâmicas.

   Portanto, uma maneira eficiente de obter as tag's filho dentro do elemento pai 
   seria que ao invés de buscar cada elemento filho, nós buscamos o elemento pai, 
   armazenamos a referência dele numa variável e através dessa referência 
   utilizamos algumas propriedades específicas para esse tipo de seleção.

   As propriedades disponíveis para realizar esse tipo de seleção são:
      - element.children
      - element.parentElement
      - element.previousElementSibling
      - element.nextElementSibling
*/

// obtendo referência do elemento pai
const article = document.querySelector('article')

// obtendo todos os filhos do article e armazenando numa const
const filhos = article.children

/*
   Obs: Note que, se visualizarmos a const filhos que contém a referência dos 
   filhos do article, será retornado um HTMLCollection contendo todos os filhos 
   do elemento pai.

   Sabemos que um HTMLCollection não é compatível com o método forEach apesar de 
   ser com o for loop, portanto, para iterarmos em cada filho utilizadn forEach 
   com o objetivo de adicionar classes em cada um, precisaremos converter esse 
   HTMLCollection em um array. 
   
   Essa conversão é feita inserindo o HTMLCollection como um argumento do método
   from() da função construtora Array. Esse método retornará um novo valor
   contendo um array e não mais um HTMLCollection.
*/

// convertendo HTMLCollection em array
const newFilhos = Array.from(filhos)

/*
   Vale lembrar que a invocação do método from() não é destrutiva, ou seja, ela 
   não modifica o objeto original. Se visualizarmos a const filhos, veremos que 
   ela ainda é um HTMLCollection, mas a newFilhos não.
*/

// iterando e adicionando classes em cada elemento filho do article
newFilhos.forEach(element => {
   element.classList.add('article-element')
})

/*
   É possível também obtermos a referência de um elemento qualquer e através 
   dele obter a referência do pai desse elemento, ou do próximo irmão, ou até 
   mesmo do irmão anterior a ele. Veja:
*/

const title = document.querySelector('h2')

// descobrindo pai do title
console.log(title.parentElement)

// descobrindo o pai do pai do title
console.log(title.parentElement.parentElement)

// descobrindo próximo irmão do title
console.log(title.nextElementSibling)

// descobrindo irmão anterior ao title
console.log(title.previousElementSibling)

// retorna os filhos e os non-elements(texto)
article.childNodes


/*
   Ao utilizar a propriedade previousElementSibling ou nextElementSibling, se 
   não existir um irmão do element. Essa propriedade retornará null.

   Pesquisar sobre:
      - replaceChild
      - cloneNode

   === EVENTOS DE CLIQUE =======================

   Na maior parte das vezes as manipulações e modificações que fazemos são
   reações a ações do usuário na página. Por exemplo, se o usuário clicar em 
   um botão, nós podemos exibir um menu, deletar um elemento, ou exibir pop-up.

   Existem diversos tipos de eventos que podemos utilizar, como eventos de
   'mouse', 'scroll', 'submit', mas o que será apresentado nesta aula será o 
   evento de 'click'.

   A atividade proposta será criar uma to-do list simples, onde iremos reagir 
   as ações do usuário de adicionar uma nova tarefa, riscar as tarefas já
   realizadas, entre outras funcionalidades que podem ser implementadas 
   posteriormente.

   addEventListener é um método que escuta um evento em um elemento específico.
   Esse método recebe como argumento o tipo do evento: 'mouse', 'click, 
   'scroll' e muitos outros. E também uma função de callback que será executada 
   quando esse evento ocorrer.
*/

const button = document.querySelector('button')

// invocando o escutador de evento
button.addEventListener('click', () => {
   console.log('Clicou no botão!')
})

/*
   No browser, quando um evento acontece, dentro da função de callback o browser 
   disponibiliza automaticamente um objeto no parâmetro da função passada como 
   argumento do addEventListener. Esse parâmeto da função de callback geralmente 
   é chamado de 'event' e contém informações sobre o evento que aconteceu.

   Para sabermos o elemento específico onde ocorreu o evento, ou simplesmente 
   onde ocorreu determinado evento, nós utilizamos uma propriedade desse objeto
   'event' chamada 'target'. Ou seja, a target armazena a referência do elemento
   onde o evento ocorreu.

   Ao invés de chamar a propriedade target, podemos simplesmente chamar o
   argumento do método forEach, que é o item atual que está sendo iterado e
   assim obteremos também o elemento onde ocorreu o evento. No entanto,
   recomenda-se utilizar a propriedade 'target' do parâmetro event, porque ele 
   vai nos ajudar com o 'event delegation' que será abordado mais na frente.
   
   Veja abaixo:
*/

const lis = document.querySelectorAll('li')

// passando parâmetro na callback para obter informações do evento
lis.forEach(li => {
   li.addEventListener('click', event => {
      const clickedElement = event.target

      clickedElement.style.textDecoration = 'line-through'
   })
})

/*
   Pesquisar sobre:
   - 'options' do eventListener que é passado como terceiro argumento
   - currentTarget
   - target
   - handleEvent (importante)

   === CRIANDO E REMOVENDO ELEMENTOS DO DOM =======================

   O método remove() remove o elemento referenciado do DOM.

   Como visto em aulas anteriores, é possível adicionar um elemento HTML no DOM 
   através da propriedade innerHTML inserindo um template string. No entanto, 
   existe uma maneira diferente de fazer isso.

   document.createElement('') é um método do document que é usado para criar um 
   novo elemento HTML, o argumento passado será o nome da tag HTML que deseja-se 
   criar.

   element.append() é um método que adiciona o elemento criado no elemento pai. 
   Essa adição é feita no final, como último filho.

   element.prepend() é um método semelhante ao append() mas a adição é feita no 
   início, como primeiro filho.

   element.appendChild() é um método que adiciona um node no final da lista de 
   um parent node especificado. Diferente do append() que também permite string 
   objects, o appendChild aceita apenas objetos node.
*/

const ul = document.querySelector('ul')
const lis = document.querySelectorAll('li')

// passando parâmetro na callback para obter informações do evento
lis.forEach(li => {
   li.addEventListener('click', event => {
      const clickedElement = event.target

      clickedElement.remove()
   })
})

const button = document.querySelector('button')

button.addEventListener('click', () => {
   const li = document.createElement('li')

   li.textContent = `Novo item`

   ul.append(li) // adiciona no final
   ul.prepend(li) // adiciona no inicio
})

/*
   Existem alguns casos em que quando formos adicionar por exemplo um botão via 
   JS com a intenção de adicionar um listener de evento nele, não podemos adicionar 
   ele através de uma template string, isso porque quando adicionamos dessa forma 
   seriamos obrigados a primeiro adicionar o botão no DOM e só depois inserir o 
   event listener. 

   Para resolver isso precisamos ao em vez de inserir o botão via template string, 
   iremos inserir criando um elemento com 'document.createElement'. Dessa forma 
   conseguimos adicionar eventos nesse elemento antes mesmo de inserirmos esse 
   elemento no DOM, isso porque esse elemento será um objeto.

   === REMOVER EVENT LISTENER =======================

   Em alguns casos pode ser interessante removermos o escutador de eventos do 
   código, isso porque estaremos liberando o espaço que aquele escutador ocupa 
   na memória, em aplicações menores e mais simples esse tipo de ação surtirá 
   pouco ou nenhum efeito, mas é uma boa prática. Vale lembrar também que o seu 
   uso não se destina apenas a performance mas em determinadas aplicações pode 
   ser que você precise realizar essa ação.

   Para removermos um escutador de evento, a primeira coisa que devemos observar 
   é em que momento esse escutador deve ser removido. A ação de remoção do evento 
   é executado a partir da invocação do método 'removeEventListener()'.

   Esse método recebe dois argumentos:
      1ª: tipo de evento a ser removido (click, submit, mousemove)
      2ª: exata função usada como callback do escutador de evento

   * Vale lembrar que os eventos são cumulativos, ou seja, podemos inserir mais 
   de um tipo de evento num mesmo objeto, por isso a necessidade de inserirmos 
   como primeiro argumento o tipo de evento desejado para ser removido.

   * Vale lembrar que a função que deve ser passada como segundo argumento deve 
   ser a que foi usada exatamente no escutador de evento. Atente-se, pois não devemos 
   passar a mesma declaração da função e sim passar a referência dela, ou seja, 
   se escrevermos o mesmo bloco na função isso contará como uma NOVO função e não 
   aquela mesma função que foi usada no listener. Ou seja, deve-se considerar 
   a função que foi usada no eventListener e não escrever o mesmo bloco achando 
   que será igual. Lembrando que funções são objetos.

   Para isso recomenda-se armazenar a função usada no listener de evento em uma 
   constante e depois referenciá-la no removeEventListener, aí sim estará sendo 
   passada a exata função usada.

   === DOCUMENT FRAGMENT =======================

   Em alguns casos podemos nos deparar com a inserção de elements no DOM repetidas 
   vezes. Por exemplo: criação e inserção de li no DOM a cada iteração num array.
   E isso não é uma boa prática, isso porque, a cada execução da função de callback 
   o DOM será manipulado e a cada manipulação no DOM o navegador faz um 'reflow' e 
   'repaint', ou seja, ele precisa redesenhar os elementos e recalcular o fluxo 
   dos mesmos. 
   
   Isso pode prejudicar a performance do navegador e do computador, visto que, 
   quanto mais manipulação de DOM a aplicação executa, mais o navegador irá 
   exigir do processador do usuário devido ao 'reflow' e 'repaint'.

   No entanto, existe uma abordagem mais performática, que irá manipular o DOM
   apenas uma única vez mesmo que várias elementos estejam sendo inseridos dentro 
   dele. Ao invés de inserir os elementos diretamente no DOM, nós iremos inserir 
   eles dentro de um fragmento de documento 'documentFragment()'.

   O documentFragment é um nó do DOM, um elemento do DOM vazio que podemos colocar 
   nele elementos que queremos inserir no DOM. Porém, ele é um nó do DOM que só 
   existe na memória, ele não será inserido no DOM. Devido a ele existir apenas 
   na memória, nós podemos adicionar outros nós do DOM como filhos dele (document 
   fragment) e essa inserção de nós no document fragment não fará o navegador 
   precisar redesenhar os elementos e recalcular o fluxo do DOM, isso acontece 
   porque ele não está no DOM e sim na memória. Digamos que ele pode ser usado 
   como um 'reservatório temporário' de elementos que serão inseridos no DOM de 
   uma só vez.

   Lembrando que ser um nó do DOM não significa que o nó esteja inserido no DOM, 
   ele pode existir mas não estar inserido no DOM.

   Após armazenarmos os nós no document fragment, podemos depois inserir o 
   document fragment no DOM, com isso, todos os nós filhos que 'document fragment' 
   contém serão inseridos no DOM e esses nós serão inseridos de uma só vez, isso 
   fará que o navegador realize o 'repaint' e 'reflow' uma única vez também.

   Após a inserção dos filhos do documentFragment no DOM, o documentFragment 
   continuará na memória, mas ele estará vazio, visto que seus filhos foram 
   transferidos para o DOM.

   Portanto, quando precisarmos inserir elementos no DOM, essa abordagem usando 
   documentFragment será uma abordagem mais performática para o processamento. 
   Lembrando também que o documentFragment não contém parentNode, isso porque 
   ele foi feito para ser o pai dos elementos adicionados nele, foi apenas para 
   isso que ele foi criado.

   documentFrament() -> método de document

   Estudar mais sobre:

   scrollTo()
   scrollIntoView()
   removeEventListener()
   getComputedStyles()
   intersectionObserver()
   
   setProperty
      - element.setProperty("color", "#fff")
      - element.style.color = "#fff"
      - pesquisar diferença entre essas duas propriedades
*/




































