const mongoose = require("mongoose");

const CustomerScheme = mongoose.Schema(
    {
        customerId : {
            type: String,
            required: [true, "Enter the customer id!"],
        },
        customerName : {
            type: String,
            required: [false, "Enter the customer name!"],
        },
        customerUserName: {
            type: String,
            required: [true, "Enter the customer username!"],
        },
        customerPassword: {
            type: String,
            required: [true, "Enter the customer password!"],
        },
        email : {
            type: String,
            required: true
        },
        phoneNumber : {
            type: String,
            required: false
        },
        address: {
            street: {
                type: String,
                required: false
            },
            city: {
                type: String,
                required: false
            },
        },
        } ,
    {
        timestamps: true,
        collection: "customers"
    }
)

module.exports = mongoose.model("Customer", CustomerScheme);

