/* 
  ============= INTRODUÇÃO AO FIREBASE ============= 

  Antes de iniciarmos os estudos sobre o firebase, devemos antes saber o que é 
  um banco de dados. Database é um lugar para armazenarmos informações da aplicação, 
  coletando dados de forma organizada e podendo acessá-los posteriormente. Qualquer 
  tipo de dado por ser armazenado num database.

  Diferente do localStorage, que persiste dados apenas no navegador atual do 
  usuário, em outros dispositivos ou navegadores os dados não estarão salvos.

  Em aplicações web é importante persistir dados do lado do servidor, principalmente 
  se esses dados precisarem ser acessados em qualquer lugar e dispositivo. E para 
  isso existem dois tipos de banco de dados para usarmos em aplicações web.

  SQL (Structured Query Language): é uma linguagem de pesquisa para banco de 
  dados relacionais.

  Banco de Dados Relacional: baseado em esquemas, ou seja, para armazenarmos dados 
  nele usamos uma estrutura de banco baseada em tabelas, linhas e colunas. Esse 
  tipo de banco é popular em linguagem como PHP e Python.

  Banco de Dados Não Relacional (NoSQL): Não usa tabelas, linhas e colunas e sim 
  collections, documents e properties. NoSQL é um termo genérico para representar 
  um banco de dado nao relacional.

  O Firebase é um serviço de back-end que possui o Firestore, que é um banco de 
  dados noSQL. Trabalharemos com banco de dados noSQL pelo fato de serem mais 
  flexíveis ao realizar modificações nas suas estruturas de dados, isso nos facilita 
  no momento da criação da aplicação por não sabermos que estrutura o banco de 
  dados precisará ter no futuro, e com o noSQL poderemos adicionar e modificar as 
  estruturas sem grandes dificuldades.

  Firebase não é só um banco de dados, ele é uma plataforma de serviços back-end, 
  ele é conhecido também como BASS (back-end as a service). Além do banco de dados 
  existem outros serviços que podemos implementar na aplicação como autenticação, 
  links dinâmicos, relatório de craches, etc.

  Firestore é um banco de dados noSQL que o Goggle oferece através de um BASS 
  chamado Firebase.

  Utilizar o firebase nos deixa focar primeiro no desenvolvimento da aplicação, 
  pois não precisaremos construir a estrutura do banco de dados, ele já existe. 
  Além disso, o firebase é um serviço online, não precisamos dele localmente.

  ======= ESTRUTURA DO FIREBASE / CONHECENDO O FIRESTORE =======

  1 - Instância do Banco de Dados: é container para todas as informações, dentro 
  dele podem haver vários collections, cada collection pode representar um tipo 
  específico de informações.

  2 - Collections: representam um tipo de informação
      * Blog posts (Collection)
      * Comments (Collection)
      * Users (Collection)
      * Images (Collection)
      * Videos (Collection)
      * Games (Coolection)

  3 - Documents: Dentro de cada collection podem haver múltiplos documents, 
  cada document repsenta um único 'record', ou seja, uma única gravação das 
  informações, cada document terá um identificador único (id).

  3.1 - Dentro de cada document teremos uma estrutura semelhante a um objeto 
  com um par de chave e valor com as informações daquele document.

  Panorama geral de uma estrutura noSQL:

  -> Instância do Banco de Dados (Container)
    ->  Blog posts (Collection)
      -> document (Post1)
        -> fields { title: 'Praia', likes: 20, author: 'Roger' }
      -> document (Post2)
        -> -> fields { title: 'Festa', likes: 70, author: 'Maria' }
      -> document (Post3)
        -> -> fields { title: 'Viagem', likes: 14, author: 'João' }

*/

/*
  ============= CONECTANDO O FRONT-END AO FIREBASE ============= 

  Module: É uma forma de especificar que o código desse arquivo é um módulo 
  javascript, uma forma de dizer que o código desse arquivo está encapsulado em 
  escopo próprio e pode ser importado e exportado entre arquivos JS.

*/

// importando funções dos sdk's
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js'
import { getFirestore  } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js'
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js'

// objeto contendo a configuração do firebase para a aplicação
const firebaseConfig = {
  apiKey: 'AIzaSyDQPNObgws7ZSnHh8uHjmkKWGRrKBUhvF4',  
  authDomain: 'testing-firebase-d7a43.firebaseapp.com',  
  projectId: 'testing-firebase-d7a43',  
  storageBucket: 'testing-firebase-d7a43.appspot.com',  
  messagingSenderId: '289086234793',  
  appId: '1:289086234793:web:10e883d7d6ede1544049b8',  
  measurementId: 'G-W3G3F8BWHD'
}

// inicializando o firebase e o firestore
const app = initializeApp(firebaseConfig) // firebase
const database = getFirestore(app) // firestore
const collectionGames = collection(database, 'games')

const gamesList = document.querySelector('[data-js="games-list"]')

// ============= LENDO/OBTENDO DADOS DO FIRESTORE ============= 

/*
  o método getDocs realiza uma requisição/query ao banco de dados, nesse caso está 
  fazendo essa requisição assim que a página é carregada e está buscando os 
  dados contidos nesse banco.

  A getDocs recebe como argumento uma collection que retorna todos os documents 
  contidos dentro dessa collection. O resultado retornado pela getDocs é uma 
  promise contendo um 'querySnapshot', que é uma 'fotografia' ( ou representação )
  de como o collection solicitado no banco de dados se encontra no momento em 
  que o request foi executado. 

  Se repararmos, a 'querySnapshot' retornada contém em seu prototype um método 
  nativo dela chamado forEach em que cada iteração retornará um document do 
  collection, com isso podemos acessar os documents daquele collection. No 
  entanto, esse tipo de abordagem é estranha, pois estamos usando um forEach 
  não em um array e sim num objeto, não é errado mas é estranho.

  No entanto, podemos usar encontrar a propriedade 'docs' que retorna um array 
  com os documents do collection e aí sim nele podemos encadear um forEach nativo 
  do Javascript para poder realizar a iteração.

*/

getDocs(collectionGames)
  .then(querySnapshot => {
    const gamesLis = querySnapshot.docs.reduce((accumulator, doc) => {
      const { title, developedBy, createdAt } = doc.data()
  
      accumulator += `
        <li class='my-4' data-id='${doc.id}'>
          <h5>${title}</h5>
      
          <ul class='mb-2'>
            <li>Desenvolvido por ${developedBy}</li>
            <li>Adicionado no banco em ${createdAt.toDate()}</li>
          </ul>

          <button type='button' class='btn btn-danger' data-remove='${doc.id}'>Remover</button>
        </li>`
      
      return accumulator
    }, '')

    gamesList.innerHTML = gamesLis
  })
  .catch(console.log)

/*
  Nas próximas aulas veremos os problemas de segurança que o uso de innerHTML 
  apresenta, como por enquanto nós temos controle total sobre as 'lis' que são 
  inseridas na 'ul' e não estamos enviando informações para o banco de dados, 
  por enquanto usaremos innerHTML.

*/