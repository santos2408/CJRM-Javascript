const { error } = require("./src/constants");
const File = require("./src/file");
const assert = require("node:assert");

(async () => {
  // variáveis criadas nesse bloco só são válidas durante sua execução
  {
    const filePath = "./mocks/invalid-emptyFile.csv";
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = "./mocks/invalid-header.csv";
    const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = "./mocks/invalid-fiveItems.csv";
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = "./mocks/valid-threeItems.csv";
    const expected = [
      {
        id: "1",
        name: "Alice",
        profession: "Engineer",
        age: "30",
      },
      {
        id: "2",
        name: "Bob",
        profession: "Doctor",
        age: "35",
      },
      {
        id: "3",
        name: "Charlie",
        profession: "Teacher",
        age: "28",
      },
    ];
    const result = await File.csvToJSON(filePath);
    assert.deepEqual(result, expected);
  }
})();
