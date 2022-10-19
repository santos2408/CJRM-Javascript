// === OPERADOR NOT (!) ==========

/*
   A condicional IF só executa o bloco de código que for verdadeiro. O operador
   NOT (!) será usado quando se quer executar a condicional que resulte em false.

   // !"" = true 
   // !true = false
   // !'Cat' = false
   // !0 = true
   // !null = true
   // !false = true
*/

/*
   É possível também adicionar múltiplos operadores NOT numa mesma expressão,
   a cada NOT inserido o valor será invertido.
*/

// !!false = false
// !!"" = false
// !!true = true
// !!'Cat' = true

// === BREAK E CONTINUE ==========

/*
   'Break' é utilizado para parar/quebrar a execução do loop caso certa condição 
   seja verdadeira. Quando isso acontece, mesmo que os itens iterados até aquele 
   momento seja menor do que a quantidade de itens do array, o break irá parar 
   a execução do loop e sairá do for.

   'Continue' é utilizado para continuar a execução do código caso determinada 
   condição de um bloco de código seja verdadeira. Se for true, o bloco de 
   código onde se encontra o 'continue' será executado e toda expressão após 
   será ignorada. O 'continue' irá pular para a próxima iteração do loop.

   'Continue' pula uma iteração em particular e faz o loop continuar a ser 
   executado, se o bloco for true, os blocos seguintes serão ignorados e o loop 
   passará para a próxima iteração, ou seja, para o próximo índice.
*/

const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < scores.length; i++) {
   if (scores[i] === 0) {
      continue
   }

   console.log(`Sua pontuação: ${scores[i]}`)

   if (scores[i] === 100) {
      console.log('Parabéns, você atingiu a pontuação máxima!')

      break // quebra o loop
   }
}

// === SWITCH ==========

/*
   Sendo também um controle de fluxo, muitas vezes é utilizado como alternativa 
   no lugar de if para evitar a repetição de condições. Usado para verificar 
   múltiplos valores diferentes de uma variável ou constante, e para cada valor 
   possível, ter a possibilidade de reagir de forma diferente.

   Ao abrir o switch, o bloco pode receber uma série de cases de possibilidades 
   que a variável ou constante pode ter. Ao final do switch, o bloco recebe um 
   valor default que será executado caso nenhum dos cases seja avaliado como true.

   É necessário adicionar um comando break em cada case verificado para que 
   caso o case seja true, o loop seja parado. Não é necessário adicionar break 
   no default pois se nenhum for true, automaticamente o default será executado.
   Também não é obrigatório definir o default no final do código, mas por convenção
   é o melhor local.

   Ao utilizar switch dentro de funções, o operador BREAK pode ser omitido já
   que o return irá fazer o "papel" dele no lugar, então se o switch retornar
   um valor em cada case, não precisa colocar o break também, pode-se inserir no 
   lugar o 'return'.
*/

const grade = 'B'

switch (grade) {
   case 'A':
      console.log('você tirou nota A')
      break
   case 'B':
      console.log('você tirou nota B')
      break
   case 'C':
      console.log('você tirou nota C')
      break
   case 'D':
      console.log('você tirou nota D')
      break
   case 'E':
      console.log('você tirou nota E')
      break
   default:
      console.log('nota inválida')
}