const express = require("express"); //import express
const router = express.Router();
const {
  getallUser,
  newAdmin,
  getauser,
  updateProfile,
  deleteUser,
} = require("../controllers/adminController.js");

const validateToken = require("../middleware/validateToken");
const requireRole = require("../middleware/roleMiddleware");

router.get("/", validateToken, requireRole("admin"), getallUser);

router.post("/", newAdmin);

router.get("/:id",validateToken, requireRole("admin") ,getauser);

router.put("/:id",validateToken, requireRole("admin"), updateProfile);

router.delete("/:id",validateToken, requireRole("admin"),deleteUser);

module.exports = router;
