const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const myRouter = require("./my-router");

app.use(cors());

app.use((req, res, next) => {
  console.log("наше промежуточное ПО");
  next();
});

// app.use(express.static(path.join(__dirname + "/public")));
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/my-router", myRouter);

app.set("views", "./views");
app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.send("<h1>home</h1>");

//   // res.sendFile(path.join(__dirname + "/public"));
//   console.log(`<h1>home</h1>`);
// });

// app.get("/product", (req, res) => {
//   res.send("<h1>product</h1>");
//   console.log(`<h1>product</h1>`);
// });

// app.get("/product/:id", (req, res) => {
//   const id = req.params.id;
//   const price = req.query.price;
//   res.send(`<h1>product${id}</h1>`);

//   console.log(`<h1>product ${id} цена: ${price}</h1>`);
// });

// app.post("/callback", (req, res, next) => {
//   const { name, telefon } = req.body;
//   console.log(req.body);
//   console.log("POST");
//   console.log(`имя: ${name}, телефон: ${telefon} `);
// });

app.listen(5000, () => {
  console.log("Сервер работает на порту 5000");
});
