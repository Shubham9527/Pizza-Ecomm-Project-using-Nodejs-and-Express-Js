const apiKey = require("../middlewares/apiKey");

const apiKeyMiddleware = require("../middlewares/apiKey");

const router = require("express").Router();

// router.use(apiKeyMiddleware); //apply for all routes in this file

// router.get("/products", apiKeyMiddleware, (req, res) => {
//   //applying middleware for single route
//   // router.get("/products", (req, res) => {
//   res.json([
//     {
//       id: 123,
//       name: "klj",
//     },
//     {
//       id: 111,
//       name: "jdf",
//     },
//   ]);
// });

router.get("/", (req, res) => {
  res.render("index", {
    title: "Home page title",
  });
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
