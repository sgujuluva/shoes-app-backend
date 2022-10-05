import express from "express";
import User from "../models/RegisterModel.js"

const router = express.Router();

//creating new user
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

//getting all user
router.get("/getusers", async(req,res) => {
    try{
        const getUsers = await User.find();
        return res.status(200).json(getUsers)
    }catch(error){
        return res.status(500).json(error.message)
    }
   
})

//getting user by id

router.get("/users/byid/:id", async(req,res) => {

    const getUserById = await User.findById(req.params.id)

    return res.status(200).json(getUserById)
})

export default router