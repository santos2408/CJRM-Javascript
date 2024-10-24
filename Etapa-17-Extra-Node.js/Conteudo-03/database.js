const { readFile, writeFile } = require("node:fs/promises");

// const { promisify } = require("node:util");
// const readFileAsync = promisify(readFile);

class Database {
  constructor() {
    this.filename = "herois.json";
  }

  async getData() {
    const file = await readFile(this.filename, { encoding: "utf8" });
    return JSON.parse(file);
  }

  async writeData(data) {
    await writeFile(this.filename, JSON.stringify(data));
    return true;
  }

  async registerData(hero) {
    const heroesFromDatabase = await this.getData();
    const id = hero.id <= 2 ? hero.id : Date.now();
    const heroWithId = { id, ...hero };

    const heroes = [...heroesFromDatabase, heroWithId];
    await this.writeData(heroes);
    return hero;
  }

  async listData(id) {
    const data = await this.getData();
    const filteredData = data.filter((item) => (id ? item.id === id : true));
    return filteredData;
  }

  async deleteById(id) {
    if (!id) {
      return await this.writeData([]);
    }

    const data = await this.getData();
    const index = data.findIndex((item) => item.id === parseInt(id));

    if (index === -1) {
      throw Error("O usuário informado não existe");
    }

    data.splice(index, 1);
    return await this.writeData(data);
  }

  async updateById(id, updatedData) {
    const data = await this.getData();
    const index = data.findIndex((item) => item.id === parseInt(id));

    if (index === -1) {
      throw Error("O heroi informado não existe");
    }

    const actual = data[index];

    data.splice(index, 1);

    return await this.writeData([...data, { ...actual, ...updatedData }]);
  }
}

module.exports = new Database();
