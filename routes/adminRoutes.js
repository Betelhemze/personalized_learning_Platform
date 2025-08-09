const express = require("express"); //import express
const router = express.Router();
const {
  getallUser,
  newAdmin,
  getauser,
  updateProfile,
  deleteUser,
} = require("../controllers/adminController.js");

router.get("/", getallUser);

router.post("/", newAdmin);

router.get("/:id", getauser);

router.put("/:id", updateProfile);

router.delete("/:id", deleteUser);

module.exports = router;
