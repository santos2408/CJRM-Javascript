const assert = require("node:assert");
const { createSandbox } = require("sinon");
const Fibonacci = require("./fibonacci");

const sinon = createSandbox();

(async () => {
  console.time();

  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    const expectedCallCount = 6;
    assert.strictEqual(spy.callCount, expectedCallCount);
  }

  console.timeEnd();
})();
