import Market from "../models/Market";

import storage from "../storage";

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
  const market = await Market.findById(ctx.params.id);

  ctx.assert(market, 404, "Market not found.");

  ctx.body = market;
};

/**
 * Add a market
 * @param {ctx} Koa Context
 */
const add = async ctx => {
  try {
    // const { mainImage } = ctx.request.files;
    // const { extraImages } = ctx.request.files;
    // const { key, url } = await storage.uploadFile({
    //   fileName: mainImage.name,
    //   filePath: mainImage.path,
    //   fileType: mainImage.type
    // });
    // const storedImages = Promise.all(
    //   extraImages.map(img => {
    //     return storage.uploadFile({
    //       fileName: img.name,
    //       filePath: img.path,
    //       fileType: img.type
    //     });
    //   })
    // );
    // ctx.body = await new Market({
    //   ...ctx.request.body,
    //   mainImage: { key, url },
    //   extraImages: storedImages.map(img => ({ key: img.key, url: img.url }))
    // }).save();
  } catch (err) {
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
const remove = async ctx => {
  const market = await Market.findByIdAndRemove(ctx.params.id);

  ctx.assert(market, 404, "Market not found.");

  ctx.body = market;
};

export default {
  find,
  findById,
  add,
  update,
  remove
};
