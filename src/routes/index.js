import Router from "koa-router";

import FileController from "../controllers/FileController";
import MarketController from "../controllers/MarketController";

const router = new Router();

router.get("/", MarketController.index);

router.get("/:id", MarketController.show);

router.post("/", MarketController.store);

router.delete("/:id", MarketController.destroy);

router.put("/:id", MarketController.update);

router.post("/upload", FileController.store);

export default router;
