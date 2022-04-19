const express = require("express");
const path = require("path");

const app = express();
const apiRouter = require("../Express/routes/index");
const productRouter = require("./routes/products");

const apiKeyMiddleware = require("./middlewares/apiKey");

const PORT = process.env.PORT || 3000;
// app.use(apiKeyMiddleware); //global middlware apply  for all routes

// app.use("/api", apiRoute); // first param is prefix
app.use(apiRouter);
app.use(productRouter);

app.set("view engine", "ejs");
console.log(app.get("views"));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname) + "/index.html");
// });
