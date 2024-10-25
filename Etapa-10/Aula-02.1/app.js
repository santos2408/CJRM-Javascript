/*
	========= CONHECENDO A BIBLIOTECA DATE-FNS =========

	Para podermos utilizar os métodos e propriedades que a date-fns disponibiliza, 
	devemos declarar o objeto 'dateFns' e invocar o método e propriedade desejado.

	Consulte a documentação da biblioteca para verificar como funciona os métodos, 
	propriedades, parâmetros e argumentos.
*/

// data atual
const present = new Date()

// checando se a data informada como argumento é a data de hoje
// retorna um boolean
const today = dateFns.isToday(present)

// formatando datas passando um parâmetro obrigatório e dois opcionais
// o primeiro é a data que queremos formatar
// o segundo é uma string com os tokens que que definirão como será a formatação
// o terceiro é um objeto que contém opções extras de configuração, consultar doc
const day = dateFns.format(present, 'DD')
const month = dateFns.format(present, 'MM')
const year = dateFns.format(present, 'YYYY')
const fullDate = dateFns.format(present, 'DD/MM/YYYY')

// comparando duas datas
// recebe 3 argumentos, o último é opcional
// os dois primeiros serão as datas a serem comparadas
// o último será um objeto com algumas configurações extras
const past = new Date('Aug 24 1996 00:00:00')

dateFns.distanceInWords(present, past) // about 25 years
dateFns.distanceInWords(present, past, { addSuffix:true }) // about 25 years ago
