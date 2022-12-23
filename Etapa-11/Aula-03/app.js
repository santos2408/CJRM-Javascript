/* =========== FUNÇÕES DE CALLBACK =========== */

const getCharacters = callback => {
  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4
    
    if (isRequestOk) { // checking status
      callback(null, request.responseText)
      return
    }
  
    if (isRequestNotOk) {
      callback('Não foi possível obter os dados da API', null)
    }
  })
  
  request.open('GET', 'https://anapioficeandfire.com/api/houses')
  request.send()
}

getCharacters((error, data) => {
  console.log('Callback executado!')

  if (error) {
    console.log(error)
    return
  }
  console.log(data)
})

/* =========== TRABALHANDO COM JSON (JAVASCRIPT OBJECT NOTATION) =========== */

/*
  JSON é um formato para troca de dados que a maioria das API's retornam quando 
  um request é feito para ela. O formato dessa resposta é um JSON e ele se parece 
  com um array com diversos objetos, mas não são objetos, na verdade são 'strings' 
  que se parecem com array com diversos objetos dentro.

  O JSON precisa ser uma string porque quando um browser troca informações com 
  o servidor, essas informações precisam ser strings. Portanto quando a resposta 
  da requisição retornar, nós veremos uma string.

  Para ser possível acessarmos as informações do JSON dentro do JavaScript, nós 
  precisamos converter essas strings em objetos. Dentro do JavaScript existe um 
  objeto criado justamente para esse tipo de situação, chamado JSON.

  Para convertemos a resposta para objeto inserimos o objeto JSON, que é conhecido 
  como um objeto embutido do javascript, que veremos mais detalhes a frente, e 
  invocamos o método parse, passamos a resposta do request da API como argumento, 
  assim convertemos a resposta da API em objeto nativo do javascript.

  Portanto, um request geralmente retornará um formato de dado JSON em forma de 
  string, que para o javascript conseguir manipular é necessário convertê-lo para 
  objeto javascript. Esse conversão é feita utilizando um objeto nativo do JS 
  chamado 'JSON' e a partir dele invocamos o método 'parse' para realizar essa 
  conversão de JSON que é uma string para objeto javascript.

  OBS:
    * Ao criarmos arquivos .JSON não precisamos inserir strings, pois como já 
      estamos dentro de um arquivo JSON e esse tipo de arquivo só aceita strings, 
      ele já sabe que está sendo inserido strings, então não precisamos especificar 
      isso para ele.

    * Todo o conteúdo é envolto dentro de um "array" e cada propriedade do 
      "objeto" deve ser envolto de aspas duplas.

    * Quando os valores das "propriedades" forem strings, elas devem estar 
      obrigatoriamente também envoltas em aspas duplas. Qualquer valor diferente 
      pode ficar sem aspas.

    * Lembrando que o conteúdo do JSON não é array e objeto, apesar de parecerem, 
      mas sim strings que se parecem com arrays e objetos.
*/

const getCharacters = (url, callback) => {
  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4
    
    if (isRequestOk) {
      const data = JSON.parse(request.responseText) // parseando json
      callback(null, data)
      return
    }
  
    if (isRequestNotOk) {
      callback('Não foi possível obter os dados da API', null)
    }
  })
  
  request.open('GET', url)
  request.send()
}

/* =========== Callback Hell (Pyramid of Doom) =========== */

/* 
  Repare que esse código abaixo tem um formato de pirâmide, essa maneira é pouco 
  prática, ilegível e de difícil manutenção. Quando temos várias requests é isso 
  que acontece, na próxima aula veremos como evitar esse tipo de situação.
*/

getCharacters('./json/houses-01.json', (error, data) => {
  console.log(data)
  getCharacters('./json/houses-02.json', (error, data) => {
    console.log(data)
    getCharacters('./json/houses-03.json', (error, data) => {
      console.log(data)
    })
  })
})
