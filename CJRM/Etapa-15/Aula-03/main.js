import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js'
import { collection, getDocs, addDoc, serverTimestamp, doc, deleteDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js'

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
const formAddGame = document.querySelector('[data-js="add-game-form"]')
const buttonUnsub = document.querySelector('[data-js="unsub"]')

const sanitize = string => DOMPurify.sanitize(string)

const getFormattedDate = createdAt => new Intl
  .DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
  .format(createdAt.toDate())

const renderGame = docChange => {
  const [id, { title, developedBy, createdAt }] = [docChange.doc.id, docChange.doc.data()]

  const liGame = document.createElement('li')
  liGame.setAttribute('data-id', id)
  liGame.setAttribute('class', 'my-4')

  const h5 = document.createElement('h5')
  h5.textContent = sanitize(title)

  const ul = document.createElement('ul')
  const liDevelopedBy = document.createElement('li')
  liDevelopedBy.textContent = `Desenvolvido por ${sanitize(developedBy)}`

  if (createdAt) {
    const liDate = document.createElement('li')
    liDate.textContent = `Adicionado no banco em ${getFormattedDate(createdAt)}`
    ul.append(liDate)
  }

  const button = document.createElement('button')
  button.textContent = 'Remover'
  button.setAttribute('data-remove', id)
  button.setAttribute('class', 'btn btn-danger btn-sm')

  ul.append(liDevelopedBy)
  liGame.append(h5, ul, button)
  gamesList.append(liGame)
}

const renderGamesList = snapshot => {
  if (snapshot.metadata.hasPendingWrites) {
    return
  }

  snapshot.docChanges().forEach(docChange => {
    if (docChange.type === 'removed') {
      const liGame = document.querySelector(`[data-id="${docChange.doc.id}"]`)
      liGame.remove()
      return
    }

    renderGame(docChange)
  })
}

const to = promise => promise
  .then(result => [null, result])
  .catch(error => [error])

const addGame = async event => {
  event.preventDefault()

  const [error, doc] = await to(addDoc(collection(database, 'games'), {
    title: sanitize(event.target.title.value),
    developedBy: sanitize(event.target.developer.value),
    createdAt: serverTimestamp()
  }))

  if (error) {
    return console.log(error)
  }

  console.log('Document criado com o ID ' + doc.id)
  event.target.reset()
  event.target.title.focus()
}

const deleteGame = async event => {
  const idRemoveButton = event.target.dataset.remove

  if (!idRemoveButton) {
    return
  }

  const [error] = await to(deleteDoc(doc(database, 'games', idRemoveButton)))

  if (error) {
    return console.log(error)
  }

  console.log('Game removido')
}

const handleSnapshotError = error => console.log(error)

const unsubscribe = onSnapshot(collectionGames, renderGamesList, handleSnapshotError)
formAddGame.addEventListener('submit', addGame)
gamesList.addEventListener('click', deleteGame)
buttonUnsub.addEventListener('click', unsubscribe)

/*
  A função 'onSnapshot' pode receber uma função como terceiro argumento e essa 
  função irá receber o objeto de erro por parâmetro caso algum erro ocorra na 
  execução da função 'onSnapshot'.

  --------------------------------------

  As vezes o uso de try..catch pode incomodar devido a sua estrutura estranha, e 
  existe uma forma de elimitar o try...catch e deixar o código ainda mais legível, 
  no entanto, essa prática pode ser considerada um 'over engineering' que seria 
  como cortar um papel com uma motoserra.

  Para usar essa técnica de substituição da estrutura 'try..catch' devemos criar 
  uma função chamada 'to' exemplificada no código acima. Essa função tem a mesma 
  funcionalidade que um 'try...catch', mas é uma forma mais elegante. A estrutura 
  da função 'to' dependerá de como o código está escrito.

  // ============= O PROBLEMA DE SEGURANÇA AO USAR INNER HTML ============= 

  Além de 'addEventListener' existem outras formas de integrar um listener de 
  evento à um elemento do DOM. Umas das formas é a partir do uso de propriedades 
  de manipulação de evento. Ex: onclick, onsubmit, onchange...

  No entanto, a maior recomendação é o uso de 'addEventListener' ao invés de 
  propriedades de manipulação de evento, isso porque não é possível adicionar 
  mais de uma função de callback para o mesmo evento quando o tipo do evento é 
  setado a partir de propriedades de manipulação de evento.

  Outra forma para lidar com manipulação de eventos é a partir de eventos iline, 
  que são inseridos diretamente na tag HTML. Atente-se que usar eventos inline 
  hoje em dia é considerada uma má prática, pois mistura código HTML com Javascript 
  e também alguns servidores desabilitam código javascript inline por medidas 
  de segurança.

  Se uma tag script for inserida a partir de um innerHTML, a tag script não será 
  renderizada, essa é uma medida de segurança do HTML5. Mas ainda sim existem 
  formas de injetar código externo a partir de um innerHTML.

  Por exemplo, eu poderia inserir uma tag img:
    <img src="x" onerror="código malicioso" />
  
  onde, por algum motivo, essa inserção ta tag por um input daria erro e ao dar 
  erro um evento de erro seria disparado e o meu código malicioso seria executado.
  Pronto, inseri um código externo dentro de uma aplicação.

  Esse tipo de invasão é chamado de 'cross-site scripting' (XSS), que é um tipo de 
  vulnerabilidade de segurança que pode ser encontrado em aplicações web.

  Não use innerHTML ou qualquer outra feature que parceie string para HTML quando 
  essa string não estiver no seu controle. Por exemplo, quando essa string estiver 
  vindo de um input que é o próprio usuário que digita ou um request que você 
  não tem controle do que vai receber, são situações que não devemos usar innerHTML 
  para renderizar esses valores no HTML.

  Para evitar ataque XSS podemos usar uma biblioteca chamada DOMPurify, que 
  "higieniza" as informações enviadas para a aplicação, ou seja, quando enviamos 
  as informações, antes das informações serem inseridas no client-side ou adicionadas 
  no banco de dados, os valores dos inputs do usuário serão sanitizados e qualquer 
  script contido neles será removido. Isso evitará injeção de código por meio de 
  inputs e que pode abrir vulnerabilidades na página e no servidor.

  ----------------------------------

  Sempre que possível evite aninhamento de If's, dê preferência para o uso de 
  'return early'

  [ ] - Property Event Handler
  [ ] - insertAdjacentHTML
  [ ] - DOMPurify (library)
*/