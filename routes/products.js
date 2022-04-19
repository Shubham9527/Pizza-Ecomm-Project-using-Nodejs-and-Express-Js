const router = require("express").Router();

const products = require("../products");

router.get("/products", (req, res) => {
  res.render("products", {
    title: "Product page title",
  });
});

router.get("/api/products_list", (req, res) => {
  res.json(products);
});

module.exports = router;
