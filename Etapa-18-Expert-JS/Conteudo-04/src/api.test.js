const { describe, it, after, before } = require("mocha");
const supertest = require("supertest");
const assert = require("node:assert");

describe("API Suite Test", () => {
  let app;

  before((done) => {
    app = require("./api");
    app.once("listening", done);
  });

  after((done) => {
    app.close(done);
  });

  describe("/contact:get", () => {
    it("should request the contact route and return HTTP status 200", async () => {
      const response = await supertest(app).get("/contact").expect(200);
      assert.strictEqual(response.text, "contact us page");
    });
  });

  describe("/login:post", () => {
    it("should request the contact route and return HTTP status 200", async () => {
      const response = await supertest(app).post("/login").send({ username: "sypol41", password: "123456" }).expect(200);
      assert.strictEqual(response.text, "Log in succeeded!");
    });

    it("should request the contact route and return HTTP status 401", async () => {
      const response = await supertest(app).post("/login").send({ username: "rogersantos", password: "123456" }).expect(401);
      assert.strictEqual(response.text, "Log in failed!");
    });
  });

  describe("/undefined:get", () => {
    it("should request undefined route and return HTTP status 404", async () => {
      const response = await supertest(app).get("/undefined").expect(404);
      assert.strictEqual(response.text, "not found!");
    });
  });
});
