class Service {
  async makeRequest(url) {
    return (await fetch(url)).json();
  }

  async getCharacters(url) {
    const data = await this.makeRequest(url);

    return {
      name: data.name,
      culture: data.culture,
      aliases: data.aliases.length,
    };
  }
}

module.exports = Service;
