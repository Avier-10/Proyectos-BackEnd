const Express = require("express");
const port = 9080;
const path = require("path");
const users = require("./Routers/Usuario.js");
const view = require("./Helpers/Views.js");
const app = Express();

app.use(Express.static(path.join(__dirname, "Static")));
app.use(Express.json());

app.use(users);

app.get("/", function (req, res) {
  return view("Inicio.html", res);
});

let Server = app.listen(port, () => {
  console.log("Escuchando:http://localhost:9080 ");
});
