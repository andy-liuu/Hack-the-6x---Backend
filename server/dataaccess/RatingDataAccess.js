import { ObjectID } from "bson";
import RatingSchema from "../entities/RatingSchema.js";

class RatingDataAccess {
  constructor() {}

  /**
   *
   * @param {string} ratingId
   * @returns {(Rating | undefined)}
   */
  async getById(ratingId) {
    const rating = await RatingSchema.findById(ratingId).lean();
    return rating;
  }

  /**
   *
   * @param {string} productId
   * @return {{_id: ObjectID, rating: number}[]} array of ratings (same shape as schema)
   */
  async list(productId) {
    const query = { productId: ObjectID(productId) };
    console.log(query);
    const ratings = await RatingSchema.find(query).lean();
    return ratings;
  }

  async create(ratingObj) {
    await RatingSchema.create(ratingObj);
  }
}

export default RatingDataAccess;
