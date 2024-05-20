const express = require("express");
const router = express.Router();
const { addUser, getUsers, getUser,updateUser } = require('./../handlers/userHandle');

router.post("/users",async(req,res)=>{
    console.log("req.body", req.body);
    //user add operation
    await addUser (req.body);
    res.send("done");
});

router.get("/users",async(req,res)=>{
    let users= await getUsers();
    res.send(users);
});

router.get("/users/:id",async(req,res)=>{
    console.log("id",req.params["id"])
    let user= await getUsers(req.params["id"]);
    res.send(user);
});

router.put("/users/:id",async(req,res)=>{
    console.log("id",req.params["id"])
    await updateUser(req.params["id"],req.body);
    res.send();
});

module.exports =router;