import express from "express";
import User from "../models/RegisterModel.js"

const router = express.Router();

router.post("/create", async(req,res) => {
    try{
        const createdUser = await User.create({
            username: req.body.username,
            email:req.body.email,
            password:req.body.password
        })
        return res.status(200).json(createdUser)
    }catch(error){
        return res.status(500).json(error.message)
    }
   
})

export default router