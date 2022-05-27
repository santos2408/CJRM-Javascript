// ========== O EVENTO SUBMIT ==========

/*
   Na etapa passada, quando queriamos adicionar um evento de clique no elemento, 
   nós atrelavamos um listener de evento diretamente em quem seria clicado. Só que
   quando queremos escutar o envio de um formulário, ao invés de atrelarmos o 
   listener de evento no botão de formulário, nós atrelamos ao <form> em geral. 
   Porque no fim das contas o que está sendo enviado é o form e não o botão.

   Nesse caso o que queremos é o submit desse form, o envio dele. Para isso 
   vamos referenciar o formulário e passar um listener de evento nele.

   O listener de evento específico para formulários é o evento 'submit'. Esse 
   evento será disparado quando o botão do form for clicado, se o input estiver 
   selecionado ou se o usuário presisonar a tecla 'enter'.

   Um comportamento padrão do evento 'submit' é que sempre que o formulário é 
   enviado, o evento 'submit' recarrega toda a página HTML. Em muitos casos esse 
   comportamento não será desejado e portanto podemos impedir esse reload 
   através do método 'preventDefault()' do objeto event.

   Para obtermos a informação passada no input do formulário, primeiro devemos 
   referenciar esse input, para podermos obter informações do elemento. Existem 
   3 formas possíveis para obtermos o valor do input, são elas:
   
   1ª FORMA DE OBTER O VALOR DO INPUT: O input contém uma propriedade chamada 
   'value', é possível passar um valor padrão para ele diretamente pelo HTML por 
   fins didáticos, mas ela é uma propriedade do input. Recebe o valor que o 
   usuário digitou no input, portanto, através dela conseguimos visualizar o 
   que foi inserido.

   2ª FORMA DE OBTER O VALOR DO INPUT: Quando um input dentro de um formulário 
   contém um ID/NAME, nós podemos obter a referência desse input através da 
   referência do form e do ID/NAME do input. Se passarmos o ID/NAME como 
   uma propriedade do elemento form, o JS irá obter o elemento que contém o 
   ID/name dentro do form. E para obtermos o valor basta encadearmos a 
   propriedade value.

   3ª FORMA DE OBTER O VALOR DO INPUT: Essa última forma pode ser útil caso 
   esteja trabalhando com formulários dentro da biblioteca ReactJS. Através do 
   objeto 'event' recebido após o listener de evento, podemos obter o value 
   acessando o target do evento e pegando o valor do ID/NAME desse target.
*/

const form = document.querySelector('.signup-form')
const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
   event.preventDefault() // prevenindo reload da página

   usernameInput.value // valor de input através de value, precisa dar query
   form.username.value // procurando input com ID/NAME username dentro do form e obtendo valor
   event.target.username.value // obtendo valor do input com ID/NAME, ajuda no ReactJS
})

// ========== O EVENTO INPUT ==========

/*
   O evento input executa a sua função de callback quando o valor input do 
   formulário for modificado.

   Pode ser confundido com o keyup, que executa a função quando uma tecla é 
   liberada do teclado. Em alguns casos é melhor usar o input, pois se quisermos 
   enviar um formulário apertando a tecla 'enter' o evento keyup sempre vai 
   disparar e pode causar um bug indesejado.
*/


// ========== EXPRESSÕES REGULARES (REGEX)==========

/*
   Quando os usuários inserem informações nos formulários, geralmente esperamos 
   que essas informações deem 'match' com certos padrões de preenchimento do 
   input, para analisarmos a quantidade de caracteres, ou se o caracter é inválido 
   e assim por diante.

   Utilizando expressões regulares podemos checar o valor do input e conferir se 
   ele está de acordo com o padrão estabelecido para ele. Se estiver, o formulário 
   é enviado.

   Regex são usadas em várias linguagem de programação e são uma abreviação para
   expressões regulares (regular expression). Regex são padrões usados para dar 
   'match' em combinações de caracteres em strings. O estudo de regex's é muito 
   vasto e denso, com muitas possibilidades.

   Exemplo:

   Para um campo de nome de usuário, um padrão que pode ser estabelecido é que 
   ele tenha de 6 a 10 caracteres, que só contenha números e letras e não 
   contenha espaços em branco ou caracteres especiais.

   Então para usarmos regex iremos definir o padrão que vai dar 'match' nas 
   informaçãoes que o usuário inserir e verificar se é válida ou não.

   * Toda expressão regex começa e termina com barra '/'.

   Exemplos de regex: 
   
   1) /javascript/

   Dá 'match' numa string chamada javascript, independente se a palavra está 
   sozinha, envolta de outras palavras ou unida a outros caracteres, a regex 
   só conseguirá dar 'match' se encontrar esse padrão de caracteres.

   2) /^javascript$/

   Se quisermos que a regex aceite apenas a palavra javascript sem que tenha 
   nada após ou antes dela, devemos usar o acento cicunflexo ^ no início e 
   cifrão $ no final da regex. Ou seja, o 'match' só irá acontecer se a palavra 
   javascript for o final do valor do input e também o começo do valor do input. 
   Ou seja, se estiver sozinha no campo de texto.

   3) /^[a-z]$/

   Os colchetes são chamados de 'caracter set', eles são uma lista que dão 'match' 
   com qualquer caracter que for inserido dentro dele. Nesse caso estamos dando 
   'match' de 'a' até 'z' minúsculos. Vale lembrar que essa expressão só dá 'match' 
   com um único caracter.

   4) /^[a-zA-Z0-9]$/

   'Match' com qualquer caracter de 'a' até 'z' minúsculo e de 'A' até 'Z' 
   maiúsculo e também caracteres de 0 a 9. Lembrando que o 'match' é dado em 
   apenas um único caracter, mais de um ela não aceitará.

   5) /^[a-zA-Z0-9]{6,10}$/

   A abertura e fechamento de chaves { } representa um quantificador que indica 
   a quantidade de caracteres que queremos dar 'match'. Nesse caso está sendo 
   informado que é pra dar 'match' nos caracteres informados e deve-se aceitar 
   apenas a quantidade mínima de 6 caracteres e no máximo 10 caracteres. Se o 
   valor do input tiver menos de 6 caracteres e mais do que 10, o 'match' não 
   será dado.

   6) /^.{6,10}$/

   Repare o caracter ponto '.' no início da regex, ele informa que pode ser 
   inserido qualquer caracter no input. Ou seja, letras, especiais, números, 
   todos dentro de no mínimo 6 e máximo 10 caracteres.
*/

// ========== TESTANDO PADRÕES REGEX ==========

const form = document.querySelector('.signup-form')
// const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
   event.preventDefault() // 
   
   console.log(event.target.username.value) // estilo ReacJS
})

const username = 'rogersantos'
const pattern = /^[a-z]{6,}$/

const result = pattern.test(username) // método de regex / boolean *
const result2 = username.search(pattern) // método de string


/*
   Para especificar que a regex tenha no mínimo 6 caracteres mas não tenha um 
   valor máximo, basta deixar a vírgula e omitir o valor máximo.

   O test() é um método de regex que tenta dar um 'match' na string passada 
   como argumento. Se o 'match' for feito, o método retornará um boolean.

   O search() é um método de string que testa a 'regex' e se for dado 'match' 
   retorna o index inicial onde o 'match' aconteceu.

   Recomenda-se utilizar o método test()
*/





