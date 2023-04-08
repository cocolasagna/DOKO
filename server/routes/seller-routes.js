const express = require('express')
const app = express()

const controls = require( '../controllers/seller-controller')
const Sellerrouter = express.Router()
const auth = require('../controllers/auth-controller')

Sellerrouter.post('/signup' , controls.register);
Sellerrouter.get('/product'  , controls.product);
Sellerrouter.delete('/product/:id',auth,  controls.deleteproduct)
Sellerrouter.get('/product/:id', controls.productdetails)
Sellerrouter.patch('/product/update/:id',auth,  controls.updateproduct)
Sellerrouter.post('/addproduct',  controls.addproduct);
Sellerrouter.post('/login' , controls.login)

module.exports = Sellerrouter; 