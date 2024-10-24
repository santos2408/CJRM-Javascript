const http = require("node:http");
const { once } = require("node:events");

const DEFAULT_USER = {
  username: "sypol41",
  password: "123456",
};

const routes = {
  "/contact:get": (request, response) => {
    response.write("contact us page");
    return response.end();
  },
  "/login:post": async (request, response) => {
    const user = JSON.parse(await once(request, "data"));
    const toLower = (text) => text.toLowerCase();

    if (toLower(user.username) !== toLower(DEFAULT_USER.username) || user.password !== DEFAULT_USER.password) {
      response.writeHead(401);
      response.end("Log in failed!");
      return;
    }

    return response.end("Log in succeeded!");
  },
  default(request, response) {
    response.writeHead(404);
    return response.end("not found!");
  },
};

function handler(request, response) {
  const { url, method } = request;
  const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`;
  const chosen = routes[routeKey] || routes.default;

  console.log(routeKey);

  return chosen(request, response);
}

const app = http.createServer(handler);

app.listen(3000, () => console.log("Running at 3000"));

module.exports = app;
