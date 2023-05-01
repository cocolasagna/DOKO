const express = require('express')

const Order = require("../models/Order")

const placeOrder = async(req,res)=>{
    const newOrder = new Order({
        user : req.body.user,
        orderItems:req.body.orderItems
    });
    try{  
        const OrderData = await newOrder.save()
        return res.status(401).send(OrderData)
        
    }catch(err){
        console.log(err);
        res.status(400).send(err)
    }
}

const userOrder = async(req,res)=>{
    try{
        const orders = await Order.find({ user: req.body.user });
        res.send(orders);
    }
    catch(err){
        console.log(err);
        res.status(400).send(err)
    }
}

const findOrder = async(req,res)=>{
    try{
        const order = await Order.findById(req.params.id);
        if (order) {
          res.send(order);
        } else {
          res.status(404).send({ message: 'Order Not Found' });
        }
      }
    catch(err){
        console.log(err);
        res.status(400).send(err)
    }
}

module.exports ={placeOrder,userOrder,findOrder}