const express = require("express");

const app = express();

//  *** Using Express Router ***
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false })); // with this we get product details in TERMINAL as Key : Value

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");  // create shop route

app.use('/admin', adminRoutes);  // *** Filtering Paths ***
app.use(shopRoutes); // use shop route

// *** Adding a 404 Error Page ***
app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>')  // 404 code for Page not found.
})

//  *** Express js Looking Behind the Scenes ***
app.listen(3000,console.log("Server Started"));