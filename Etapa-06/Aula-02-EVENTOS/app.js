// ========== VALIDAÇÃO DE FORMULÁRIOS ==========

const form = document.querySelector('form')
const feedback = document.querySelector('.feedback')

const testUsername = username => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
   event.preventDefault()

   const isAValidUsername = testUsername(event.target.username.value)

   if (isAValidUsername) {
      feedback.textContent = 'username válido =)'
      return
   }

   feedback.textContent = 'o username deve conter entre 6 a 12 caracteres e deve conter apenas letras.'
})

// ========== EVENTOS DO TECLADO ==========

/*
   Um dos eventos que podemos reagir é chamado de 'keyup'. Ele executa uma 
   função de callback no momento exato em que uma tecla pressionada for 
   liberada.

   Para escutarmos esse evento do teclado, precisamos adicionar esse listener 
   na referência do input do form, através do ID ou do NAME desse input.

   Obs: repare que optamos por utilizar o método 'setAttribute' para adicionar 
   a classe no input ao invés de adicionar a classe através do classList.add. 
   Fizemos isso porque o 'setAttribute' sobrescreve qualquer estilo CSS, pois 
   ele só aceita um. Com o classList o input ficaria com uma classe success e 
   error ao mesmo tempo e não queremos nem precisamos que seja assim. Por isso 
   essa escolha.
*/

form.username.addEventListener('keyup', event => {
   const isAValidUsername = testUsername(event.target.value)

   if (isAValidUsername) {
      form.username.setAttribute('class', 'success')
      return
   }

   form.username.setAttribute('class', 'error')
})
