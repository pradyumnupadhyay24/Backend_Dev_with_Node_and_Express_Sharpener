const express = require('express');
const cors = require("cors");

const { PORT } = require('./confiig/serverConfig');

const bodyParser = require('body-parser');

const routes = require("./routes/index");

const sequelize = require("./repository/connect");

const app = express();

const prepareAndStartServer = async() => {

    // * ! request parsing middleware
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));



    // * ! Routes
    
    app.use(routes);

    // * ! connection checking

    // sequelize.authenticate()
    // .then(() => {
    //     console.log('connection established');
    // })
    // .catch((error) => {
    //     console.log(errror);
    //     console.log('connection unsuccessful');
    // })

    sequelize
    .sync()
    .then(() => {
    })
    .catch(err => {
    console.log(`${err} occured whne syncing with sequalize`)
    });

    app.listen(PORT, () => {
        console.log(`Server Started on Port: ${PORT}`);
    });
}   

prepareAndStartServer();