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