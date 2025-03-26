const mongoose = require("mongoose");
const Product = require("./product.model");

const CartSchema = mongoose.Schema(
  {
    customerId: {
      type: String,
      required: [true, "Enter the cart id!"],
    },
    items: [Product.schema],
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
