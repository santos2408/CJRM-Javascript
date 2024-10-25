import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js'
import { getFirestore  } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js'
import { collection, getDocs, addDoc, serverTimestamp, doc, deleteDoc, updateDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js'

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
const buttonUnsub = document.querySelector('[data-js="unsub"]')

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

// ============= LISTENERS EM TEMPO REAL NO FIRESTORE ============= 

/*
  O firestore é um banco de dados em tempo real. Ou seja, podemos realizar
  alterações na aplicação e elas poderão ser atualizadas em tempo real para os 
  usuários, esse é um comportamente recomendado para as aplicações por uma questão 
  de usabilidade.

  Usando a função getDocs, nós obtermos as informações do banco de dados assim 
  que a aplicação é carregada, no entanto, agora queremos obter os dados toda 
  vez que houver uma mudança no banco. Para isso, invés de usar a getDocs, 
  usaremos um 'realtime listener'.

  Ao executar a 'onSnapshot' um request inicial será executado e o firestore irá 
  enviar um 'snapshot' inicial do collection passado como argumento. Toda vez 
  que houver uma modificação no banco, a função de callback da onSnapshot será 
  executada e o banco irá enviar um 'snapshot' atual.

  Lembre-se que a função 'delete' também é considerada uma ação de escrita no 
  banco, portanto, a execução dessa função também irá disparar os listeners do 
  banco de dados.

  Podemos armazenar a função onSnapshot numa variável para caso desejarmos 
  desabilitar o listener em tempo real. A função onSnapshot retorna uma função 
  que ao ser executada desativa a sua funcionalidade de listener em tempo real.
*/

const unsubscribe = onSnapshot(collectionGames, querySnapshot => {
  console.log('executado')

  if (!querySnapshot.metadata.hasPendingWrites) {
    const gameLis = querySnapshot.docs.reduce((accumulator, doc) => {
      const { title, developedBy, createdAt } = doc.data()
  
      accumulator += `<li class="my-4" data-id="${doc.id}">
          <h5>${title}</h5>
      
          <ul class="mb-2">
            <li>Desenvolvido por ${developedBy}</li>
            ${createdAt ? `<li>Adicionado no banco em ${createdAt.toDate()}</li>` : ''}
          </ul>
  
          <button type="button" class="btn btn-danger" data-remove="${doc.id}">Remover</button>
        </li>`
      
      return accumulator
    }, '')
  
    gamesList.innerHTML = gameLis
  }
})

buttonUnsub.addEventListener('click', unsubscribe)