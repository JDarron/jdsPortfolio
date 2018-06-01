// DEPENDENCIES
const express = require("express")
  , bodyParser = require("body-parser")
  , models = require("./app_api/models")
  , PORT = process.env.PORT || 8080
  , app = express()
  , apiRoutes = require('./app_api/routes/contact.route');;

// BODY PARSER CONFIG
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);

// SYNC THE SQL DB AND THEN LISTEN TO PORT
// FORCE TRUE DROPS THE DATABASE IF ONE EXISTS
models.sequelize.sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on PORT: ${PORT}`);
    }); // END THEN 
  }); // END APP LISTEN