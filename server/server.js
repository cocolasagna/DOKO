require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());


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
    console.log('Server started'); 
  });
});

