const mongoose = require('mongoose');

const BuyerBidSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'users', 
        required: true
    },
    bids:[
        {
            seller:{
                type : mongoose.Schema.Types.ObjectId,
                ref: "Seller",
                required:true
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref:'products', 
                required:true
            },
            quantity:{
                type:Number,
                default:1
            },
            price:{
                type:Number,
                required:true
            },
            bidAmount:{
                type:Number,
                required:true
            }
        }
    ]
})

const BuyerBid = mongoose.model('BuyerBid',BuyerBidSchema)
module.exports = BuyerBid