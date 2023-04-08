const express = require("express");
const Cookies = require('js-cookie')
const Product = require("../models/Product");
const Seller = require('../models/Seller')
var cookieParser = require('cookie-parser')


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

const login = async(req,res)=>{
    try{
        const user = await Seller.findByCredentials(req.body.email, req.body.password);
        const userId = user.id
        const token = await user.generateAuthToken()

    // sessionStorage.setItem('token', token);
   
       /* await  res.cookie("access_token", token ,{
            //httpOnly:true,
          //  sameSite: 'None',
          // secure:true
            })  */    
  res.set('Authorization', `Bearer ${token}`)
       res.send({userId,token})
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
}






const product = async(req,res)=>{
    const seller = req.query.seller
    
    try {
        
        const products= await Product.find({ seller: seller}).populate({
            path:'seller',
             select: 'name email '
        });
       
        res.send(products);
      } catch (error) {
        res.status(500).send(error);
      }
}

const addproduct = async(req,res)=>{
    const product = new Product(req.body)

    try{
        await product.save()
        res.status(201).send(product)
        console.log('product added')
    
    }
    catch(err){
        res.status(400).send(err)
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
    

module.exports = {register ,login ,  product , addproduct, updateproduct, deleteproduct}