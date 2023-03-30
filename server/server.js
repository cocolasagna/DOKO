require('dotenv').config({path: "./vars/.env"})
const express = require("express");
const app = express();
const port = 5000;

const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const router = require( './routes/user-routes')
const Productrouter = require( './routes/product-routes')
const Sellerrouter = require('./routes/seller-routes')
const Userrouter = require('./routes/user-routes')

app.use(bodyParser.json());
app.use(cors());
app.use(router)
app.use('/product',Productrouter)
app.use('/seller',Sellerrouter)
app.use('/user',Userrouter)


mongoose.connect(
    process.env.conn_str,
    { 
  
    useNewUrlParser: true, 
    useUnifiedTopology: true ,

    },(err) => {
    if (err) {
    console.log(err);
    } else {
    console.log("mongodb is connected");
}});





mongoose.connection.once('open',() => { 
    app.emit('ready'); 
});

app.on('ready', function() { 
    app.listen(port, () => {
    console.log(`Server started at port ${port}`); 
  });
});

