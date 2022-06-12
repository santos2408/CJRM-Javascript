// ====== VARIÁVEIS E ESCOPO DE BLOCO =========================

/*
   Escopo de bloco é a área em que o valor de uma variável está disponível
   pra gente.

   Quando declaramos uma variável fora de um bloco de código, ou seja, na raiz 
   do documento javascript, essa variável terá um escopo global. Ou seja, ela
   poderá ser acessada ou usada em qualquer lugar do arquivo, tanto fora ou
   dentro de blocos de código. 

   É possível modificar o valor da variável global dentro de um bloco de código.

   Não podemos redeclarar uma variável com mesmmo nome dentro do mesmo escopo, 
   tanto na raiz do documento quanto dentro de um bloco de código. Mas podemos criar 
   uma variável de mesmo nome desde que ela esteja em escopos diferentes, ou seja, 
   é possível ter uma variável de mesmo nome no escopo global e outra no escopo 
   local.

   Variáveis criadas dentro de um bloco de código só podem ser acessadas nesse
   bloco, não é possível acessá-la fora do bloco. Mas se numa função você
   retornar essa variável, aí funciona normalmente do lado de fora.

   Se tivermos blocos de códigos aninhados, o bloco irá acessar a variável mais
   próxima dele, digamos que a "global" dele, ou seja, sempre subindo um bloco
   que será o bloco anterior. Caso o bloco anterior não contenha variáveis, ele 
   irá acessar a variável de escopo global na raiz do documento. Pense em
   hierarquias.

   As regras de escopo se aplicam para ambas as variáveis let e const.

   O conceito de escopo de bloco demonstra a vantagem de se usar let e const
   ao invés de var, pois a variável 'var' ignora escopo de bloco, ou seja,
   ela continua como escopo global e mesmo dentro de um bloco de código, 
   é possível acessá-lá no escopo raiz.
*/

// escopo global, acessada em qualquer lugar.
let age = 25

if (true) {
   // escopo local, acessada apenas no bloco.
   let age = 30
   let name = 'Roger'

   console.log(`Dentro do 1º bloco de código: ${age} ${name}`) // 30 Roger

   if (true) {
      let age = 51
      console.log(`Dentro do 2º bloco de código: ${age}`) // 51

      var test = 'Oi'
   }
}

console.log(`Fora do bloco de código: ${age} ${name} ${test}`) // 25

// ====== A PALAVRA-CHAVE THIS =========================

/*
   Estando dentro do objeto, para acessar uma propriedade deste mesmo objeto
   devemos inserir a palavra-chave this seguido da propriedade para podermos
   acessar o seu valor.

   O this irá referenciar o objeto, mas não pense que o this é o mesmo que 
   colocar o nome do objeto. Mesmo funcionando desta maneira o this na verdade
   é um objeto de contexto, ou seja, ele representa o contexto no qual o código
   atual está sendo executado. Dependendo de onde ou como se usa o this, o valor
   dele irá mudar.

   Se utilizarmos o this na raiz do documento, ele irá referenciar o contexto
   global, ou seja, o window object (objeto window).

   Quando invocamos um método, o javascript define o this como o objeto no qual
   o método está sendo usado. Por exemplo:

   user.logBlogPost()

   Nesse momento o javascript pegou o this, definiu ele como objeto 'user' e
   está disponibilizando dentro do bloco essa referência para ser acessada. 
   Apenas dentro do bloco do objeto user o this irá representar o user. 
   Ou seja, dependerá do contexto, em outro objeto ele será diferente.

   Como estamos referenciando o objeto através do this, é possível acessar
   suas propriedades normalmente com notação de ponto ou colchetes.
*/

let user = {
   name: 'João',
   age: 31,
   email: 'joaocardoso@gmail.com',
   city: 'São Paulo',
   blogPosts: ['Empadão de Frango', '4 receitas de purê de batata'],
   login () {
      console.log('Usuário logado.')
   },
   logout () {
      console.log('Usuário deslogado.')
   },
   logBlogPosts (){
      console.log(`${this.name} escreveu os seguintes posts:`)

      this.blogPosts.forEach(post => {
         console.log(post)
      })
   }
}

// dentro do objeto user, o this está referenciando o próprio objeto user.
user.logBlogPosts()

/*
   Atenção:

   Ao declarar um método que estará usando o this, atente-se ao uso das
   function declarations, pois apenas com elas o this se comprota desta maneira.
   Ou seja, referenciando o objeto do contexto.

   Se utilizarmos arrow functions, o this irá referenciar o objeto referente ao 
   local onde o método está sendo invocado. Ou seja, se invocarmos o método no escopo
   global, onde o javascript define o contexto do this, o this irá referenciar
   o objeto window, pois a invocação se encontra na raiz. Ele não irá visualizar
   o objeto literal desejado.

   Utilize FUNCTION DECLARATION AO USAR THIS
*/

/*
   ENCURTANDO UM MÉTODO DENTRO DO OBJETO:

   Podemos escrever a função do objeto com uma sintaxe mais curta, pois o 
   javascript também entenderá que a função é uma function declaration, procure
   utilizar o shorcut por boas práticas. Exemplo:
*/

let user = {
   // forma completa
   login: function () {
      console.log('Usuário logado.')
   },

   // forma mais curta (shortcut) / boas práticas
   login () {
      console.log('Usuário logado.')
   }
}







































































