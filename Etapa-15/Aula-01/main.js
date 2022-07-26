/* 
  ============= INTRODUÇÃO AO FIREBASE ============= 

  Antes de iniciarmos os estaduso sobre o firebase, devemos antes saber o que é 
  um banco de dados. Database é um lugar para armazenarmos informações da aplicação, 
  coletando dados de forma organizada e podendo acessá-los posteriormente. Qualquer 
  tipo de dado por ser armazenado num database.

  Diferente do localStorage, que persiste dados apenas no navegador atual do 
  usuário, em outros dispositivos ou navegaroes os dados não estarão salvos.

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

  Firebase não é só um banco de dados, ele é uma plataforma de serviços banck-end, 
  ele é conhecido também como BASS (back-end as a service). Além do banco de dados 
  existem outros serviços que podemos implementar na aplicação como autenticação, 
  links dinâmicos, relatório de craches, etc.

  Firestore é um banco de dados noSQL que o Goggle oferece através de um BASS 
  chamado Firebase.

  Utilizar o firebase nos deixa focar primeiro no desenvolvimento da aplicação, 
  pois não precisaremos contruí-lo, ele já existe. Além disso, o firebase é um 
  serviço online, não precisamos dele localmente.

  ==== ESTRUTURA DO FIREBASE ====

  1 - Instância do Banco de Dados: é container para todas as informações, dentro 
  dele podem haver vários collections, cada collection pode representar um tipo 
  específico de informações.

  2 - Collections: representam um tipo de informação
      * Blog posts (Collection)
      * Comments (Collection)
      * Users (Collection)
      * Images (Collection)
      * Videos (Collection)
  
  3 - Documents: Dentro de cada collection podem haver múltiplos documents, 
  cada document repsenta um único 'record', ou seja, uma única gravação das 
  informações, cada document terá um identificador único (id).

  3.1 - Dentro de cada document teremos uma estrutura semelhante a um objeto 
  com um par de chave e valor com as informações daquele document.

  Panorama geral de uma estrutura noSQL:

  -> Instância do Banco de Dados (Container)
    ->  Blog posts (Collection)
      -> document (Post1)
        -> document { title: 'Praia', likes: 20, author: 'Roger' }
      -> document (Post2)
        -> -> document { title: 'Festa', likes: 70, author: 'Maria' }
      -> document (Post3)
        -> -> document { title: 'Viagem', likes: 14, author: 'João' }

*/

/*
  ============= CONECTANDO O FRONT-END AO FIREBASE ============= 

  Module: É uma forma de especificar que o código desse arquivo é um módulo 
  javascript, uma forma de dizer que o código desse arquivo está encapsulado em 
  escopo próprio e pode ser importado e exportado entre arquivos JS.

*/

// importando funções das url's
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js'
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js'

// objeto contendo a configuração do firebase para a aplicação
const firebaseConfig = {
  apiKey: 'AIzaSyDte0hL0LHxTRlOB7r5Sc5qmMUse1WJ864',
  authDomain: 'testing-firebase-5ed97.firebaseapp.com',
  projectId: 'testing-firebase-5ed97',
  storageBucket: 'testing-firebase-5ed97.appspot.com',
  messagingSenderId: '474232893970',
  appId: '1:474232893970:web:57dc954fa890610050decb',
  measurementId: 'G-P2N4FN0015'
}

// inicializando o firebase e o firestore
const app = initializeApp(firebaseConfig)
const database = getFirestore(app)
const myCollection = collection(database, 'games')

getDocs(myCollection)
  .then(querySnapshot => {
    const gamesLis = querySnapshot.docs.reduce((acc, doc) => {
      const { title, developedBy, releaseDate} = doc.data()

      acc += `
        <li class="my-4">
          <h5>${title}</h5>          
          <ul>
            <li>Desenvolvedora: ${developedBy}</li>
            <li>Data de lançamento: ${releaseDate.toDate()}</li>
          </ul>
        </li>`
        return acc
    }, '')

    const gamesList = document.querySelector('[data-js="games-list"]')
    gamesList.innerHTML = gamesLis
  })