import Market from "../models/Market";

/**
 * Get all markets
 * @param {ctx} Koa Context
 */
const find = async ctx => (ctx.body = await Market.find());

/**
 * Find a market
 * @param {ctx} Koa Context
 */
const findById = async ctx => {};

/**
 * Add a market
 * @param {ctx} Koa Context
 */
const add = async ctx => {
  try {
    ctx.body = await new Market(ctx.request.body).save();
  } catch (err) {
    ctx.throw(422);
  }
};

/**
 * Update a market
 * @param {ctx} Koa Context
 */
const update = async ctx => {};

/**
 * Remove a market
 * @param {ctx} Koa Context
 */
const remove = async ctx => {};

export default {
  find,
  findById,
  add,
  update,
  remove
};
