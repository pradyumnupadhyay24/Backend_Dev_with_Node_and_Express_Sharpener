const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const { PORT } = require('./confiig/serverConfig');

const sequelize = require("./util/database");

const homeRoutes = require("./routes/homeroutes");

const errorController = require("./controllers/error");

var cors = require("cors");
const app = express();

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//route for home page
app.use(homeRoutes);
app.use(errorController.get404);
// It allows the browser to connect to a  server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
app.use(cors());

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



