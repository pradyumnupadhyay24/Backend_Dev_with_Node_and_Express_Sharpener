const path = require('path');

const express = require('express');

const { PORT } = require('./config/server-config');

const bodyParser = require('body-parser');

const homeRoutes = require("./routes/homeroutes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'arc/public')));

app.use(homeRoutes);

app.listen(PORT , () =>{
    console.log(`Server Started at PORT ${PORT}`)
});