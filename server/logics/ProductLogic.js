import ProductDataAccess from "../dataaccess/ProductDataAccess.js";

class ProductLogic {
  #productDataAccess = new ProductDataAccess();
  constructor() {}

  /**
   *
   * @param {string} officeId
   * @returns {Product[]} array of products
   */
  async list(officeId) {
    const ratings = await this.#productDataAccess.list(officeId);
    return ratings;
  }

  /**
   *
   * @param {string} officeId
   * @param {string} name
   * @param {string} comment
   */
  async create(officeId, name, description) {
    const timestamp = Date.now();
    await this.#productDataAccess.create({
      officeId,
      name,
      description,
      timestamp,
    });
  }
}

export default ProductLogic;
