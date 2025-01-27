const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters long"],
    },
    image:{
       type: String,
       required: true
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Fruits",
        "Vegetables",
        "Dairy",
        "Meat",
        "Seafood",
        "Grains",
        "Snacks",
        "Beverages",
        "Spices",
        "Others",
      ], 
      default: "Others",
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    availability: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, 
  }
);

const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;
