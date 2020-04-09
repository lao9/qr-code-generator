var express = require("express");
var router = express.Router();
var GenerateController = require("../controllers/generateController");

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log("GET REQUEST");
  res.render("index", { title: "Express" });
});

// GET / POST
// /generate
// params URL
// => 200
// print the url
router.post("/generate", (request, response, next) => {
  GenerateController.create(request, response);
});

module.exports = router;
