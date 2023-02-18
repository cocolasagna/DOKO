const express = require('express')
const app = express()

const controls = require( '../controllers/user-controller')
const router = express.Router()

router.post('/register',controls.register)
router.post('/login' , controls.login)


module.exports = router; 