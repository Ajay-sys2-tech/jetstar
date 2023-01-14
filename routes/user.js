const express = require('express');
const router = express.Router();

require("../db/conn");
const user = require("../models/user");


router.get("", (req, res) =>{
    console.log("Summary");
    res.render("index");
} );

router.get("/signup", (req, res) =>{
    res.render("signup");
} );


router.post("/signup", async(req, res) =>{
    try{
        const newuser = new user({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address
        });
    
        const savedUser = await newuser.save();
                if(savedUser){
                    res.redirect("payment/checkout");
                }
                else{
                res.redirect("signup");
                }
            
    }

        catch (error){
            console.log(error,"register error");
            res.redirect("signup");
        }
    
} );


router.get("/payment", (req, res) =>{
    res.render("payment");
} );



module.exports = router;