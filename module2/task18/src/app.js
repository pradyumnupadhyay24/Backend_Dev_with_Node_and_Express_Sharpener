const path = require('path');

const express = require('express');

const { PORT } = require('./config/server-config');

const bodyParser = require('body-parser');

const homeRoutes = require("./routes/homeroutes");
const errorController = require("./controllers/error");

// Using sequelize database
const sequelize = require("./util/database");



// It allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
var cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({ extended: false }));

app.use(cors());

app.use(homeRoutes);
app.use(errorController.get404);

sequelize
  .sync()
  .then((result) => {
    //console.log(result);
    app.listen(PORT , () =>{
        console.log(`Server Started at PORT ${PORT}`)
    });
  })
  .catch((err) => {
    console.log(err);
  });
