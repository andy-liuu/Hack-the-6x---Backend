import express from "express";
const router = express.Router();

import RatingLogic from "../logics/RatingLogic.js";
const ratingLogic = new RatingLogic();

/*
all endpoints in this file have the following at beginning of route

/ratings/...
*/

router.post("/:productId", async (req, res) => {
  const productId = req.params.productId;
  await ratingLogic.create(productId, req.body.rating, req.body.comment);
  res.sendStatus(200);
});

router.get("/:productId", async (req, res) => {
  const productId = req.params.productId;
  const listOfRatings = await ratingLogic.list(productId);
  res.json({ ratings: listOfRatings });
});

router.get("/:productId/average-score", async (req, res) => {
  const productId = req.params.productId;
  const score = await ratingLogic.getAverageScore(productId);
  res.json({ "average-score": score });
});

export default router;
