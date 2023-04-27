const express = require("express");
const Buyer = require("../models/Buyer")


const Cart = require("../models/Cart");

const addtocart= async(req,res)=>{
     try{    
        const cart= new Cart({
        buyer: req.buyer.userId,
        
        cartItems: req.body.cartItems
    });
        const cartData = await cart.save()
        return res.status(401).send(cartData)
        
    }catch(err){
        console.log(err);
        res.status(400).send(err)
    }
}

module.exports ={addtocart}