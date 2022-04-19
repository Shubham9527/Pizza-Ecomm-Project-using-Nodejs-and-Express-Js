function apiKey(req, res, next) {
  const apiKey = "12345";
  console.log(req.query.api_key);

  const userApiKey = req.query.api_key;

  if (userApiKey && userApiKey === apiKey) {
    next();
  } else {
    res.json({
      message: "Not Allowed!!!",
    });
  }
}

module.exports = apiKey;
