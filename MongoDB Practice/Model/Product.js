const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    color: { type: String },
    size: { type: String, enum: ["small", "medium", "large", "XL"] },
    price: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
