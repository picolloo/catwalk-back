import Router from "koa-router";

import MarketController from "../controllers/market";

const router = new Router();

router.get("/", async (ctx, next) => {
  ctx.body = ctx.request.body;

  await next();
});

router.post("/", MarketController.add);

export default router;
