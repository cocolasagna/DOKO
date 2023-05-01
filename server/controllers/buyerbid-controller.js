const express = require("express");

const BuyerBid = require("../models/BuyerBid")

const addBid = async(req,res)=>{
    
        //const bidData = await BuyerBid.findOne({user:req.body.user})
        const newBid = new BuyerBid({
            user: req.body.user,
            bids: req.body.bids
        })
    try{
        const bidData = await newBid.save()
        return res.status(401).send(bidData)
    }
    catch(err){
        console.log(err);
        res.status(400).send(err)
    }
}

module.exports={addBid}