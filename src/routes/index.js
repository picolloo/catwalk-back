import Router from "koa-router";

import FileController from "../controllers/FileController";
import MarketController from "../controllers/MarketController";

const router = new Router();

router.get("/", MarketController.find);

router.get("/:id", MarketController.findById);

router.post("/", MarketController.add);

router.delete("/:id", MarketController.remove);

router.put("/:id", MarketController.update);

router.post("/upload", FileController.handleUpload);

export default router;
