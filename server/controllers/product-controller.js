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

const deleteproduct = async (req,res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if(!product){
            return res.status(400).send()
        }
        res.send(product)
    } catch (error) {
        res.status(500).send(error)
    }
}


const updateproduct = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "description", "price", "image"];
    const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates" });
    }
    try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    });
    if (!product) {
    return res.status(404).send();
    }
    res.send(product);
    } catch (error) {
    res.status(400).send(error);
    }
    }

module.exports = {addproduct , getallproduct , getOneproduct , deleteproduct , updateproduct}