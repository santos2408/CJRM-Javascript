const ul = document.querySelector('ul')
const lis = Array.from(ul.children)

// lis.forEach(li => console.log(li.textContent))

const getAllCharacters = async () => {
  try {
    const response = await fetch('https://www.anapioficeandfire.com/api/characters?page=10&pageSize=50');
    const characters = await response.json()
    const identified = characters
      .filter(character => character.name !== "")
      .map(character => {
        const lastIndex = character.url.lastIndexOf('/')
        const id = character.url.slice(lastIndex + 1)

        // return [id, character.name]
        // console.log(id)
        return character.name
        // console.log(character.name)
      })

    if (!response.ok) {
      throw new Error('Ocorreu erro!')
    }

    console.log(identified.join('\n'))
  } catch (error) {
    console.log(error)
  }
}

getAllCharacters()