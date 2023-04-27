const express = require('express');
const app= express()

const controls = require("../controllers/buyer-controller")
const Buyerrouter= express.Router()

Buyerrouter.post('/signup',controls.register);
Buyerrouter.post('/login' , controls.login);

module.exports = Buyerrouter;