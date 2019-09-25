import Router from "koa-router";

import MarketController from "../controllers/market";

const router = new Router();

router.get("/", MarketController.find);

router.get("/:id", MarketController.findById);

router.post("/", MarketController.add);

router.delete("/:id", MarketController.remove);

router.put("/:id", MarketController.update);

export default router;
