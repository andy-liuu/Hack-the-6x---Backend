// Loads the configuration from config.env to process.env
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;
const URI = process.env.ATLAS_URI;

import cors from "cors";
import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

// Connecting all routes
import RatingRoutes from "./routes/RatingRoutes.js";
app.use("/rating", RatingRoutes);

import ProductRoutes from "./routes/ProductRoutes.js";
app.use("/product", ProductRoutes);

const start = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
