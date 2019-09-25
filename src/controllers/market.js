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
const findById = async ctx => {
  try {
    const market = await Market.findById(ctx.params.id);

    if (!market) {
      ctx.throw(404);
    }

    ctx.body = market;
  } catch (err) {
    if (err.name === "CastError" || err.name === "NotFoundError") {
      ctx.throw(404);
    }
    ctx.throw(500);
  }
};

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
const update = async ctx => {
  try {
    const market = await Market.findByIdAndUpdate(
      ctx.params.id,
      ctx.request.body
    );

    if (!market) {
      ctx.throw(404);
    }

    ctx.body = market;
  } catch (err) {
    if (err.name === "CastError" || err.name === "NotFoundError") {
      ctx.throw(404);
    }

    ctx.throw(500);
  }
};

/**
 * Remove a market
 * @param {ctx} Koa Context
 */
const remove = async ctx => {
  try {
    const market = await Market.findByIdAndRemove(ctx.params.id);

    if (!market) {
      ctx.throw(404);
    }

    ctx.body = market;
  } catch (err) {
    if (err.name === "CastError" || err.name === "NotFound") {
      ctx.throw(404);
    }
    ctx.throw(500);
  }
};

export default {
  find,
  findById,
  add,
  update,
  remove
};
