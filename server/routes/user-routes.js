const express = require('express')
const app = express()

const controls = require( '../controllers/user-controller')
const Userrouter = express.Router()

Userrouter.post('/signup',controls.register)
Userrouter.post('/login' , controls.login)


module.exports = Userrouter; 