const express = require("express");
const User = require("../models/User");



//Register an User
const register = async (req,res)=>{
    const user = new User(req.body)
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


// Login a User

const login = async(req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken()
        res.send({user,token})
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
}


module.exports = {register, login}