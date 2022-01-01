var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Gamarjoba!",
    user: "Giorgi 🇬🇪",
    added: new Date(),
  },
  {
    text: "Hola!",
    user: "Alejandro 🇲🇽",
    added: new Date(),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

router.post("/new", function (res, req) {
  messages.push({
    text: res.body.message,
    user: res.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
