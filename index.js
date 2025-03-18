// declare express and mongoose
const express = require("express");
const mongoose = require("mongoose");
// import product model and router
const Product = require("./models/product.model");
const ProductRouter = require("./api_router/products.router");
// create express app
const app = express();
// change data to json
app.use(express.json());
// connect to mongodb
mongoose
  .connect(
    "mongodb+srv://toantran172005:sduKFuCoCj9W7nC1@toni.zjkmz.mongodb.net/Node_Mongo?retryWrites=true&w=majority&appName=Toni"
  )
  .then(() => {
    console.log("Connect successfully!");
  })
  .catch(() => {
    console.log("Failed to connect");
  });

// use the router
app.use("/", ProductRouter);

// listen the server to run on port 3000
app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
