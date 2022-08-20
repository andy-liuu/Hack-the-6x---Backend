import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
  },
  timestamp: {
    type: Number,
    required: true,
  },
});

const Rating = mongoose.model("Rating", RatingSchema);

export default Rating;
