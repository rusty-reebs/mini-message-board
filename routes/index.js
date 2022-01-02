var express = require("express");
var router = express.Router();
var distanceInWords = require("date-fns/formatDistanceToNow");

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
  res.render("index", {
    title: "Mini Message Board",
    messages: messages,
    format: distanceInWords,
  });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

router.post("/new", function (req, res, next) {
  messages.unshift({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
