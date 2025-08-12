const express = require("express");

const router = express.Router();

const {
    signup,
    login, 
    profile,
    Updateprofile,
    logout,
    view,
    feedback
} = require("../controllers/userController")
const validateToken =require ("../middleware/validateToken")

router.post("/register", signup);

router.post("/login", login);

router.get("/current",validateToken, profile);

router.put("/update", validateToken, Updateprofile);

router.post("/logout",validateToken,logout);

router.get("/view",view);

router.post("/feed", feedback);

module.exports = router;
