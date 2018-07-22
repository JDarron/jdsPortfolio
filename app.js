// DEPENDENCIES
const express = require("express"),
  bodyParser = require("body-parser"),
  PORT = process.env.PORT || 3001,
  app = express();

// BODY PARSER CONFIG
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

// SYNC THE SQL DB AND THEN LISTEN TO PORT
// FORCE TRUE DROPS THE DATABASE IF ONE EXISTS

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
