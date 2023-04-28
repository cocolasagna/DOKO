const express = require('express')
const app = express()

const controls = require( '../controllers/product-controller')
const auth = require('../controllers/authBuyer-controller')
const Productrouter = express.Router()


Productrouter.get('/getallproduct', controls.getallproduct)
Productrouter.get('/:id', controls.getOneproduct)

module.exports = Productrouter; 