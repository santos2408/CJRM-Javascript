// ===== VARIÁVEL VAR =========================

var points = 50
age = 26
// atualmente está em desuso, mas ainda funciona
// pode-se declarar sem valor
// recomenda-se usar apenas let e const pois são melhoras para trabalhar com escopo

console.log(points)
console.log(age)

// ===== VARIÁVEL LET =========================

// escopo global e local, pode ser reatribuída e declarada sem valor
// não pode ser redeclarada

let age = 25
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

