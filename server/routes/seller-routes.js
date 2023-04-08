const express = require('express')
const app = express()

const controls = require( '../controllers/seller-controller')
const Sellerrouter = express.Router()
const auth = require('../controllers/auth-controller')

Sellerrouter.post('/register' , controls.register);
Sellerrouter.get('/product'  , controls.product);
Sellerrouter.delete('/product/:id',auth,  controls.deleteproduct)
Sellerrouter.patch('/product/update/:id',auth,  controls.updateproduct)
Sellerrouter.post('/addproduct',  controls.addproduct);
Sellerrouter.post('/login' , controls.login)

module.exports = Sellerrouter; 