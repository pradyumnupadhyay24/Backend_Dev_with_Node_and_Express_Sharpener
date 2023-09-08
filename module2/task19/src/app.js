const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const { PORT } = require('./confiig/serverConfig');

const app = express();

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT , () =>{
   console.log(`Server Started at PORT ${PORT}`)
});

