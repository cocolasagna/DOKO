const express = require("express");
const Product = require("../models/Product");


const addproduct = async(req,res)=>{
    const product = new Product(req.body)
    try{
        await product.save()
        res.status(201).send(product)
    }
    catch(err){
        res.status(400).send(err)
    }
}

const getallproduct = async (req,res)=>{
    try{
        const products = await Product.find()
        res.send(products)
    }
    catch(err){
        res.status(500).send(err)
    }
}

const getOneproduct = async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        if(!product){
            return res.status(404).send()
        }
    res.send(product)
    } catch (error) {
        res.status(500).send(error)
    }
    

}

module.exports = {addproduct , getallproduct , getOneproduct}