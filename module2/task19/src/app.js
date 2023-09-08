const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const { PORT } = require('./confiig/serverConfig');

const sequelize = require("./util/database");

const homeRoutes = require("./routes/homeroutes");

const app = express();

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//route for home page
app.use(homeRoutes);

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



