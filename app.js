const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route');
const mongoose = require('mongoose');
var dev_db_url = 'mongodb://cruduser:cruuud@localhost:27017/crud_db';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
var port = 5000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});