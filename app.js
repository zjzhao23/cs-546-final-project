const express = require("express");

const app = express();
const { engine } = require("express-handlebars");
const configRoutes = require("./routes");
const static = express.static(__dirname + "/public");

app.use("/public", static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/",
  })
);
app.set("view engine", "handlebars");

configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});
