const path = require('path');

const express = require('express');

const { PORT } = require('./config/server-config');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const homeRoutes = require("./routes/homeroutes");
app.use(homeRoutes);

app.listen(PORT , () =>{
    console.log(`Server Started at PORT ${PORT}`)
});