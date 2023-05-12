const mongoose = require('mongoose');

const BuyerBidSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'users', 
        
    },
  
        
    product: {
                type: mongoose.Schema.Types.ObjectId,
                ref:'products', 
                required:true
    },
            
    bidAmount:{
                type:Number,
                required:true
    }, 
    seller :{
                type :mongoose.Schema.Types.ObjectId,
                ref:"Seller", 
              required:true
    },
    price:{
        type:Number,
        required: true
    }

    
    
})

const BuyerBid = mongoose.model('BuyerBid',BuyerBidSchema)
module.exports = BuyerBid