import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../controllers/user.js";
import User from "../models/User.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//Authentication
// router.get("/checkauth", verifyToken, (req, res, next) => {
//   res.send("You are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user, you are logged in and can delete your own acc");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello admin, you can edit all accounts");
// });

//Update
router.put("/:id", verifyUser, updateUser);

//Delete
router.delete("/:id", verifyUser, deleteUser);

//Get
router.get("/:id", verifyUser, getUser);

//Get all
router.get("/", verifyAdmin, getAllUsers);

export default router;
