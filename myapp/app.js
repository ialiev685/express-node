const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Ilfat");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Контакты</h1>");
});

app.listen(5000, () => {
  console.log("Сервер работает на порту 3000");
});
