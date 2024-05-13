const express = require("express");
const router = express.Router();

//Routes
router.get("/index", (req, res) => {
  const locals = {
    title: "Akeem-Ayinla's Blog",
    description: "Simple Blog created with NodeJS, Express and MongoDb.",
  };

  res.render("index", { locals });
});

router.get("/about", (req, res) => {
  res.render("about");
});
module.exports = router;
