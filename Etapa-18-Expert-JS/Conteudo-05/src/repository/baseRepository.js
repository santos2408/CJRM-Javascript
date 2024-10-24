const { readFile } = require("fs/promises");

class BaseRepository {
  constructor({ filename }) {
    this.filename = filename;
  }

  async find(itemId) {
    const content = JSON.parse(await readFile(this.filename));

    if (!id) {
      return content;
    }

    return content.find(({ id }) => id === itemId);
  }
}

module.exports = BaseRepository;
