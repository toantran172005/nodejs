const mongoose = require("mongoose");

const CartSchema = mongoose.Schema(
  {
    cardId: {
      type: String,
      required: [true, "Enter the cart id!"],
    },
    customerId: {
      type: String,
      required: [true, "Enter the customer id!"],
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
    collection: "carts",
  }
);

module.exports = mongoose.model("Cart", CartSchema);
