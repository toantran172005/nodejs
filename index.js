// declare express and mongoose
const express = require("express");
const mongoose = require("mongoose");
// import product model and router
const Product = require("./models/product.model");
const ProductRouter = require("./api_router/products.router");
const User = require("./models/customer.model");
const UserRouter = require("./api_router/customer.router");
// create express app
const app = express();
// change data to json
app.use(express.json());
// connect to mongodb
//mongoose.connect("mongodb://localhost:27017/n7_fashion");
// mongoose.connect("mongodb+srv://toantran172005:T111375t@cluster0.n0uir.mongodb.net/n7_fashion?retryWrites=true&w=majority");
mongoose
  .connect(
    "mongodb+srv://toantran172005:T111375t@cluster0.n0uir.mongodb.net/n7_fashion?retryWrites=true&w=majority",
  )
  .then(() => {
    console.log("Connect successfully!");
  })
  .catch(() => {
    console.log("Failed to connect");
  });

// use the router
app.use("/", ProductRouter);
app.use("/", UserRouter);

// listen the server to run on port 3000
app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
