import Market from "../models/Market";

/**
 * Get all markets
 * @param {ctx} Koa Context
 */
const index = async ctx => (ctx.body = await Market.find());

/**
 * Find a market
 * @param {ctx} Koa Context
 */
const show = async ctx => {
  const market = await Market.findById(ctx.params.id);

  ctx.assert(market, 404, "Market not found.");

  ctx.body = market;
};

/**
 * Add a market
 * @param {ctx} Koa Context
 */
const store = async ctx => {
  try {
    const market = await Market.create(ctx.request.body);
    ctx.body = market;
  } catch (err) {
    console.error(err);
    ctx.throw(422);
  }
};

/**
 * Update a market
 * @param {ctx} Koa Context
 */
const update = async ctx => {
  const market = await Market.findByIdAndUpdate(
    ctx.params.id,
    ctx.request.body
  );

  ctx.assert(market, 404, "Market not found.");

  ctx.body = market;
};

/**
 * Remove a market
 * @param {ctx} Koa Context
 */
const destroy = async ctx => {
  const market = await Market.findByIdAndRemove(ctx.params.id);

  ctx.assert(market, 404, "Market not found.");

  ctx.body = market;
};

export default {
  index,
  show,
  store,
  update,
  destroy
};
