const express = require("express");
const router = express.Router();
const users = require("../../models/incomemodel/expensemodel");

// router.get("/",(req,res)=>{
//     console.log("connect");
// });

// register user

router.post("/addexpense", async (req, res) => {
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

// get userdata   "/getdata",

router.get("/getexpense", async (req, res) => {
  try {
    const userdata = await users.find();
    res.status(201).json(userdata);
    console.log(userdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

// get individual user  /getuser/:id"

router.get("/getexpenseid/:id", async (req, res) => {
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

// update user data  /updateuser/:id

router.patch("/updatexpense/:id", async (req, res) => {
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

// delete user   /deleteuser/:id"
router.delete("/deletexpense/:id", async (req, res) => {
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
