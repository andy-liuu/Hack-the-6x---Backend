import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  officeId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
