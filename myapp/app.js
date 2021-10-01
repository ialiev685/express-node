const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(cors());

app.use((req, res, next) => {
  console.log("наше промежуточное ПО");
  next();
});

app.get("/", (req, res) => {
  // console.log(app.use(express.static(path.join(__dirname, +"/public"))));

  res.send("<h1>home</h1>");
  console.log(`<h1>home</h1>`);
});

app.get("/product", (req, res) => {
  res.send("<h1>product</h1>");
  console.log(`<h1>product</h1>`);
});

app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  const price = req.query.price;
  res.send(`<h1>product${id}</h1>`);

  console.log(`<h1>product ${id} цена: ${price}</h1>`);
});

app.listen(5000, () => {
  console.log("Сервер работает на порту 5000");
});
