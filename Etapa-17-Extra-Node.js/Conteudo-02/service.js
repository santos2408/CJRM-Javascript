const { get } = require("axios");

const baseUrl = `https://anapioficeandfire.com/api`;

async function getCharacter(name) {
  const url = `${baseUrl}/characters?name=${name}`;
  const data = await get(url);
  const result = data.data.map(mapCharacter);
  return result;
}

function mapCharacter(item) {
  return {
    url: item.url,
    name: item.name,
    gender: item.gender,
    culture: item.culture,
    born: item.born,
    died: item.died,
    titles: item.titles,
  };
}

module.exports = {
  getCharacter,
};
