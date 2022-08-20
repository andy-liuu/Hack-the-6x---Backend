import RatingDataAccess from "../dataaccess/RatingDataAccess.js";

class RatingLogic {
  #ratingDataAccess = new RatingDataAccess();
  constructor() {}

  /**
   *
   * @param {string} productId
   * @return {number} average of all ratings of a product
   */
  async getAverageScore(productId) {
    const ratings = await this.#ratingDataAccess.list(productId);

    if (ratings.length === 0) {
      return 0;
    } else {
      let sumRatings = 0;
      ratings.forEach((el) => (sumRatings += el.rating));
      return sumRatings / ratings.length;
    }
  }

  /**
   *
   * @param {string} productId
   * @returns {Rating[]} array of ratings
   */
  async list(productId) {
    const ratings = await this.#ratingDataAccess.list(productId);
    return ratings;
  }

  /**
   *
   * @param {string} productId
   * @param {number} rating
   * @param {string} comment
   */
  async create(productId, rating, comment) {
    const timestamp = Date.now();
    await this.#ratingDataAccess.create({
      productId,
      rating,
      comment,
      timestamp,
    });
  }
}

export default RatingLogic;
