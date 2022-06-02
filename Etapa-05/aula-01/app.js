// === 3 ESCOPOS EM JAVASCRIPT QUE DEVE-SE CONHECER =======================

/*
   Escopos podem ser definidos como a visibilidade de uma variável, dependendo
   de onde é declarada uma variável, outras partes do código poderão ou não
   acessar esse valor declarado. Iremos observar 3 tipos de escopos, são eles:
   
   - Escopo de Funções
   - Escopo de Bloco
   - Escopo Léxico
*/

// ESCOPO DE FUNÇÕES

function getMessage () {
   let message = 'Olá'

   message // 'Oi'
}

message // NOT DEFINED

/*
   Com base na função acima, repare que é possível acessarmos o resultado da
   variável dentro da função normalmente. Mas se tentarmos acessar essa variável
   fora do bloco da função, obteremos um erro, pois essa 'message' só é visualizada
   dentro do bloco da função. Para conserguirmos visualizar essa variável fora
   do escopo de função, devemos retornar essa variável.
*/

// ==================================================

function myFunc () {
   let cat = 'Zeca'
   let age = 3
   var color = 'cinza'
}

myFunc()
// console.log(cat) // cat is not defined

/*
   Mesmo que invocarmos a função previamente, a variável continuará não
   existindo fora do bloco. Devido a essa peculiaridade de escopo, nota-se que
   podemos ter múltiplas funções que tenham os mesmos nomes de variáveis dentro
   dela.
*/

// ==================================================

const dog = 'Pastor-alemão'

function dogWatch () {
   var dog = 'Samoieda'
}

console.log(dog)

/*
   Esse tipo de operação é possível pois essas variáveis são "diferentes", 
   porque estão em escopos diferentes. A primeira 'dog' tem escopo global e 
   a segunda tem um escopo de função. 
   
   const, let e var terão o mesmo resultado.
*/

// ==================================================

// ESCOPO DE BLOCO

/*
   Vale lembrar que escopos de bloco não necessariamente estão relacionados
   a funções, todo tipo de bloco são considerados.
   
   Por exemplo: for, if, while...
*/

if (true) {
   let dragon = 'Balerion'
   // console.log(dragon) // Balerion
}

// console.log(dragon) // dragon is not defined

// ==================================================

/*
   Se alterarmos let dragon para var, repare que a var passará a ser
   vista do lado de fora do bloco, ou seja, ela irá "escapar" do bloco, pois
   a var tem escopo global, independente de onde se encontra, a não ser que 
   esteja num escopo de função, aí não irá escapar. Const e let têm
   compartamentos diferentes de var. Esse é um dos motivos pelos quais const e 
   let foram adicionados no JS, recomenda-se utilizar apenas const e let de 
   preferência. Veja abaixo:
*/

if (true) {
   var dragon = 'Balerion'
}

// console.log(dragon) // balerion

// ==================================================

// ESCOPO LÉXICO

/*
   Quando tivermos funções aninhadas, ou seja, uma dentro da outra é possível
   acessarmos variáveis que estiverem "escaladas" ou seja. Uma função interna
   pode acessar a variável que se encontra na função anterior a ela dentro
   do aninhamento. Caso a função atual não tenha variável, ela irá procurar
   na função "acima" dela e assim por diante. Esse é o escopo léxico, é a consulta
   de uma variável dentro de escopos de funções aninhadas uma dentro da outra.
*/

const externalFunc = () => {
   const book = 'Sapiens'

   const internalFunc = () => {
      let x = 10
      console.log(book.toUpperCase())

      const extraInternal = () => {
         console.log(book.toUpperCase())
      }

      extraInternal() // SAPIENS
   }

   internalFunc()
   console.log(x) // x is not defined
}

externalFunc() // SAPIENS
internalFunc() // internal is not defined

// === DOCUMENT OBJECT MODEL =======================

// MDN - MOZILLA DEVELOPER NETWORK

/*
   Na página do MDN podemos encontrar a documentação do Javascript e consultar
   todas as funcionalidades da linguagem e guias da linguagem. Dê preferência
   para pesquisas em inglês, pois resultam em conteúdos mais completos. E atenção
   a barra de pesquisa da página, pois o resultado pode não ser o desejado.
*/

// INTERAGINDO COM O BROWSER

/*
   Com a interação com o browser, podemos adicionar conteúdos na página,
   modificar estilos CSS, reagir a eventos, criar interações como pop-ups, 
   entre outras coisas.

   Esse é um dos motivos pelo qual o javascript foi originalmente criado, para
   tornar a experiência de uso de uma página mais interativa. Tudo que fazemos 
   é passado pelo DOM - DOCUMENT OBJECT MODEL.
*/

// O QUE É O DOM - DOCUMENT OBJECT MODEL

/*
   O DOM é criado pelo browser, ele não faz parte da linguagem javascript em si.
   Quando um HTML é carregado no browser, o browser cria o DOM para que seja
   possível interagirmos com o documento HTML através do código javascript.

   Através do DOM conseguimos realizar diversas modificações de uma página.
   Portanto, ao carregarmos um HTML no browser, o browser irá criar um objeto que
   modela esse documento. Esse objeto é o "document", que contém diversas
   propriedades e métodos do documento HTML que podem ser usados para interagir
   com esse documento carregado no browser.

   Dentro do documento javascript poderemos acessar o objeto document e usar
   ele para interagir com a página através dos métodos e propriedades dele.

   Dentro do DOM a página HTML é descrita dentro de uma "árvore hierárquica",
   chamada de "árvore de nodes". A raiz dessa página é a tag HTML, chamada de
   "root node". Dentro da tag HTML temos a tag HEAD, BODY, TITLE, H1, P entre outras. 
   Essas tags internas são consideradas nós do dom e são chamadas de "node elements".
   Os textos que existirem dentro das node elements também serão considerados nós.
   São chamados de "text nodes". Resumo:

   HTML - root node (nó raiz)
   TAGS - node elements (nós de elementos)
   TEXTOS - text nodes (nós de textos)

   Quando desejarmos interagir com algum elemento ou texto do DOM, nós usamos
   o DOM para alcançarmos essa árvore de "nodes" e obtemos a referência do "node" 
   desejado para podermos executar métodos e propriedades e realizar alterações 
   nesse "node".
*/

// === QUERY SELECTOR E QUERY SELECTOR ALL =======================

/*
   A ação de buscar e selecionar um elemento do DOM é chamada de query do DOM,
   ou seja, é feita uma consulta do DOM em busca de um elemento.
*/

/*
   querySelector é o método mais recomendado para realizar consultas no DOM.
   Dentro da invocação do método nós passamos como parâmetro uma string com 
   o selector CSS do elemento que queremos obter.

   O resultado dessa expressão resultará numa referência para o seletor
   inserido.

   Utilizando o querySelector, o DOM é percorrido e ao encontrar o primeiro
   seletor passado como parâmetro, ele retorna esse elemento. Se tiverem outros
   seletores iguais ao passado no parâmetro, eles serão ignorados e só o primeiro
   encontrado será retornado, no caso do querySelector.

   É possível também copiarmos a referência do elemento diretamente na árvore
   do DOM e colar no parâmetro do método.
*/

const h1 = document.querySelector('h1') // só a primeira ocorrência
const paragraph = document.querySelector('p') // só a primeira ocorrência
const error = document.querySelector('.error') // só a primeira ocorrência
const errorDiv = document.querySelector('div.error') // só a primeira ocorrência

console.log(h1)
console.log(paragraph)
console.log(error)
console.log(errorDiv)

/*
   querySelectorAll é utilizado para obtermos todas as ocorrências do seletor
   passado como argumento do método.

   O retorno dessa busca será um "nodeList" que contém a referência do seletor
   iserido no parâmetro do método.

   Esse nodeList se assemelha a um tipo de array mas não é um array, é apenas 
   parecido. Normalmente é conhecido como array-like. Nem todos os métodos de
   array são possíveis utilizar numa nodeList. Mas podemos utilizar algumas
   funcionalidades parecidas com array como acessar index através de colchetes 
   ou realizar um loop através de forEach.
*/

const paragraphs = document.querySelectorAll('p')
const errors = document.querySelectorAll('.error')

paragraphs.forEach(paragraph => {
   console.log(paragraph)
})

console.log(errors)

// === OUTRAS MANEIRAS DE FAZER QUERYE'S NO DOM =======================

/*
   Existem maneiras alternativas de obter queries do DOM para obter referências
   dos elementos buscados.

   1) O método "getElementById" busca o elemento que contém o ID correspondente, 
   note que a string passada como argumento não precisa da "#" do seletor CSS pois 
   o JS já sabe que um ID está sendo buscado. Isso vale para todos os métodos get.

   2) o método "getElementsByClassName" obtém um HTMLCollection por meio do nome
   da classe do elemento, esse HTMLCollection é similar ao nodeList e representa 
   uma lista genérica de elementos. No entanto, não é igual ao nodeList, eles têm 
   algumas diferenças. Por exemplo, é possível acessar um elemento do HTMLCollection 
   através de colchetes, mas não é possível utilizar um forEach para iterá-lo. 
   Para podermos iterá-lo, será preciso converter o HTMLCollection em array, o 
   que será visto nas aulas posteriores. HTMLCollection possui menos métodos e 
   propriedades do que nodeList.

   3) O método "getElementsByTagName" obtém um HTMLCollection de todas as tags
   inseridas como string no argumento do método.

   Obs: Dê preferência de busca usando querySelector e querySelectorAll, devido 
   a sua flexibilidade e capacidade de buscar qualquer tipo de seletor CSS e 
   gerar nodeList's que são mais completos, invés de HTMLCollection que são mais
   limitados.

*/

// 1) obter um elemento através do ID
const title = document.getElementById('title')

// 2) obter elementos através do nome da classe
const texto = document.getElementsByClassName('error')

// 3) obter elementos através do nome da tag
const paragrafo = document.getElementsByTagName('p')

// === DESTRUCTURING ASSIGNMENT =======================

/*
   Essa sintaxe é uma expressão Javascript que faz com que seja possível 
   desempacotar valores de arrays ou propriedades de objeto dentro de 
   variáveis distintas.

   É uma expressão que possibilita atribuirmos para uma variável uma cópia do 
   valor de uma propriedade de um objeto.
*/

const getCatInfo = () => {
   const name = 'Pintada'
   let age = 4
   const color = 'Preto e Laranja'

   return { name, age, color }
}

// destructuring assignment com objetos
const { name, age, color } = getCatInfo()

// name // Pintada
// age // 4
// color // Preto e Laranha

// ============================================

const myName = ['Roger', 'Santos', 'Campelo']

// destructuring assignment com arrays
const [ firstName, lastName, ...rest ] = myName

/* 
   a variável precedida de reticências "..." significa que o restante dos itens
   que sobraram devem ser armazenadas na variável rest. Se sobrar mais de um 
   valor e dependendo do que está sendo desestruturado, a rest poderá ser um 
   array ou um objeto.
*/






























































