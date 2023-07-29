const express = require("express");

const app = express();

//  *** Adding Middleware ***
// use allows us to add a new middleware function.
app.use((req, res, next) => {
  console.log("In the middleware!");
  next(); //  Allows the request to continue to the next middleware in line.
});

//  *** How Middleware Works ***
app.use((req, res, next) => {
  console.log("In another middleware !");
  res.send("<h1>Hello from Express !</h1>");
});

//  *** Express js Looking Behind the Scenes ***
app.listen(3000 ,() => console.log("Server Started"));