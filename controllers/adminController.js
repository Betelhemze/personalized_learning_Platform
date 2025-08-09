const asyncHandler = require("express-async-handler"); // handle try and catch block for async function
const Userprofile = require("../models/adminModels");
//connect to the database
//perform the logic for req,res
//use UserProfile to connect with the userchema
const getallUser = asyncHandler(async (req, res) => {
  const user = await Userprofile.find();
  res.json(user);
});

const newAdmin = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  console.log("received:", req.body);
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("all field are required!");
  }

  const newUser = await Userprofile.create({
    name,
    email,
    password,
  });
  res.status(201).json(newUser);
});

const getauser = asyncHandler(async (req, res) => {
  const user = await Userprofile.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("user not found!");
  }
  res.json(user);
});

const updateProfile = asyncHandler(async (req, res) => {
  const user = await Userprofile.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("user not found!");
  }

  const updatedUser = await Userprofile.findByIdAndUpdate(
    req.params.id,//the use i want to update
    req.body,// the body of the user i want to update
    //query for 
    {
     new: true
    }
  );
  res.json(updatedUser);
});

const deleteUser = asyncHandler(async (req, res) => {
   const user = await Userprofile.findById(req.params.id);
   if (!user) {
     res.status(404);
     throw new Error("user not found!");
   }

   await user.deleteOne();
  res.json(user);
});

module.exports = { getallUser, newAdmin, getauser, updateProfile,deleteUser };
