const path = require('path');

const express = require('express');

const { PORT } = require('./confiig/serverConfig');

const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

const db = require('./util/database')

app.set('view engine', 'ejs');
app.set('views', 'src/views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

db.execute('SELECT * FROM products')
.then((result) => {
    console.log(result[0], result[1]);
})
.catch((er) => {
    console.log(err);
});

app.use(errorController.get404);

app.listen(PORT , () =>{
    console.log(`Server Started at PORT ${PORT}`)
});
