const express = require("express");
const Cart = require("../models/cart.model");
const router = express.Router();

// API top 5 khách hàng chi tiêu nhiều nhất
router.get("/leaderBoard", async (req, res) => {
  try {
    const pipeline = [
      {
        $unwind: {
          path: "$items",
        },
      },
      {
        $project: {
          customerId: 1,
          itemCost: { $multiply: ["$items.price", "$items.quantity"] },
          itemDetails: "$items",
          customerIdConvert: 1,
        },
      },
      {
        $addFields: {
          customerIdConvert: { $toObjectId: "$customerId" },
        },
      },
      {
        $group: {
          _id: "$customerIdConvert",
          totalSpent: { $sum: "$itemCost" },
          items: { $push: "$itemDetails" },
        },
      },
      {
        $lookup: {
          from: "customers", 
          localField: "_id",
          foreignField: "_id",
          as: "customerInfo",
        },
      },
      {
        $unwind: "$customerInfo",
      },
      {
        $sort: { totalSpent: -1 },
      },
    ];

    const leaderBoard = await Cart.aggregate(pipeline);
    res.status(200).json({ leaderBoard });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API show all Carts
router.get("/showAllCart", async (req, res) => {
  try {
    const cart = await Cart.find();

    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
