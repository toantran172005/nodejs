const mongoose = require("mongoose");

const CartSchema = mongoose.Schema(
  {
    customerId: {
      type: String,
      required: [true, "Enter the cart id!"],
    },
    items: [{
      productId: {
        type: String,
        required: [false, "Enter the id of the product!"],
      },
      productName: {
        type: String,
        required: [true, "Enter the name of the product!"],
      },
      quantity: {
        type: Number,
        required: true,
        default: 0,
      },
      information: {
        color: {
          type: String,
          required: false
        },
        size: [
          {
            type: String,
            required: false
          } 
        ],
        type: {
          type: String,
          required: false
        }
      },
      price: {
        type: Number,
        required: true,
        default: 0,
      },
      rating: {
        type: Number,
        required: false,
        default: 0,
      },
    }],
  },
  {
    timestamps: true,
    collection: "carts",
  }
);

CartSchema.methods.getTotal = () => {
  return this.items.length > 0
    ? this.items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    : 0;
};

module.exports = mongoose.model("Cart", CartSchema);
