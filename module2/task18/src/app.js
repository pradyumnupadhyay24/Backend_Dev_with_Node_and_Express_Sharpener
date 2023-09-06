const path = require('path');

const express = require('express');

const { PORT } = require('./config/server-config');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT , () =>{
    console.log(`Server Started at PORT ${PORT}`)
});