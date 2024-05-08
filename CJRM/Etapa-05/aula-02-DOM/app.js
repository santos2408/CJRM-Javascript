/*
  ======== TÓPICAS DESTA AULA ========

    - ADICIONANDO, MODIFICANDO E REMOVENDO CONTEÚDO DO DOM
    - PROPRIEDADES E MÉTODOS DE ELEMENT
    - OBTENDO E SETANDO ATRIBUTOS
*/

// === ADICIONANDO E MODIFICANDO CONTEÚDO DA PÁGINA =======================

/*
   Existem propriedades que modificam o texto ou o HTML do elemento obtido com 
   os querySelector's, getElement's, etc. Essas propriedades são:

   - innerText
   - innerHTML
   - textContent
*/

// obtendo a referência do elemento
const paragraph1 = document.querySelector('.content-1 p')

// ==== innerText ====

/*
   A propriedade "innerText" obtém o texto do elemento referenciado. Caso queira
   alterar ou adicionar outro texto a esse elemento, basta atribuir um novo valor
   a ele através do assignment.

   Obs: O innerText obtém o texto que é renderizado no documento HTML, diferente 
   do textContent que obtém o texto independente se o texto está visível ou não
   nas suas propriedades de estilo. Ou seja, se o texto não está sendo renderizado
   no navegador, mas ele existe no documento HTML, o textContent conseguirá 
   pegar esse conteúdo.

   Veja abaixo:
*/

// obtendo texto do elemento
paragraph1.innerText

// alterando texto do elemento
paragraph1.innerText = `Olá, mundo!`
paragraph1.innerText += ` Tudo bem?`

/*
   Podemos também obter a referência de múltiplos elementos e modificar de uma 
   só vez todo o seu conteúdo através das propriedades citadas. Para isso 
   precisamos iterar sobre cada elemento da lista que recebermos. Veja abaixo:
*/

const paragraphs = document.querySelectorAll('.content-1 p')

paragraphs.forEach((paragraph, index) => {
   paragraph.innerText += ` | Texto: ${index + 1}`
})

// ==== innerHTML ====

/*
   A propriedade "innerHTML" obtém o HTML do elemento referenciado. Caso queira
   alterar ou adicionar outro HTML a esse elemento, basta atribuir um novo valor
   a ele através do assignment. Veja baixo:
*/

const divTitulos = document.querySelector('.titulos')

// obtém o HTML do elemento
divTitulos.innerHTML

// adicionando ou modificando o HTML do elemento
divTitulos.innerHTML += `<h2>Novo H2</h2>`

/*
   Vale lembrar que caso o elemento selecionado não contenha nenhum HTML dentro
   dele, a atribuição irá criar esse HTML. Caso já exista um HTML dentro desse
   elemento a atribuição irá alterar. Se a atribuição for com addition, ela irá
   adicionar mais esse HTML que está sendo atribuído, como aconteceu no exemplo 
   acima.

   Podemos também gerar um template HTML recebendo os valores através de um 
   array que veio de um banco de dados. Vale lembrar que o uso de innerHTML pode 
   gerar problemas de vulnerabilidade a ataques XSS, em aulas futuras veremos como 
   evitar o uso de innerHTML e contar essa situação. Portanto, evite usar innerHTML 
   quando você não tiver total controle do conteúdo que está sendo inserido nele.

   Por exemplo: inserir o conteúdo de um input que foi enviado pelo usuário 
   através da innerHTML, isso fará com que o que o usuário tenha escrito no input 
   o innerHTML irá parsear esse conteúdo para HTML, portanto, se o usuário 
   escrever um código malicioso no input, ele estará entrando na sua aplicação e
   banco de dados.
   
   Veja baixo:
*/

const people = ['Roger', 'Maria', 'Jose']

people.forEach(person => {
   divTitulos.innerHTML += `<p>${person}</p>`
})

/*
   ==== clientHeight e clientWidth ====

   A propriedade "clientHeight" e "clientWidth" obtém a altura do elemento em 
   pixels incluindo o seu padding. Não inclui borders, margins ou scrollbars.

   É importante lembrar que essas duas propriedades são conhecidas por serem
   getters e setters, ou seja, elas podem tanto obter quanto setar os valores.

   Pesquisar sobre:
      getBoundingClientRect()
      innerWidth / innerHeight
      outerHTML
      pageYOffset / pageXOffset
      matchMedia()

   ==== offsetHeight e offsetWidth ====

   Essas duas propriedades são read-only e retornam a altura ou largura de um 
   elemento incluindo padding, borders e scroolbars. Elas não incluem a altura 
   de pseudo-elements como ::after e ::before. Se o elemento estive com display: 
   none, então as propriedades retornarão valor 0.

   ==== offsetTop, offsetLeft, offsetRight, offsetBottom ====

   ...

   ==== innerWidth e innerHeight ====

   ...
*/

// === OBTENDO E SETANDO ATRIBUTOS =======================

/*
   Além de adicionar ou modificar um texto ou HTML de uma página, é possível 
   também obter ou modificar atributos de elementos HTML. Por exemplo: class,
   href, style...

   Invocando o método "getAttribute" no elemento buscado, poderemos obter a 
   referência do atributo desse elemento selecionado. Esse método recebe
   um argumento com a string do atributo que desejamos obter.

   A invocação do método "setAttribute" seta ou modifica o valor do atributo 
   passado como argumento. Esse método recebe dois argumentos passados por strings.
   O primeiro é o atributo que desejamos obter e o segundo é o valor que queremos
   que ele receba ou seja modificado.

   Mesmo que o elemento não contenha um atributo, é possível utilizar o setAttribute
   para criar o atributo novo para o elemento selecionado. Basta passar os dois 
   argumentos: 'nome do atributo' e 'valor'.
*/

// selecionando elemento
const link = document.querySelector('a')

// obtendo atributo do elemento
console.log(link.getAttribute('href'))

// setando ou modificando o valor do atributo
link.setAttribute('href', 'http://www.youtube.com')

// modificando texto
link.innerText = 'Website Youtube'

// ===============================================================

const mensagem = document.querySelector('.mensagem')

console.log(mensagem.getAttribute('class'))

mensagem.setAttribute('class', 'success')

// === MODIFICANDO ESTILOS CSS (INLINE) =======================

const title2 = document.querySelector('.content-4 h1')

/*
   Existem algumas desvantangens em utilzar "setAttribute" para definir um
   estilo CSS para o elemento selecionado.

   Repare abaixo que se adicionarmos um estilo CSS através do método setAttribute,
   esse método irá sobrescrever o estilo atual que o elemento já tem e definirá 
   apenas o que está sendo passado no setAttribute. Ou seja, não conseguiremos manter
   diferentes estilos num mesmo elemento, assim o setAttribute define apenas 
   um atribute para o elemento, não conseguimos adicionar mais de um. Veja abaixo:
*/

title2.setAttribute('style', 'margin: 50px')
// todos os estilos anteriores serão ignorados

/*
   Para adicionar ou modificar diferentes estilos dentro do elemento, utilizamos
   a propriedade "style", usando essa propriedade é possível preservar os estilos 
   atuais do elemento e ir apenas adicionando outros. Podemos também alterar 
   ou remover elementos já existentes. 
   
   Veja abaixo:
*/

// voltando para o valor padrão
title2.setAttribute('style', 'color: blue')

// setando estilo através de "style"
title2.style.margin = '50px'
title2.style.backgroundColor = 'red'
title2.style.fontSize = '64px'
title2.style.fontSize = '' // removendo valor

/*
   Vale lembrar que ao passar a propriedade CSS que deseja-se inserir ou alterar,
   não se deve utilizar hífen para separar os nomes igual ao CSS. Nessa caso 
   devemos usar camel case, pois só dessa forma o javascript reconhece.

   é possível observar que a propriedade "style" é mais eficiente do que o método
   setAttribute para trabalhar com estilos em cima do elemento. Para removermos 
   um estilo basta atribuirmos uma string vazia para a propriedade.
*/

// === OBTENDO, ADICIONANDO, REMOVENDO =======================

/*
   classList: propriedade que retorna um DOMTokenList, que é uma lista de 
   todas as classes que o elemento possui. Esse objeto é similar a um array e 
   possui algumas propriedades e métodos.

   classList.add(): método de classList que adiciona uma classe no elemento, 
   recebe como argumento o nome da classe que se quer adicionar.

   classList.toggle(): método de classList que alterna os valores da classe
   dependendo se ela existe ou não.

   Pesquisar sobre:
      DOMTokenList
*/

const texto = document.querySelector('.erro')

// propriedade que visualiza todas as classes do elemento
// retorna um DOMTokenList
texto.classList

// adiciona uma classe no elemento
texto.classList.add()

// remove uma classe do elemento
texto.classList.remove()

// alterna entre adicionar e remover a classe do elemento, se classe existir,
// ele remove, se não existir, ele adiciona.
texto.classList.toggle()

const textos = document.querySelectorAll('.textos p')

// adicionando classe no elemento
textos.forEach(texto => {
   if (texto.textContent.includes('erro')) {
      texto.classList.add('erro')
   }
   
   if (texto.textContent.includes('success')) {
      texto.classList.add('success')
   }
})

/*
Observação:

   Classes CSS foram criadas para manipular estilos. O código fica mais organizado
   deixando-as apenas para o CSS. Portanto, evite referenciar um elemento do 
   DOM utilizando classes ou ID's.

   o attributo 'id' tem o efeito colateral nos browsers em que ele gera uma 
   variável global que aponta para o elemento que tem aquele ID. Se na marcação 
   HTML for declarado um atributo 'id' com o 'valor x', se você inserir 'window.x' 
   (ou simplesmente x) como argumento de um console.log(), o retorno será a 
   referência daquele elemento.

   Sempre que possível, evite variáveis globais, elas podem ser modificadas de 
   qualquer lugar da aplicação, podem se sobrescrever (se duas variáveis globais 
   tiverem o mesmo nome) e isso pode minar a modularidade do código. Se você 
   retirar o id="x", as execuções dos console.log() acima resultarão em undefined.

   Então, para não gerar variáveis globais desnecessárias, o ideal é usar o 
   attributo 'data' para manipulação de DOM via JS, e usar IDs somente para 
   inputs, por conta da acessibilidade do atributo 'for' das 'labels' ou quando 
   você quiser fazer âncoras na sua página, aí você também precisa do ID. Para 
   todos os outros casos, evite.
   
   Outra questão de organização é que se você comparar, lado a lado, duas 
   versões do mesmo arquivo .html, uma com 'data' e class e outra apenas com 
   class, verá que ao bater o olho no arquivo com data-js e class, você distingue 
   rapidamente quais elementos estão sendo manipulados pelo JavaScript. Isso não 
   é possível ao bater o olho na versão do arquivo que usa apenas class para 
   estilos e manipulação javascript.

   A forma mais confiável de identificar elementos e manipulá-los em JavaScript 
   (puro) é usar o atributo 'data'

   Estudar mais sobre:
      dataset
*/

