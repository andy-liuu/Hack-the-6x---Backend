import express from "express";
const router = express.Router();

import ProductLogic from "../logics/ProductLogic.js";
const productLogic = new ProductLogic();

/*
all endpoints in this file have the following at beginning of route

/product/...
*/

router.post("/:officeId", async (req, res) => {
  const officeId = req.params.officeId;
  await productLogic.create(officeId, req.body.name, req.body.description);
  res.sendStatus(200);
});

router.get("/:officeId", async (req, res) => {
  const officeId = req.params.officeId;
  const listOfProducts = await productLogic.list(officeId);
  res.json({ products: listOfProducts });
});

export default router;
