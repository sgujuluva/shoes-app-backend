import express from "express";

const router = express.Router();

router.post("/create", async(req,res) => {
    try{
        const createdUser = await User.create({
            
        })
    }
})

export default router