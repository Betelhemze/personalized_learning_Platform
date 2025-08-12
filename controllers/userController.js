const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//const { updateProfile } = require("./adminController");

const signup = asyncHandler(async (req, res) => {
  const { Fullname, email, password } = req.body;

  if (!Fullname || !email || !password ) {
    res.status(400);
    throw new Error("all field are required!");
  }
  // if a particluar address have an exisiting address
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("email already exists!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    Fullname,
    email,
    password: hashedPassword,
  
  });
  //to show only the email and id
  if (newUser) {
    res.status(201).json({_id: newUser.id, email: newUser.email });
  } else {
    res.status(400).json({ message: "user data not valid" });
  }

});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fiels are mandatory!!");
  }
  //if there is a user in the database

  const user = await User.findOne({ email });
  //compare password with the hashed password(user.password)
  if (user && (await bcrypt.compare(password, user.password))){
    //provide acces token
    const accessToken = jwt.sign(
      {
        //payload: pass the information we want in our token
        user: {
          Fullname: user.Fullname,
          email: user.email,
          id: user.id,
        },
      },
      /// access token secret
      //using access token we can access private route
      process.env.ACCESS_TOKEN,
      {expiresIn: "1h"}
    );
    res.status(200).json({ accessToken });
  }else{
    res.status(400);
    throw new Error ("email and password not found")
  }

});
//user current info is private 
//client has to pass access token so authnticated user can access the route
//middleware to help has validate the token 
const profile = asyncHandler(async (req, res) => {
  res.json(req.user);
});

const Updateprofile = asyncHandler(async (req, res) => {
  if(req.user.id !== req.params.id && req.user.role !== "admin"){
    return res.status(403).json({message: "you can't update other user profile!"})
  }
  res.json({ message: "update user profile!" });
});

const logout = asyncHandler(async (req, res) => {
  res.json({ message: "log out!" });
});

const view = asyncHandler(async (req, res) => {
  res.json({ message: "view enrolled courses!" });
});

const feedback = asyncHandler(async (req, res) => {
  res.json({ message: "give a feedback!" });
});

module.exports = {
  signup,
  login,
  profile,
  Updateprofile,
  logout,
  view,
  feedback,
};
