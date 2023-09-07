const path = require('path');

const express = require('express');

const { PORT } = require('./config/server-config');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const homeRoutes = require("./routes/homeroutes");
app.use(homeRoutes);

// with this users should be able to access 'public' path // it will take any request that tries to find some file.
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT , () =>{
    console.log(`Server Started at PORT ${PORT}`)
});