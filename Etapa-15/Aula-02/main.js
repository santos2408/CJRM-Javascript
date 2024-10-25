import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js'
import { getFirestore  } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js'
import { collection, getDocs, addDoc, serverTimestamp, doc, deleteDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: 'AIzaSyDQPNObgws7ZSnHh8uHjmkKWGRrKBUhvF4',  
  authDomain: 'testing-firebase-d7a43.firebaseapp.com',  
  projectId: 'testing-firebase-d7a43',  
  storageBucket: 'testing-firebase-d7a43.appspot.com',  
  messagingSenderId: '289086234793',  
  appId: '1:289086234793:web:10e883d7d6ede1544049b8',  
  measurementId: 'G-W3G3F8BWHD'
}

const app = initializeApp(firebaseConfig)
const database = getFirestore(app)
const collectionGames = collection(database, 'games')

const gamesList = document.querySelector('[data-js="games-list"]')
const formAddGame=  document.querySelector('[data-js="add-game-form"]')

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
  =============== SALVANDO INFORMAÇÕES NO FIRESTORE ===============

  Para adicionar um document no banco de dados, devemos utilizar a função 'addDoc'
  que recebe como primeiro argumento a referência do collection no qual o document 
  deve ser adicionado e como segundo argumento recebe um objeto que representa 
  o document que será criado nesse collection.

  a 'addDocs' além de criar o document para o collection, também cria um ID 
  aleatório para o document criado, o ID gerado é parecido com o ID gerado 
  automaticamente no firebase para os documents. Na maioria dos casos, deixe 
  o firestore criar esse ID aleatório, garantindo assim a aleatoriedade do ID.

  Repare que estamos inserindo como propriedade do novo document uma data de 
  criação e não estamos usando o 'new Date' para setar essa data. Isso porque 
  o 'new Date' cria a data atual de acordo com o client-side, ou seja, com base 
  no horário do computador do usuário, e isso pode gerar problemas caso o usuário 
  esteja com o horário incorreto e a aplicação precisa das horas corretas.

  Para evitar a criação da data no client-side, nós iremos pedir que o firestore 
  armazena a informação de data dentro do servidor, com isso importamos a função 
  serverTimestamp que irá criar a informação de data dentro do servidor.

  A função addDoc, além de criar o document no banco de dados, ela também retorna 
  uma promise que contém a referência desse mesmo document criado.

*/

formAddGame.addEventListener('submit', event => {
  event.preventDefault()
  
  addDoc(collectionGames, {
    title: event.target.title.value,
    developedBy: event.target.developer.value,
    createdAt: serverTimestamp()
  })
  .then(doc => console.log('Document criado com o ID ' + doc.id))
  .catch(console.log)
})

/*
  Como ainda não temos 'realtime listeners' na aplicação, é preciso atualizar a 
  página para que a 'getDocs' busque os novos documents criados e adicionado 
  no servidor.

*/

/*
  =============== DELETANDO INFORMAÇÕES NO FIRESTORE ===============

  Para deletarmos uma informação do banco de dados, primeiro precisamos obter 
  a referência do document desejado dentro do servidor.
  
  Para isso usamos a função 'doc' que recebe como primeiro argumento a referência 
  do banco de dados, como segundo argumento recebe o nome da 'collection' e como 
  terceiro argumento recebe o ID do document contido no banco de dados.

  Após obter a informação do 'document' no banco de dados, agora precisaremos 
  usar a função 'deleteDoc' para deletar esse 'document' dentro do servidor. A
  'deleteDoc' recebe como argumento a referência do 'document' obtido no servidor 
  e retorna uma promise.

*/

gamesList.addEventListener('click', event => {
  const idRemoveButton = event.target.dataset.remove

  if (idRemoveButton) {
    deleteDoc(doc(database, 'games', idRemoveButton)) // referência do document no banco)
      .then(() => {
        const game = document.querySelector(`[data-id="${idRemoveButton}"]`)
        
        game.remove()
        console.log('Game removido.')
      })
      .catch(console.log)
  }
})

// ============= MODIFICANDO INFORMAÇÕES NO FIRESTORE ============= 

/*
  Existem duas formas de modificar informações no banco de dados, por meio dos 
  métodos 'updateDoc' e 'setDoc'. 
  
  A updateDoc realiza a atualização das informações no banco normalmente. Caso 
  o document inserido para ser atualizado não exista, ele retornará um erro 
  informando que o document não existe. Se passarmos um field que não existe, 
  a função irá criar esse field dentro desse document no banco de dados. Podemos 
  atualizar um único field ou vários.

  A setDoc realiza um processo semelhante, no entanto, caso o document inserido 
  para ter sua informação atualizada não exista, a função irá criar esse novo 
  document quando o ID que foi buscado. Caso seja passado apenas um field para 
  para atualizar e o document tenha vários, a função irá apagar todos os fields 
  e adicionar apenas o que foi inserido. Portanto, a setDoc insere exatamente 
  o que foi passado para ela.

*/

const GTA5 = doc(database, 'games', 'a6LGcjxgasJXK8gRJAZd')

updateDoc(GTA5, { seila: 'Taketwo' })
  .then(() => console.log('document atualizado'))
  .catch(console.log)

setDoc(GTA5, { developedBy: 'Rockstar Games', createdAt: serverTimestamp(), title: 'Grande Theft Auto V'})
  .then(() => console.log('document atualizado'))
  .catch(console.log)
