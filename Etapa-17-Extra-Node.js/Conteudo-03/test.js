const { deepEqual, ok } = require("assert");
const database = require("./database");

const DEFAULT_ITEM_REGISTER = {
  id: 1,
  name: "Flash",
  power: "Speed",
};

const DEFAULT_ITEM_UPDATE = {
  id: 2,
  name: "Spider-man",
  power: "Web",
};

describe("Suite de manipulação de herois", () => {
  before(async () => {
    await database.registerData(DEFAULT_ITEM_REGISTER);
    await database.registerData(DEFAULT_ITEM_UPDATE);
  });

  it("deve pesquisar um heroi usando arquivos", async () => {
    const expected = DEFAULT_ITEM_REGISTER;
    const [result] = await database.listData(expected.id);
    deepEqual(result, expected);
  });

  it("deve cadastrar um heroi usando arquivos", async () => {
    const expected = DEFAULT_ITEM_REGISTER;
    const result = await database.registerData(expected);
    const [actual] = await database.listData(expected.id);
    deepEqual(actual, expected);
  });

  it("deve atualizar um heroi pelo id", async () => {
    const updatedData = { name: "Batman", power: "money" };
    const expected = { ...DEFAULT_ITEM_UPDATE, ...updatedData };

    await database.updateById(DEFAULT_ITEM_UPDATE.id, updatedData);

    const [result] = await database.listData(DEFAULT_ITEM_UPDATE.id);
    deepEqual(result, expected);
  });

  it("deve remover um heroi pelo id", async () => {
    const expected = true;
    const result = await database.deleteById(DEFAULT_ITEM_REGISTER.id);
    deepEqual(result, expected);
  });
});
