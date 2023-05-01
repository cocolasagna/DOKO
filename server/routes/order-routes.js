const express = require('express')

const controls = require( '../controllers/order-controller')
const OrderRouter = express.Router()

OrderRouter.post('/newOrder',controls.placeOrder)
OrderRouter.get('/userOrder',controls.userOrder)
OrderRouter.get('/:id',controls.findOrder)

module.exports = OrderRouter