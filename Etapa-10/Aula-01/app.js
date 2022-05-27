/*
=========== DATE OBJECT ===========

Em JavaScript datas são um tipo de objeto, e por serem um objeto eles são um 
tipo referência e não primitivo. Representam um momento único no tempo. Esse 
objeto contém um número representado em milisegundos contados desde 1 de Janeiro 
de 1970.

Para começar criaremos um objeto que representa uma data. E para fazermos isso 
precisaremos usar um date constructor. 

Em javascript existem vários construtores, eles basicamente 'constroem' algum 
tipo de objeto. Pense que ao instanciar uma função construtora, essa função está 
criando um objeto com seus métodos e propriedades.

Para que um novo objeto do tipo data seja criado a partir de uma função que 
constrói esse objeto, antes de inserir o construtor precisamos inserir o 
operador 'new', que irá instanciar a função construturoa. Fazendo isso teremos 
um novo objeto do tipo data.

Se não inserirmos o operador 'new' antes da função construtora, ou seja, se 
apenas invocarmos a função construtora, ela nos retornará uma data do tipo string 
e não do tipo object, portanto será do tipo string e não terá os métodos e 
propriedades para utilizarmos. Por isso a importância do 'new'.

Portanto, se invocarmos o construtor Date() como uma função, ele retorna um string 
com a data atual. E se chamarmos o construtor Date() de fato como um construtor 
utilizando o 'new', então ele retornará um novo objeto do tipo Date.

Quando uma data é criada em javascript, automaticamente a data que é gerada é 
correspondente ao tempo atual, ou seja, ao momento em que o arquivo está sendo 
executado.

Date(): objeto construtor
new: cria uma instância do objeto criado pelo usuário ou JavaScript. Ex: Date()

*/

/*
   Através dos métodos de instância do objeto Date podemos obter datas específicas.

   Vale lembrar que, para algumas datas o javascript conta a partir da base 0.
   Por exemplo: Para os métodos getMonth e getDay, as datas começam na base 0. 
   Ou seja, Janeiro = 0 e Domingo = 0.
*/

// criando e armazenando um objeto do tipo Date
const present = new Date() // data atual / objeto date

// obtendo as datas através de métodos
console.log('getFullYear:', present.getFullYear()) // ano completo
console.log('getMonth:', present.getMonth()) // mês em base 0
console.log('getDate:', present.getDate()) // dia do mês
console.log('getDay:', present.getDay()) // dia da semana
console.log('getHours:', present.getHours()) // horas
console.log('getMinutes:', present.getMinutes()) // minutos 
console.log('getSeconds:', present.getSeconds()) // segundos
console.log('getMilliseconds:', present.getMilliseconds()) // milisegundos
console.log('getTime:', present.getTime()) // milisegundos passados desde 01/01/1970

// atenção!
const present = Date() // data atual / mas é apenas uma string

/*
   ==== TIMESTAMPS ====

   Timestamp é um valor que representa uma data em um formato que é reconhecido 
   pelo método Date.parse(). O timestamp é representado pelo número de 
   milisegundos passados desde 01 de Janeiro de 1970. Através dele podemos 
   comparar duas datas. Veja:
*/

// data atual
console.log('present:', present)

// milisegundos passados desde 01/01/1970
console.log('timestamp:', present.getTime()) // timestamp

// retorna uma string num padrão com dia da semana, mês, data do dia, ano
console.log('toDateString:', present.toDateString())

// retorna hora, fuso e horário padrão local
// semelhante a invocação do Date()
console.log('toTimeString:', present.toTimeString())

// retorna data em formato numérico padrão americano e horário local.
console.log('toLocaleString:', present.toLocaleString())

// =========== TIMESTAMPS E COMPARAÇÕES ===========

// criando e armazenando objeto Date
const pastDate = new Date('Aug 24 1996')
const presentDate = new Date()

// obtendo timestamp
pastDate.getTime()
presentDate.getTime()

// comparando duas datas com timestamp
const difference = presentDate.getTime() - pastDate.getTime()

// convertendo os dados
const seconds = Math.round(difference / 1000)
const minutes = Math.round(seconds / 60)
const hours = Math.round(minutes / 60)
const days = Math.round(hours / 24)
const months = Math.round(days / 30)
const years = Math.round(months / 12)

console.log({ seconds })
console.log({ minutes })
console.log({ hours })
console.log({ days })
console.log({ months })
console.log({ years })

// Podemos também receber um timestamp aleatório e transformar ele em um objeto de data. 
const timestamp = new Date(1649954142439)
console.log(timestamp)
