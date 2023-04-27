const express = require("express");
const Cookies = require('js-cookie')


const Buyer = require("../models/Buyer");
var cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken");
const auth = require("./auth-controller");



//register buyer
const register = async (req,res)=>{
    const user = new Buyer(req.body)
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
      const user = await Buyer.findByCredentials(req.body.email, req.body.password);
      const token = await user.generateAuthToken();
     /* res.cookie("token", token, {
        
         httpOnly: false
       // expires: new Date(Date.now() + 60 * 1000),
      });*/
      res.set('Set-Cookie',`auth_token=${token}`)
      res.send({ userId: user.id , role : user.role });
     
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  };



module.exports ={register, login}