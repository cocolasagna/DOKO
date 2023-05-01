const express = require('express')

const controls = require("../controllers/buyerbid-controller")
const BuyerbidRouter = express.Router();

BuyerbidRouter.post("/addbid", controls.addBid)

module.exports = BuyerbidRouter