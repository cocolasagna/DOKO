const express = require("express");
const Product = require("../models/Product");
const User = require('../models/User')



const getallproduct = async (req,res)=>{
    try{
        const products = await Product.find().populate({
            path:'seller',
             select: 'name email '
        })
        res.send(products)
    }
    catch(err){
        res.status(500).send(err)
    }
}

const getOneproduct = async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id).populate({
            path:'seller',
             select: 'name email '
        })
        if(!product){
            return res.status(404).send()
        }
    
   res.send(product)
    } catch (error) {
        res.status(500).send(error)
    }
    

}





module.exports = {getallproduct , getOneproduct  }




