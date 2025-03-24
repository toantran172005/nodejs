const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    orderId: {
      type: String,
      required: [true, "Enter the order id!"],
    },
    orderDate: {
      type: Date,
      required: [true, "Enter the order date!"],
    },
    items: [{ 
        productId: {
            type: String,
            required: [true, "Enter the product id!"],
        },
        productName: {
            type: String,
            required: [true, "Enter the name of the product!"],
        },
        quantity: {
            type: Number,
            required: [true, "Enter the quantity!"],
        },
        price: {
            type: Number,
            required: [true, "Enter the price!"],
        },
        color: {
            type: String,
            required: false
        },
        size: {
            type: String,
            required: false
        }
    }],
  },
  {
    timestamps: true,
    collection: "orders",
  }
);

module.exports = mongoose.model("Order", OrderSchema);
