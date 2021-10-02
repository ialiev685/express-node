const express = require("express");
const router = express.Router();

const path = require("path");
// router.use("/", express.static(path.join(__dirname + "/public")));
// router.use("/product", express.static(path.join(__dirname + "/public")));

const cars = [
  {
    id: 1,
    name: "ВАЗ 2101",
    price: 110000,
  },
  {
    id: 2,
    name: "ВАЗ 2105",
    price: 125000,
  },
  {
    id: 3,
    name: "ВАЗ 2106",
    price: 128000,
  },
  {
    id: 4,
    name: "ВАЗ 2107",
    price: 135000,
  },
  {
    id: 5,
    name: "ВАЗ 2108",
    price: 110000,
  },
  {
    id: 6,
    name: "ВАЗ 2109",
    price: 205000,
  },
];

router.all("/login", (req, res, next) => {
  console.log("login");
  next();
});

router.get("/", (req, res) => {
  //   res.send("<h1>home</h1>");

  res.render("index", { cars });
  console.log(`<h1>home</h1>`);
});

router.get("/product", (req, res) => {
  res.send("<h1>product</h1>");
  console.log(`<h1>product</h1>`);
});

router.get("/product/:id", (req, res) => {
  const id = req.params.id;
  const price = req.query.price;
  res.send(`<h1>product${id}</h1>`);

  console.log(`<h1>product ${id} цена: ${price}</h1>`);
});

router.post("/callback", (req, res, next) => {
  const { name, telefon } = req.body;
  console.log(req.body);
  console.log("POST");
  console.log(`имя: ${name}, телефон: ${telefon} `);
});

module.exports = router;
