const express = require('express')
const app = express()

const controls = require( '../controllers/product-controller')
const Productrouter = express.Router()

Productrouter.post('/addproduct',controls.addproduct);
Productrouter.get('/getallproduct', controls.getallproduct)
Productrouter.get('/:id', controls.getOneproduct)



module.exports = Productrouter; 