import { initializeApp  } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js'
import { getFirestore, collection, addDoc, doc, getDoc, setDoc, query, where, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js'
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js'

const firebaseConfig = {
  apiKey: 'AIzaSyDFlhJjn2hlIcTNajLsddFljs9jS-sc8Po',
  authDomain: 'fir-auth-a1305.firebaseapp.com',
  projectId: 'fir-auth-a1305',
  storageBucket: 'fir-auth-a1305.appspot.com',
  messagingSenderId: '492871568615',
  appId: '1:492871568615:web:7dc933f5de5521248f2642'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const database = getFirestore(app)
const collectionPhrases = collection(database, 'phrases')

const addPhrase = async (event, user) => {
  event.preventDefault()

  try {
    const addedDoc = await addDoc(collectionPhrases, {
      movieTitle: DOMPurify.sanitize(event.target.title.value),
      phrase: DOMPurify.sanitize(event.target.phrase.value),
      userId: DOMPurify.sanitize(user.uid)
    })

    event.target.reset()

    const modalAddPhrase = document.querySelector('[data-modal="add-phrase"]')
    M.Modal.getInstance(modalAddPhrase).close()

    console.log('Frase adicionada com ID: ', addedDoc.id)
  } catch (error) {
    console.log('Problema na adição do document:', error)
  }
}

const initCollapsibles = collapsibles => M.Collapsible.init(collapsibles)

const login = async () => {
  try {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  } catch (error) {
    console.log('login error:', error)
  }
}

const logout = async unsubscribe => {
  try {
    await signOut(auth)
    unsubscribe()

  } catch (error) {
    console.log('logout error:', error)
  }
}

const handleAuthStateChanged = async user => {
  try {
    const result = await getRedirectResult(auth)
    console.log('result:', result)
  } catch (error) {
    console.log('erro no getRedirectResult:', error)
  }

  const loginMessageExists = document.querySelector('[data-js="login-message"]')
  loginMessageExists?.remove()

  const formAddPhrase = document.querySelector('[data-js="add-phrase-form"]')
  const phrasesList = document.querySelector('[data-js="phrases-list"]')
  const buttonGoogle = document.querySelector('[data-js="button-google"]')
  const linkLogout = document.querySelector('[data-js="logout"]')
  const accountDetailsContainer = document.querySelector('[data-js="account-details"]')
  const accountDetails = document.createElement('p')

  const lis = [...document.querySelector('[data-js="nav-ul"]').children]

  lis.forEach(li => {
    const lisShouldBeVisible = li.dataset.js.includes(user ? 'logged-in': 'logged-out')
    
    if (lisShouldBeVisible) {
      li.classList.remove('hide')
      return
    }

    li.classList.add('hide')
  })

  if (!user) {
    const phrasesContainer = document.querySelector('[data-js="phrases-container"]')
    const loginMessage = document.createElement('h5')

    loginMessage.textContent = 'Faça login para ver as frases'
    loginMessage.classList.add('center-align', 'white-text')
    loginMessage.setAttribute('data-js', 'login-message')
    phrasesContainer.append(loginMessage)

    formAddPhrase.onsubmit = null
    linkLogout.onlick = null
    buttonGoogle.addEventListener('click', login)
    phrasesList.innerHTML = ''
    accountDetailsContainer.innerHTML = ''
    return
  }

  try {
    const userDocRef = doc(database, 'users', user.uid)
    const docSnapshot = await getDoc(userDocRef)

    if (!docSnapshot.exists()) {
      await setDoc(userDocRef, {
        name: DOMPurify.sanitize(user.displayName),
        email: DOMPurify.sanitize(user.email),
        userId: DOMPurify.sanitize(user.uid)
      })
    }
  } catch (error) {
    console.log('Erro ao tentar registrar o usuário:', error)    
  }


  buttonGoogle.removeEventListener('click', login)
  formAddPhrase.onsubmit = event => addPhrase(event, user)

  const queryPhrases = query(collectionPhrases, where('userId', '==', user.uid))
  
  const unsubscribe = onSnapshot(queryPhrases, snapshot => {
    const documentFragment = document.createDocumentFragment()

    snapshot.docChanges().forEach(docChange => {
      const liPhrase = document.createElement('li')
      const movieTitleContainer = document.createElement('div')
      const phraseContainer = document.createElement('div')
      const { movieTitle, phrase } = docChange.doc.data()

      movieTitleContainer.textContent = DOMPurify.sanitize(movieTitle)
      phraseContainer.textContent = DOMPurify.sanitize(phrase)
      movieTitleContainer.setAttribute('class', 'collapsible-header blue-grey-text text-lighten-5 blue-grey darken-4')
      phraseContainer.setAttribute('class', 'collapsible-body blue-grey-text text-lighten-5 blue-grey darken-3')

      liPhrase.append(movieTitleContainer, phraseContainer)
      documentFragment.append(liPhrase)
    })

    phrasesList.append(documentFragment)
  })
  
  linkLogout.onclick = () => logout(unsubscribe)
  initCollapsibles(phrasesList)
  accountDetails.textContent = DOMPurify.sanitize(`${user.displayName} | ${user.email}`)
  accountDetailsContainer.append(accountDetails)
}

const initModals = () => {
  const modals = document.querySelectorAll('[data-js="modal"]')
  M.Modal.init(modals)
}

onAuthStateChanged(auth, handleAuthStateChanged) 
initModals()