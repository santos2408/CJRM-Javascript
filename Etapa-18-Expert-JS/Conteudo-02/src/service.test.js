const assert = require("node:assert");
const { createSandbox } = require("sinon");
const Service = require("./services");

const sinon = createSandbox();

const BASE_URL_1 = "https://anapioficeandfire.com/api/characters/583";
const BASE_URL_2 = "https://anapioficeandfire.com/api/characters/1880";

const mocks = {
  jonSnow: require("../mocks/jon-snow.json"),
  robbStark: require("../mocks/robb-stark.json"),
};

(async () => {
  const service = new Service();
  const stub = sinon.stub(service, service.makeRequest.name);

  stub.withArgs(BASE_URL_1).resolves(mocks.jonSnow);
  stub.withArgs(BASE_URL_2).resolves(mocks.robbStark);

  console.time();

  {
    const expected = {
      name: "Jon Snow",
      culture: "Northmen",
      aliases: 8,
    };

    const results = await service.getCharacters(BASE_URL_1);
    assert.deepStrictEqual(results, expected);
  }

  {
    const expected = {
      name: "Robb Stark",
      culture: "",
      aliases: 4,
    };

    const results = await service.getCharacters(BASE_URL_2);
    assert.deepStrictEqual(results, expected);
  }

  console.timeEnd();
})();
