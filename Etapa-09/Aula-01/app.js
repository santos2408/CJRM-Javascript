const todosContainer = document.querySelector('[data-js="todos-container"]')
const formAdd = document.querySelector('[data-js="todo-add"]')
const formSearch = document.querySelector('[data-js="todo-search"]')

const addTodo = inputValue => {
   if (inputValue.length) {
      todosContainer.innerHTML += `
         <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt delete" data-trash="${inputValue}"></i>
         </li>
      `
      event.target.reset()
   }
}

formAdd.addEventListener('submit', event => {
   event.preventDefault()

   const inputValue = event.target.add.value.toLowerCase().trim()
   addTodo(inputValue)
})

const filterTodos = (todos, inputValue, returnMatchedTodos) => {   
   return todos
      .filter(todo => {
         const matchedTodos = todo.textContent.toLowerCase().includes(inputValue)
         return returnMatchedTodos ? matchedTodos : !matchedTodos
      })
}

const manipulateClasses = (todos, classToAdd, classToRemove) => {
   todos.forEach(todo => {
      todo.classList.remove(classToRemove)
      todo.classList.add(classToAdd)
   })
}

const hideTodos = (todos, inputValue) => {
   const todosToHide = filterTodos(todos, inputValue, false)
   manipulateClasses(todosToHide, 'hidden', 'd-flex')
}

const showTodos = (todos, inputValue) => {
   const todosToShow = filterTodos(todos, inputValue, true)
   manipulateClasses(todosToShow, 'd-flex', 'hidden')
}

formSearch.addEventListener('input', event => {
   const inputValue = event.target.value.trim()
   const todos = Array.from(todosContainer.children)

   hideTodos(todos, inputValue)
   showTodos(todos, inputValue)

   
})

const removeTodo = clickedElement => {
   const trashDataValue = clickedElement.dataset.trash
   const todo = document.querySelector(`[data-todo="${trashDataValue}"]`)
   
   if (trashDataValue) {
      todo.remove()
   }
}

todosContainer.addEventListener('click', event => {
   const clickedElement = event.target
   removeTodo(clickedElement)   
})