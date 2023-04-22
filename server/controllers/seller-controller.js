const express = require("express");
const Cookies = require('js-cookie')
const Product = require("../models/Product");
const Seller = require('../models/Seller')
var cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken");
const auth = require("./auth-controller");

const uuidv4 = require('uuid').v4
const sessions ={}
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
const login = async (req, res, next) => {
    try {
      const user = await Seller.findByCredentials(req.body.email, req.body.password);
      const token = await user.generateAuthToken();
     /* res.cookie("token", token, {
        
         httpOnly: false
       // expires: new Date(Date.now() + 60 * 1000),
      });*/
      res.set('Set-Cookie',`auth_token=${token}`)
      res.send({ userId: user.id });
     
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  };





const product = async(req,res)=>{
    
   // const seller = req.query.seller
    const seller = req.seller
    const sellerName = seller.name
    const sellerId = seller._id
    
    try {
        
        const products= await Product.find({ seller: sellerId}).populate({
            path:'seller',
             select: 'name email '
        });
       
        res.send({products , sellerName});
      } catch (error) {
        res.status(500).send(error);
      }
}

const addproduct = async(req,res)=>{
    const Seller = req.seller
    const sellerId = Seller.id
    console.log("seller:", sellerId)
    const product = new Product({
        name:req.body.name,
        description : req.body.description, 
        price:req.body.price,
        seller: sellerId
    }
    )

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
    

    const productdetails = async(req,res)=>{
        try {
           const product = await Product.findById(req.params.id) 
           res.send(product)
        } catch (error) {
            console.log(err)
        }
    }

    const logout = async(req,res)=>{
            try {
                res.clearCookie('auth_token' ,  { path: '/seller' })
               res.end()
                console.log('Logged Out')
            } catch (error) {
                console.log(error)
            }
     
    }

module.exports = {register ,login ,  product , addproduct, updateproduct, deleteproduct , productdetails , logout}