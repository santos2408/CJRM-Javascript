import { readFile } from "fs/promises";

class BaseRepository {
  constructor({ filename }) {
    this.filename = filename;
  }

  async find(itemId) {
    const content = JSON.parse(await readFile(this.filename));

    if (!itemId) {
      return content;
    }

    return content.find(({ id }) => id === itemId);
  }
}

export default BaseRepository;
