const express = require("express");
const User = require("../models/customer.model");
const Cart = require("../models/cart.model");
const router = express.Router();

// API create user
router.post("/userSignUp", async (req, res) => {
  try {
    const regexUserName =/^[a-zA-Z0-9]{5,}$/;
    const regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
    const regexEmail = /^(?!_|\.)[\w.+%-]+@[a-zA-Z0-9.-]{2,}(\.[a-z]{2,})+$/;

    if (!regexUserName.test(req.body.customerUserName)) { 
      return res
        .status(500)
        .json({
          message: "Username must be at least 5 characters and alphanumeric!",
        });
    }
    if (!regexPassword.test(req.body.customerPassword)) {
      return res
        .status(500)
        .json({
          message:
            "Password must be at least 6 characters, alphanumeric, and contain at least one uppercase, one lowercase, one number, and one special character!",
        });
    }
    if (!regexEmail.test(req.body.email)) { 
      return res.status(500).json({ message: "Invalid email!" });
    }
    const user = await User.create(req.body);
    const idUser = user._id.toString();
    const cart = await Cart.create({ customerId: idUser, items: [] });
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
