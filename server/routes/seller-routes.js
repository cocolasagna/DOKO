const express = require('express')
const app = express()

const controls = require( '../controllers/seller-controller')
const Sellerrouter = express.Router()
const auth = require('../controllers/auth-controller')

Sellerrouter.post('/register' , controls.register);
Sellerrouter.post('/product',auth , controls.product);
Sellerrouter.delete('/product/:id',auth,  controls.deleteproduct)
Sellerrouter.patch('/product/update/:id',auth,  controls.updateproduct)
Sellerrouter.post('/addproduct',auth , controls.addproduct);


module.exports = Sellerrouter; 