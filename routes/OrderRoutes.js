import express from "express";

import Order from "../models/OrderModel.js"

const router = express.Router();

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