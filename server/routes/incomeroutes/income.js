const express = require("express");
const router = express.Router();
const users = require("../../models/incomemodel/userSchema");

// router.get("/",(req,res)=>{
//     console.log("connect");
// });

// register user

router.post("/addincome", async (req, res) => {
  // console.log(req.body);
  const { title, ammount, desc } = req.body;

  try {
    const adduser = new users({
      title,
      ammount,
      desc,
    });

    await adduser.save();
    res.status(201).json(adduser);
    console.log(adduser);
  } catch (error) {
    res.status(422).json(error);
  }
});

// get userdata /getdata

router.get("/getincome", async (req, res) => {
  try {
    const userdata = await users.find();
    res.status(201).json(userdata);
    console.log(userdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

// get individual user  getuse

router.get("/getincomeid/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const userindividual = await users.findById({ _id: id });
    console.log(userindividual);
    res.status(201).json(userindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

// update user data

router.patch("/updatincome/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updateduser);
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
});

// delete user
router.delete("/deletincome/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await users.findByIdAndDelete({ _id: id });
    console.log(deletuser);
    res.status(201).json(deletuser);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;
