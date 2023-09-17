const express = require('express');

const { PORT } = require('./config/server-config');

const bodyParser = require('body-parser');

const app = express();

const prepareAndStartServer = () => {


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));




    app.listen(PORT, () => {
        console.log(`Server Started on Port: ${PORT}`);
    });
}   

prepareAndStartServer();