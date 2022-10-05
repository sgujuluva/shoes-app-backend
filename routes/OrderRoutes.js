import express from "express";

import Order from "../models/OrderModel.js"

const router = express.Router();

//get all orders
router.get("/", async(req,res) => {

    const getOrders = await Order.find().populate("user")
    return res.status(200).json(getOrders)
})

//get orders by userId
router.get("/byuser/:userid", async(req,res) => {

    const getOrdersByUserId = await Order.find({type:req.params.userid}) // userid from client
    return res.status(200).json(getOrdersByUserId)
})

//post
router.post("/create", async(req,res) => {
    const createOrder = await Order.create({
        orderDescription: req.body.orderDescription,
        totalPrice: req.body.totalPrice,
        user:req.body.userId //ref from userdoc
    })
    return res.status(200).json(createOrder)
})

export default router