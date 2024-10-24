const assert = require("node:assert");
const File = require("./src/file");
const { error } = require("./src/constraints");

(async () => {
  {
    const filePath = "./mocks/empty-file-invalid.csv";
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    assert.rejects(result, expected);
  }

  {
    const filePath = "./mocks/invalid-header.csv";
    const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    assert.rejects(result, expected);
  }

  {
    const filePath = "./mocks/five-items-invalid.csv";
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    assert.rejects(result, expected);
  }

  {
    const filePath = "./mocks/three-items-valid.csv";
    const expected = [
      {
        id: 1,
        name: "Alice",
        profession: "Engineer",
        age: 28,
      },
      {
        id: 2,
        name: "Bob",
        profession: "Designer",
        age: 34,
      },
      {
        id: 3,
        name: "Charlie",
        profession: "Teacher",
        age: 25,
      },
    ];
    const result = await File.csvToJSON(filePath);
    assert.deepEqual(result, expected);
  }
})();
