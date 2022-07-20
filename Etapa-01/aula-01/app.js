/*
  ======== TÓPICAS DESTA AULA ========

    - VARIÁVEIS

*/


// ===== VARIÁVEL VAR =========================

var points = 50
age = 26
// atualmente está em desuso, mas ainda funciona
// pode-se declarar sem valor
// recomenda-se usar apenas let e const pois são melhoras para trabalhar com escopo

console.log(points)
console.log(age)

// ===== VARIÁVEL LET =========================

// escopo global e local
// pode ser reatribuída com outro valor
// pode ser declarada sem valor inicial
// não pode ser redeclarada com o mesmo nome

let age = 25
let age = 30 // não pode redeclarar
let currentYear = 2022
let idade

console.log(age, currentYear)

// ===== VARIÁVEL CONST =========================

// escopo local e global, não pode ser reatribuída.

const score = 100
// score = 150 -> erro, não é possível reatribuir valor numa constante

console.log(score)

// ============================================

var name = 'Roger'
let age = 26
const score = 100

