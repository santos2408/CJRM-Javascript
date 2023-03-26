/*
  Variáveis evitam repetição (DRY - Don't repeat yourself)

  Podem iniciar com $, _, ou letras. Podem conter números mas não podem começar 
  por eles e também e case sensitive, o Javascript diferencia letras maiúsculas 
  de minúsculas. Existem algumas palavras que são reservadas do javacript e que 
  não podemos usar como nome de variável.

  Procure usar a técnica camel case (firstName) separadas os nomes por letra 
  maiúscula.

  Caso as variáveis declaradas contenham o mesmo nome (var, let ou const), é 
  possível sequencialas sem a necessidade de declaração o seu nome em todas as 
  declarações. Ex:

  const nome = 'Roger'
        idade = 26
        estado: 'Rio de Janeiro'

*/


/* ===== VARIÁVEL VAR =========================
  
  A declaração 'var' declara uma variável, opacionalmente é possível atribuir à 
  ela um valor em sua inicialização.

*/

var points = 50
age = 26
// escopo global e local
// atualmente está em desuso, mas ainda funciona
// pode-se declarar sem valor
// pode ser reatribuída
// recomenda-se usar apenas let e const pois são melhoras para trabalhar com escopos

console.log(points)
console.log(age)

// ===== VARIÁVEL LET =========================

// escopo local
// pode ser reatribuída com outro valor 
// pode ser declarada sem valor inicial
// não pode ser redeclarada com o mesmo nome

let age = 25
age = 50 // reatribuíção

let age = 30 // não pode redeclarar
let currentYear = 2022
let idade // sem valor

console.log(age, currentYear, idade)

// ===== VARIÁVEL CONST =========================

// escopo de bloco-local, não pode ser reatribuída.

const score = 100
// score = 150 -> erro, não é possível reatribuir valor numa constante

console.log(score)

// ============================================

var name = 'Roger'
let age = 26
const score = 100

/*

  Os tópicos abaixo apresentam algumas características e atenções que são 
  tomadas na hora de programar, essas práticas são conhecidas como 'clean code' 
  e qualidade de código.

  Evite nomear variáveis, objetos ou funções com acrônimos, trava-linguas, 
  abreviações ou siglas. O ideal é que eles tenham nomes que possam ser 
  pronunciados e pesquisados.

  Evite também deixá-las ambíguas, ou seja, que possam acabar confundindo e 
  deixando o programador com dúvidas sobre o que ela realmente armazena, isso 
  gerará pistas falsas que pode fazer com que você ou outro programador tire 
  conclusões equivocadas.

*/

// evite
const tmStmp = 10
const yyyymmdd = '12/12/2012'

const jp // Japao? Joao Paulo?
const l // linha? lista? lugar?

const maleUsersList = { // se tem list no nome porque que é um objeto ? não deveria ser um array ?
  // ...
}

// prefira
const timeStamp = 10
const currentDate = '12/12/2012'

const japan
const limao
const maleUsers {
  // ...
}

/*

  Utilize nomes que revelam uma intenção, seja explícito com os nomes, se 
  necessário, não economize no tamanho do nome. Isso evita que no futuro você 
  ou outros programadores tenham dificuldades em entender o que a variável 
  significa.

*/

// evite
const result = 5
const list = []

// prefira
const sumResult = 5
const usersList = []

/*

  Evite adicionar contexto desnecessário, isso fará você economizar tempo lendo 
  propriedades de objetos ou variáveis comuns.

*/

// evite
const person = {
  personName: 'Maria',
  personAge: 20,
  personEmail: 'maria@gmail.com'
}

// prefira
const person = {
  name: 'Maria',
  age: 20,
  email: 'maria@gmail.com'
}

/*

  Evite utilizar curto-circuito quando é possível utilizar default parameters 
  nas variáveis de funções. Isso deixará o código mais limpo e conciso, mas 
  lembre-se que o default parameter só será invocado quando a função tiver sido 
  invocada sem agumento, ou seja, quando seu argumento for undefined.

*/

// evite
const createBook = name => {
  const bookName = name || 'A Guerra dos Tronos' // curto-circuito
  // ...
}

// prefira
const createBook = (name = 'A Guerra dos Tronos') => {
  // ...
}


