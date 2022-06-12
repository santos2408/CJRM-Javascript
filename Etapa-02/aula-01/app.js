// ===== CONTROLE DE FLUXO =========================

/*
   Em alguns momentos do código será necessário decidir quais ações devem ser
   executadas e qual pedaço de código é preciso executar repetidas vezes. Devido
   a isso, é necessário utilizar um controle de fluxo do código para direcionar o
   comportamento de execução do mesmo.

   Ao utilizar loops é possível percorrer uma determinada cadeia de dados, por
   exemplo um array, e executar um código para cada item dentro desse array, para
   que algum código seja executado. Loop é um tipo de controle de fluxo.

   Em alguns pontos do código é desejado verificar se uma condição é verdadeira,
   e portanto, seja executado determinado código com base no resultado dessa
   condição. Esse tipo de verificação é chamado de estrutura condicional ou
   conditional statement.

   Existe algumas variações e tipos diferentes de loops e estruturas condicionais
   que seráo apresentados ao longo do treinamento.
*/

// ============ FOR LOOP CLÁSSICO ============

/*
   É o loop mais usado, o mais popular. O propósito de todo loop é executar
   o pedaço de um código repetidas vezes. Todo código que se encontra entre
   chaves { } é chamado de bloco de código, o código de dentro corresponde
   apenas aquele bloco.

   Dentro do loop existem 3 expressões separados por ponto e vírgula. A primeira
   expressão inicializa a variável, normalmente com 0 e é chamada de contador.
   Por padrão e boas práticas nomea-se com 'i'. 

   A segunda expressão será uma condição que retornará um boolean, que sendo 
   true executará o bloco de código do for e sendo false sairá do loop.

   A terceira expressão será um incremento, que será executada sempre
   no final de cada execução do bloco de código.
*/

for (let i = 0; i < 5; i++) {
   console.log(`Dentro do loop: ${i}`)
}

console.log('Loop concluído')

console.log('===================================')

/*
   É possível percorrer um array simples ou vindo de um banco de dados onde
   não sabemos a quantidade de itens que existe dentro dele. Utilizando
   a propriedade length, é possível iterar sobre todos os itens mesmo não
   sabendo a quantidade dele.

   Podemos também criar um template de código HTML para iterar os itens dentro
   de uma tag HTML.
*/

const names = ['Linus', 'Ada', 'Bill']

for (let i = 0; i < names.length; i++) {
   const HTMLTemplate = `<p>${names[i]}</p>`
   console.log(HTMLTemplate)
}

console.log('===================================')

// ============ FOR IN ============

/*
   Esse tipo de loop é semelhante ao clássico, no entanto ao invocarmos, ele 
   irá iterar pelo índice de um array ou chave de um objeto e podemos obter o valor. 
   Diferente do for clássico que é um tipo de contatador que percorre os elementos, 
   o for in irá percorrer os índices e obter o valor de cada um, para todos.
*/

const frutas = ['Banana', 'Maçã', 'Pera', 'Laranha']
const pessoa = { nome: 'Roger', idade: 25, estado: 'Rio de Janeiro' }

// percorre os índices
for (let indice in frutas) {
   console.log(frutas[indice])
}

// percorre as chaves
for (let chave in pessoa) {
   console.log(pessoa[chave])
}

// ============ FOR OF ============

// === WHILE LOOP ==========

/*
   Igual ao for, tendo como diferença apenas a sintaxe, ou seja, a forma
   de escrevê-lo.

   No while se coloca apenas uma expressão de condição, caso seja verdadeira, o
   bloco é executado.

   Vale lembrar que a variável contador é declarada fora do while loop e antes
   do loop começar a ser lido.

   Cuidado para não esquecer de adicionar um incremento na variável contador,
   pois sem ele o loop irá executar o bloco infinitamente. Nesse caso, o incremento
   é inserido no final da declaração depois de toda execução do bloco de código.

   Da mesma forma do for, é possível iterar sobre um array

*/

let i = 0

while (i < 5) {
   console.log(`Dentro do loop: ${i}`)
   i++
}


