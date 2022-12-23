/* =========== FAZENDO REQUESTS HTTP =========== */

/*
   Para iniciarmos uma requisição HTTP precisamos primeiramente criar um objeto 
   de request através de uma instância do objeto XMLHttpRequest utilizando new.

   Antes do JSON se tornar o padrão usado para troca e armazenamento de informações 
   entre sistemas, o XML que é um outro padrão também para troca de informações 
   era usado. No entanto, atualmente, o objeto de request XMLHttpRequest pode 
   trabalhar com qualquer tipo de dado: JSON, XML, entre outros. Esse objeto 
   será usado para que o browser envie um request para o servidor, atualmente o 
   mais o comum é o JSON.

   // MÉTODO OPEN()
   
   Para iniciarmos a requisição invocaremos o método open(), esse método irá 
   iniciar uma requisição recém-criada ou reinicializará uma já existente. Repare
   que se chamarmos um método para uma requisição já ativa, ele irá se comportar 
   igual ao método abort().

   Para obtermos dados de outro lugar, passaremos como argumento do método open() 
   o método 'GET', que é um dos métodos de requisição HTTP. Quando usamos o 'GET' 
   o servidor entenderá que desejamos apenas OBTER informações de lá. Existem 
   métodos como 'GET, 'POST', 'PUT', 'DELETE', 'PATH' entre outros.

   O segundo argumento do método open() será o endpoint, uma URL para o qual 
   queremos enviar o request e obter os dados.

   // MÉTODO SEND()

   Em seguida invocamos o método send() para enviarmos a solicitação para o local 
   desejado. Esse método aceita um parâmetro opcional, que é chamado de body 
   parameter, normalmente inserido quando a solicitação for com método 'PUT'. 
   Mas se a solicitação é por meio de 'GET' ou 'HEAD' esse body parameter é ignorado 
   e o parâmetro será definido implicitamente como null, podemos também inserir 
   esse null explicitamente.

   Para descobrirmos se as respostas foram obtidas e como podemos acessar esses 
   dados, devemos 'trackear' o processo da requisição através de um EventListener 
   passando um evento do objeto XMLHttpRequest chamado 'readyStateChange'. Esse 
   evento é disparado sempre que a propriedade 'readyState' do objeto tem uma 
   mudança de estado.

   readyStateChange: evento que dispara quando o estado de um request é alterado.
   request.readyState: retorna o estado em que um cliente XMLHttpResquest está.

   O cliente XMLHttpRequest contém 5 estados:
      - 0: UNSENT
      - 1: OPENED
      - 2: HEADER_RECEIVED
      - 3: LOADING
      - 4: DONE
*/

const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
   // verificando o estado do XMLHttpRequest para ver se foi finalizado
   if (request.readyState === 4) {
      console.log(request, request.responseText)
   }
})

request.open('GET', 'https://anapioficeandfire.com/api/characters/583')
request.send()

/* 
   STATUS DE REQUEST

   Ao verificarmos se a resposta foi obtida através do readyState === 4 ficamos 
   sabendo se tudo ocorreu bem. No entanto, só isso não é o suficiente, porque 
   mesmo que a requisição venha a ocorrer algum tipo de erro, por exemplo um 
   endpoint inválido, mesmo assim o request passará por todos os status de resposta
   chegando no último que é o 4.

   Quando o request é feito sem gerar nenhum erro, o status do request terá '200' 
   como valor. Caso o request ocorra algum erro, o status retornará '404'. 
   Portanto, para assegurarmos que a verificação do request foi obtida com sucesso 
   e assim podermos fazer algo com ela, nós podemos também verificar o status da 
   requisição.
*/

request.addEventListener('readystatechange', () => {
   if (request.readyState === 4 && request.status === 200) { // checking status
      console.log(request, request.responseText)
   }
})
