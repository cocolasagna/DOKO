const express = require('express')
const app = express()

const controls = require( '../controllers/seller-controller')
const Sellerrouter = express.Router()

Sellerrouter.post('/register',controls.register);



module.exports = Sellerrouter; 