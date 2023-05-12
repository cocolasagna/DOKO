const express = require("express");

const BuyerBid = require("../models/BuyerBid")

const addBid = async(req,res)=>{
    
        const User = req.user
        const userId = User.id
        console.log("user:", userId)


        const newBid = new BuyerBid({
            user: userId,
            bidAmount: req.body.bidAmount , 
            product : req.body.product , 
            seller : req.body.seller,
            price : req.body.price
        })
    try{
        const bidData = await newBid.save()
        return res.status(201).send(bidData)
    }
    catch(err){
        console.log(err);
        res.status(400).send(err)
    }
}

module.exports={addBid}