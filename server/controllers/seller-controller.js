const express = require("express");
const Product = require("../models/Product");
const Seller = require('../models/Seller')

//register seller
const register = async (req,res)=>{
    const user = new Seller(req.body)
    try{
        await user.save();
        console.log('User registered')
        const token = await user.generateAuthToken()
        res.status(201).send({user,token})

    }catch(err){
        console.log(err)
        res.status(400).send(err)
        
    }

}



module.exports = {register}