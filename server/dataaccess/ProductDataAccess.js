import { ObjectID } from "bson";
import ProductSchema from "../entities/ProductSchema.js";

class ProductDataAccess {
  constructor() {}

  /**
   *
   * @param {string} productId
   * @returns {(Rating | undefined)}
   */
  async getById(productId) {
    const rating = await ProductSchema.findById(productId).lean();
    return rating;
  }

  /**
   *
   * @param {string} officeId
   * @return {{_id: ObjectID, rating: number}[]} array of ratings (same shape as schema)
   */
  async list(officeId) {
    const query = { officeId: ObjectID(officeId) };
    console.log(query);
    const ratings = await ProductSchema.find(query).lean();
    return ratings;
  }

  async create(productObj) {
    await ProductSchema.create(productObj);
  }
}

export default ProductDataAccess;
